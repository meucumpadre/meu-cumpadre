# SPEC TECNICA — AUTOMACAO MEU INSS VIA PLAYWRIGHT

**MEU CUMPADRE — Motor de Protocolo Automatizado**

Versao 1.0 — 27/03/2026

De: Claude (Co-founder) + Alessandro (CEO)

Para: Igor Fernandes (Dev Lead)

Stack: **NestJS + TypeScript + Playwright + MySQL + BullMQ**

---

## 1. PROBLEMA

Protocolar um requerimento no Meu INSS manualmente consome **87 minutos** (dado real, caso [TITULAR-pseudonimizado] 26/03/2026). O sistema e instavel em horario comercial (14h-17h), uploads falham e precisam ser repetidos ate 4x, e o operador fica preso na tela esperando o sistema responder.

**Meta:** Reduzir pra **<10 minutos** por protocolo, com retry automatico em background.

**Chave tecnica:** A verificacao em 2 etapas (2FA) do gov.br e **desativada** enquanto o processo esta aberto. Isso permite login automatizado com CPF + senha.

---

## 2. ARQUITETURA GERAL

```
                    ┌─────────────────┐
                    │   Dashboard     │
                    │   (NestJS API)  │
                    └────────┬────────┘
                             │ Enfileira caso
                             ▼
                    ┌─────────────────┐
                    │   BullMQ Queue  │
                    │   (Redis)       │
                    └────────┬────────┘
                             │ Processa
                             ▼
                    ┌─────────────────┐
                    │   Worker        │
                    │   Playwright    │
                    │   (headless)    │
                    └────────┬────────┘
                             │ Interage
                             ▼
                    ┌─────────────────┐
                    │   meu.inss      │
                    │   .gov.br       │
                    └────────┬────────┘
                             │ Resultado
                             ▼
                    ┌─────────────────┐
                    │   MySQL         │
                    │   (audit trail) │
                    └─────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   WhatsApp API  │
                    │   (notificacao) │
                    └─────────────────┘
```

---

## 3. MODULO NESTJS

### 3.1 Estrutura de modulos

```
src/
├── modules/
│   ├── inss-automation/
│   │   ├── inss-automation.module.ts
│   │   ├── inss-automation.service.ts
│   │   ├── inss-automation.controller.ts
│   │   ├── processors/
│   │   │   ├── login.processor.ts
│   │   │   ├── upload.processor.ts
│   │   │   ├── location.processor.ts
│   │   │   ├── protocol.processor.ts
│   │   │   └── confirmation.processor.ts
│   │   ├── dto/
│   │   │   ├── enqueue-case.dto.ts
│   │   │   └── case-status.dto.ts
│   │   ├── entities/
│   │   │   ├── case.entity.ts
│   │   │   ├── automation-job.entity.ts
│   │   │   ├── automation-log.entity.ts
│   │   │   └── credential.entity.ts
│   │   └── utils/
│   │       ├── retry.util.ts
│   │       ├── screenshot.util.ts
│   │       └── human-delay.util.ts
│   ├── credentials/
│   │   ├── credentials.module.ts
│   │   └── credentials.service.ts
│   └── notification/
│       ├── notification.module.ts
│       └── whatsapp.service.ts
```

### 3.2 Interfaces TypeScript

```typescript
// enqueue-case.dto.ts
export class EnqueueCaseDto {
  citizenCpf: string;
  benefitType: BenefitType;
  documents: DocumentFile[];
  preferredLocation?: string; // codigo APS
  priority?: 'normal' | 'urgent';
}

export interface DocumentFile {
  filename: string;
  path: string; // caminho no storage (GCS ou local)
  type: 'rg' | 'cpf' | 'laudo_medico' | 'certidao' | 'cnis' | 'declaracao' | 'outro';
  sizeBytes: number;
}

export enum BenefitType {
  AUXILIO_DOENCA = 'B31',
  APOSENTADORIA_IDADE = 'B41',
  APOSENTADORIA_RURAL = 'B41R',
  APOSENTADORIA_INVALIDEZ = 'B32',
  PENSAO_MORTE = 'B21',
  BPC_IDOSO = 'B88',
  BPC_DEFICIENCIA = 'B87',
  SALARIO_MATERNIDADE = 'B80',
}

export enum JobType {
  LOGIN = 'login',
  UPLOAD = 'upload',
  LOCATION = 'location',
  PROTOCOL = 'protocol',
  CONFIRMATION = 'confirmation',
}

export enum JobStatus {
  QUEUED = 'queued',
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
  RETRY = 'retry',
}

export interface CaseStatus {
  caseId: number;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  currentJob: JobType;
  protocolAgendamento?: string;
  protocolRequerimento?: string;
  derDate?: Date;
  attempts: number;
  lastError?: string;
}
```

---

## 4. OS 5 JOBS

### Job 1: Login gov.br

```typescript
// login.processor.ts
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { chromium, Page } from 'playwright';

@Processor('inss-automation')
export class LoginProcessor {
  @Process('login')
  async handleLogin(job: Job<LoginJobData>) {
    const { cpf, encryptedPassword } = job.data;
    const password = await this.credentialsService.decrypt(encryptedPassword);

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: this.getRealisticUserAgent(),
      viewport: { width: 1366, height: 768 },
    });
    const page = await context.newPage();

    try {
      // Navegar pro Meu INSS
      await page.goto('https://meu.inss.gov.br/', {
        waitUntil: 'networkidle',
        timeout: 60000,
      });

      // Clicar em "Entrar com gov.br"
      await page.click('button:has-text("Entrar")');
      await this.humanDelay(1000, 3000); // espera humana

      // Preencher CPF
      await page.fill('input[name="accountId"]', cpf, {
        timeout: 30000,
      });
      await this.humanDelay(500, 1500);

      // Clicar continuar
      await page.click('button:has-text("Continuar")');
      await this.humanDelay(1000, 2000);

      // Preencher senha
      await page.fill('input[type="password"]', password, {
        timeout: 30000,
      });
      await this.humanDelay(500, 1000);

      // Clicar entrar
      await page.click('button:has-text("Entrar")');

      // Aguardar dashboard carregar
      await page.waitForSelector('[data-testid="dashboard"]', {
        timeout: 60000,
      });

      // Salvar cookies de sessao
      const cookies = await context.cookies();
      await this.sessionService.saveCookies(job.data.caseId, cookies);

      await this.logAction(job.data.caseId, 'login', 'success');

      return { success: true, cookies };
    } catch (error) {
      await this.screenshotOnError(page, job.data.caseId, 'login');
      throw error; // BullMQ faz retry automatico
    } finally {
      await browser.close();
    }
  }

  // Delay aleatorio pra simular humano
  private async humanDelay(min: number, max: number) {
    const delay = Math.random() * (max - min) + min;
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}
```

**Retry config:**
- Max attempts: 3
- Backoff: exponential (10s, 30s, 90s)
- Se timeout > 120s na pagina de login: sistema fora do ar → reagendar pro horario fora-pico

### Job 2: Upload de Documentos

```typescript
// upload.processor.ts
@Process('upload')
async handleUpload(job: Job<UploadJobData>) {
  const { caseId, documents, cookies } = job.data;

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await context.addCookies(cookies);
  const page = await context.newPage();

  try {
    // Navegar pra area de upload
    await page.goto('https://meu.inss.gov.br/novo-requerimento');
    await page.waitForLoadState('networkidle');

    for (const doc of documents) {
      let uploaded = false;
      let attempts = 0;

      while (!uploaded && attempts < 5) {
        attempts++;
        try {
          // Clicar em "Anexar documento"
          await page.click('button:has-text("Anexar")');
          await this.humanDelay(1000, 2000);

          // Selecionar tipo de documento
          await page.selectOption('select[name="tipoDocumento"]', doc.type);

          // Upload do arquivo
          const fileInput = await page.locator('input[type="file"]');
          await fileInput.setInputFiles(doc.path);

          // Aguardar upload completar (ate 60s por arquivo)
          await page.waitForSelector('.upload-success', {
            timeout: 60000,
          });

          uploaded = true;
          await this.logAction(caseId, 'upload', `success: ${doc.filename} (tentativa ${attempts})`);

        } catch (uploadError) {
          await this.logAction(caseId, 'upload', `fail: ${doc.filename} (tentativa ${attempts}): ${uploadError.message}`);
          await this.screenshotOnError(page, caseId, `upload_${doc.filename}_attempt${attempts}`);

          if (attempts < 5) {
            // Espera 30s antes de tentar de novo
            await new Promise(r => setTimeout(r, 30000));
            // Recarregar pagina
            await page.reload({ waitUntil: 'networkidle' });
          }
        }
      }

      if (!uploaded) {
        throw new Error(`Upload falhou apos 5 tentativas: ${doc.filename}`);
      }
    }

    return { success: true, documentsUploaded: documents.length };
  } finally {
    await browser.close();
  }
}
```

**Retry config:**
- Max 5 tentativas por documento
- Intervalo entre retries: 30s
- Se todos os docs falharem: reagendar caso inteiro pro horario fora-pico

### Job 3: Selecao de Localidade

```typescript
// location.processor.ts
@Process('location')
async handleLocation(job: Job<LocationJobData>) {
  const { caseId, preferredLocation, benefitType, cookies } = job.data;

  // ... setup browser com cookies ...

  try {
    // Navegar pra selecao de agencia
    await page.click('button:has-text("Selecionar agência")');
    await page.waitForLoadState('networkidle');

    if (preferredLocation) {
      // Buscar agencia especifica
      await page.fill('input[name="busca"]', preferredLocation);
      await this.humanDelay(1000, 2000);
      await page.click('.resultado-agencia:first-child');
    } else {
      // Selecionar primeira vaga disponivel
      await page.click('.agencia-disponivel:first-child');
    }

    // Capturar data e local selecionado
    const locationInfo = await page.textContent('.agencia-selecionada');
    await this.logAction(caseId, 'location', `selected: ${locationInfo}`);

    return { success: true, location: locationInfo };
  } finally {
    await browser.close();
  }
}
```

### Job 4: Protocolo do Requerimento

```typescript
// protocol.processor.ts
@Process('protocol')
async handleProtocol(job: Job<ProtocolJobData>) {
  // ... setup browser com cookies ...

  try {
    // Confirmar requerimento
    await page.click('button:has-text("Confirmar")');
    await this.humanDelay(2000, 4000);

    // Aguardar pagina de confirmacao
    await page.waitForSelector('.protocolo-gerado', { timeout: 120000 });

    // Capturar protocolos
    const protocolAgendamento = await page.textContent('.protocolo-agendamento');
    const protocolRequerimento = await page.textContent('.protocolo-requerimento');
    const derDate = await page.textContent('.data-entrada');

    // Salvar no MySQL
    await this.caseService.updateProtocol(caseId, {
      protocolAgendamento,
      protocolRequerimento,
      derDate: new Date(derDate),
      status: 'completed',
    });

    await this.logAction(caseId, 'protocol', `AG:${protocolAgendamento} REQ:${protocolRequerimento} DER:${derDate}`);

    return { protocolAgendamento, protocolRequerimento, derDate };
  } finally {
    await browser.close();
  }
}
```

### Job 5: Confirmacao + Notificacao

```typescript
// confirmation.processor.ts
@Process('confirmation')
async handleConfirmation(job: Job<ConfirmationJobData>) {
  const { caseId, protocolRequerimento, citizenPhone } = job.data;

  // Screenshot da tela de confirmacao
  // Hash SHA-256 do protocolo
  const hash = createHash('sha256')
    .update(`${caseId}:${protocolRequerimento}:${Date.now()}`)
    .digest('hex');

  // Salvar hash
  await this.caseService.updateHash(caseId, hash);

  // Notificar cidadao via WhatsApp
  await this.whatsappService.sendTemplate(citizenPhone, 'protocolo_confirmado', {
    protocolo: protocolRequerimento,
    data: new Date().toLocaleDateString('pt-BR'),
  });

  await this.logAction(caseId, 'confirmation', `hash:${hash} notified:${citizenPhone}`);
}
```

---

## 5. MODELO DE DADOS MYSQL

```sql
-- Tabela de casos
CREATE TABLE cases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  citizen_cpf VARCHAR(14) NOT NULL,
  citizen_name VARCHAR(255),
  citizen_phone VARCHAR(20),
  benefit_type ENUM('B31','B41','B41R','B32','B21','B88','B87','B80') NOT NULL,
  status ENUM('pending','queued','processing','completed','failed','cancelled') DEFAULT 'pending',
  protocol_agendamento VARCHAR(20),
  protocol_requerimento VARCHAR(20),
  der_date DATETIME,
  hash_sha256 VARCHAR(64),
  preferred_location VARCHAR(100),
  total_attempts INT DEFAULT 0,
  total_time_seconds INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_cpf (citizen_cpf),
  INDEX idx_status (status),
  INDEX idx_created (created_at)
);

-- Tabela de jobs de automacao
CREATE TABLE automation_jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  case_id INT NOT NULL,
  job_type ENUM('login','upload','location','protocol','confirmation') NOT NULL,
  status ENUM('queued','running','completed','failed','retry') DEFAULT 'queued',
  attempts INT DEFAULT 0,
  max_attempts INT DEFAULT 5,
  last_error TEXT,
  started_at DATETIME,
  completed_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (case_id) REFERENCES cases(id),
  INDEX idx_case_status (case_id, status)
);

-- Tabela de logs (audit trail)
CREATE TABLE automation_logs (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  job_id INT,
  case_id INT NOT NULL,
  action VARCHAR(50) NOT NULL,
  detail TEXT,
  screenshot_path VARCHAR(500),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (case_id) REFERENCES cases(id),
  INDEX idx_case_time (case_id, created_at)
);

-- Tabela de credenciais (criptografadas)
CREATE TABLE credentials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  citizen_cpf VARCHAR(14) NOT NULL UNIQUE,
  encrypted_password BLOB NOT NULL,
  encryption_key_id VARCHAR(100) NOT NULL, -- referencia ao vault
  procuracao_valid_until DATE,
  is_2fa_disabled BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_cpf (citizen_cpf)
);
```

---

## 6. CONFIGURACAO BULLMQ

```typescript
// inss-automation.module.ts
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'inss-automation',
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 10000, // 10s, 30s, 90s
        },
        removeOnComplete: false, // manter pra auditoria
        removeOnFail: false,
      },
    }),
  ],
})

// Enfileirar caso
async enqueueCase(dto: EnqueueCaseDto) {
  // Verificar se e horario de pico
  const hour = new Date().getHours();
  const isPeakHour = hour >= 14 && hour <= 17;
  const delay = isPeakHour
    ? this.calculateDelayToOffPeak() // agendar pra 19h
    : 0;

  const job = await this.automationQueue.add('process-case', dto, {
    delay,
    priority: dto.priority === 'urgent' ? 1 : 10,
  });

  return { jobId: job.id, scheduledFor: isPeakHour ? '19:00' : 'agora' };
}
```

---

## 7. CIRCUIT BREAKER

```typescript
// retry.util.ts
export class CircuitBreaker {
  private consecutiveFailures = 0;
  private isOpen = false;
  private readonly threshold = 3;

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.isOpen) {
      throw new Error('Circuit breaker aberto — sistema INSS indisponivel');
    }

    try {
      const result = await fn();
      this.consecutiveFailures = 0;
      return result;
    } catch (error) {
      this.consecutiveFailures++;
      if (this.consecutiveFailures >= this.threshold) {
        this.isOpen = true;
        // Pausar fila + alertar supervisor
        await this.pauseQueueAndAlert();
        // Reagendar tudo pro horario fora-pico
        await this.rescheduleAllToOffPeak();
        // Reabrir em 30 min
        setTimeout(() => { this.isOpen = false; }, 30 * 60 * 1000);
      }
      throw error;
    }
  }
}
```

---

## 8. SEGURANCA

| Requisito | Implementacao |
|:--|:--|
| Credenciais em repouso | AES-256 via GCP Secret Manager ou HashiCorp Vault |
| Procuracao eletronica | Validar `procuracao_valid_until` antes de cada job |
| Audit trail | Toda acao logada com timestamp, case_id, screenshot |
| LGPD | Retencao maxima 5 anos apos encerramento do caso. Consentimento trackeado. |
| Sem credenciais no codigo | Zero em .env ou hardcoded — tudo via vault |
| Fingerprinting | User-agent realista, viewport 1366x768, delays aleatorios |

---

## 9. METRICAS E DASHBOARD

```typescript
// metricas que o dashboard deve mostrar
interface AutomationMetrics {
  avgProtocolTimeSeconds: number;  // target: < 600 (10 min)
  successRateFirstAttempt: number; // % que funciona de primeira
  successRateWithRetry: number;    // % que funciona com retry
  casesInQueue: number;
  casesProcessedToday: number;
  casesFailedToday: number;
  peakHoursHeatmap: Record<number, number>; // hora -> tempo medio
  circuitBreakerStatus: 'closed' | 'open';
}
```

---

## 10. FASES DE IMPLEMENTACAO

| Fase | Escopo | Prazo sugerido | Entrega |
|:--|:--|:--|:--|
| **1 (MVP)** | Login + Upload + Protocolo com trigger manual | 2 semanas | Bot funciona com 1 clique no dashboard |
| **2** | Fila BullMQ + retry automatico + agendamento fora-pico | 1 semana | Casos entram na fila, bot processa sozinho |
| **3** | Circuit breaker + notificacao WhatsApp | 1 semana | Cidadao recebe confirmacao automatica |
| **4** | Watchdog de status (monitoramento pos-protocolo) | 2 semanas | Scraping mensal + alerta de exigencias |
| **5** | Selecao inteligente de localidade (menor fila) | 1 semana | Bot escolhe melhor APS automaticamente |

---

## 11. RISCOS E MITIGACOES

| Risco | Probabilidade | Mitigacao |
|:--|:--|:--|
| INSS bloqueia automacao | Media | User-agent realista, delays humanos (1-4s entre acoes), max 10 casos/hora por IP |
| Layout do portal muda | Alta (acontece ~2x/ano) | Seletores resilientes (data-testid > CSS > XPath). Alerta automatico se seletor nao encontrado |
| Termos de uso gov.br | Baixa | Operacao via procuracao eletronica (Art. 653 CC). Mandatario age em nome do mandante |
| Credenciais vazam | Critica | Vault + rotacao de chaves + audit log + alerta em acesso anomalo |
| Sistema INSS fora do ar | Alta (18% das vezes) | Circuit breaker + reagendamento automatico fora-pico |

---

## 12. DEPENDENCIAS

```json
{
  "dependencies": {
    "@nestjs/core": "^10.x",
    "@nestjs/bull": "^10.x",
    "bull": "^4.x",
    "playwright": "^1.42.x",
    "ioredis": "^5.x",
    "typeorm": "^0.3.x",
    "mysql2": "^3.x",
    "crypto": "native"
  }
}
```

---

## 13. PRIMEIRO PASSO PARA IGOR

1. `npm install playwright @nestjs/bull bull ioredis`
2. Criar as 4 tabelas MySQL (secao 5)
3. Implementar Job 1 (login) isolado — testar com 1 CPF de teste
4. Se login funcionar: implementar Job 2 (upload) com 1 documento
5. Se upload funcionar: integrar Job 3+4+5 em sequencia

**Teste inicial sugerido:** Usar o CPF do [TITULAR-pseudonimizado] (ja tem procuracao ativa, 2FA desativado, processo aberto). Tentar login + upload de 1 documento em horario fora-pico (20h).

---

*Documento gerado por Claude (Co-founder) em 27/03/2026. Baseado nos dados reais do caso [TITULAR-pseudonimizado] (87 min de protocolo manual em 26/03/2026).*
