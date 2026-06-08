---
titulo: Registro de Infraestrutura — Máquina Local
host: DESKTOP-HJFIPFM
usuario: Beto
data_emissao: 2026-05-13
fuso: UTC-03:00 (Brasília)
---

# Registro de Infraestrutura — DESKTOP-HJFIPFM

Snapshot completo de hardware e software operacional da estação de trabalho local em 2026-05-13.

---

## 1. Identidade da Máquina

| Campo | Valor |
|---|---|
| Nome do host | `DESKTOP-HJFIPFM` |
| Usuário principal | `Beto` |
| Domínio / Workgroup | `WORKGROUP` |
| Tipo de sistema | x64-based PC (notebook — `PCSystemType = 2 Mobile`) |
| Fabricante | Positivo Bahia — VAIO |
| Modelo | `VJFE69F11X-B0221H` |
| Família | `VJFE-ADLBAT55` |
| SKU | `3344212` |
| Número de série (chassi / BIOS) | `87132930J` |
| Placa-mãe | Positivo Tecnologia SA — `VJFE69B` v.`11212313` |

---

## 2. Hardware

### 2.1 Processador (CPU)

| Campo | Valor |
|---|---|
| Modelo | **AMD Ryzen 7 5825U with Radeon Graphics** |
| Fabricante | AuthenticAMD |
| Arquitetura | x64 (AMD64 Family 25, Model 80, Stepping 0) |
| Soquete | FP6 |
| Núcleos físicos | 8 |
| Threads lógicos | 16 |
| Clock máximo | 2.000 MHz (base) — boost gerenciado pela plataforma |
| Cache L2 | 4.096 KB |
| Cache L3 | 16.384 KB |
| ProcessorId | `178BFBFF00A50F00` |

### 2.2 Memória RAM

| Campo | Valor |
|---|---|
| Total instalado | **32 GB** (1× 32 GB) |
| Total visível pelo SO | 31,4 GB |
| Slot | `P0 CHANNEL B / DIMM 0` |
| Part Number | `NMSO432F82-3200E` |
| Tipo | DDR4 SO-DIMM (SMBIOSMemoryType 26) |
| Velocidade | 3.200 MT/s (configurada a 3.200) |
| Form factor | SODIMM (12) |
| Memória física livre (no momento) | ~7,37 GB |

> Observação: apenas 1 dos slots populado. Há margem para upgrade dual-channel adicionando outro módulo idêntico.

### 2.3 Armazenamento

| Campo | Valor |
|---|---|
| Modelo | **SM2P32A8-512GC1** |
| Tipo | SSD NVMe |
| Capacidade | 512 GB (512.110.190.592 bytes) |
| Firmware | `VC0S036P` |
| Serial | `0000_0000_0000_0000_707C_1879_D939_6180` |
| Partições | 3 |
| Saúde | Healthy / OK |

**Volumes ativos:**

| Letra | Label | FS | Tamanho | Livre |
|---|---|---|---|---|
| C: | — | NTFS | 476 GB | 321 GB (~67%) |

### 2.4 GPU / Vídeo

| Campo | Valor |
|---|---|
| Adaptador | **AMD Radeon (TM) Graphics** (integrada — iGPU do Ryzen 5825U) |
| Processador de vídeo | AMD Radeon Graphics Processor (0x15E7) |
| VRAM dedicada (reportada) | 512 MB |
| Driver | `31.0.12042.4` (18/10/2022) |
| Resolução atual | 1920 × 1200 @ 60 Hz |

> ⚠️ Driver gráfico está **defasado** (out/2022). Vale considerar atualizar via AMD Adrenalin ou WHQL.

### 2.5 Rede

| Interface | Descrição | Status | Velocidade | MAC | IP |
|---|---|---|---|---|---|
| Wi-Fi | Realtek 8852BE Wi-Fi 6 PCI-E NIC | Up | 1.2 Gbps | `E8-5C-5F-1E-9F-35` | `192.168.1.7/24` (DHCP) |
| Ethernet | Realtek PCIe GbE Family Controller | (presente, sem cabo) | — | — | — |
| Bluetooth | Realtek Bluetooth Adapter | habilitado | — | — | — |

### 2.6 Periféricos / Dispositivos

- **Câmera:** Positivo Theia Camera (webcam integrada)
- **Teclado:** HID + PS/2 padrão
- **Mouse:** múltiplos dispositivos HID (touchpad + USB)
- **USB:** AMD USB 3.10 eXtensible Host Controller (2 controladores), hubs USB 3.0 + Generic Hub
- **Bluetooth:** Realtek + pilha Microsoft (LE + RFCOMM + PAN)

### 2.7 Energia

| Campo | Valor |
|---|---|
| Bateria | SR Real Battery |
| Carga estimada | 98% |
| Status | `2` (em uso AC / descarregando conforme contexto) |
| Adaptador AC | presente (ACPI) |

---

## 3. Firmware / BIOS

| Campo | Valor |
|---|---|
| BIOS / UEFI | ALASKA - 1072009 |
| Versão SMBIOS | `V1.24.X` |
| Data de lançamento | 18/06/2025 |
| Vendor base | American Megatrends (string "ALASKA") |
| HAL | `10.0.19041.6456` |

---

## 4. Sistema Operacional

| Campo | Valor |
|---|---|
| SO | **Microsoft Windows 10 Pro** |
| Edição | Professional |
| Versão (release) | `2009` (21H2/22H2 family) |
| Build | `10.0.19045` |
| Arquitetura | 64 bits |
| Locale | `pt-BR` |
| Layout de teclado | `00010416` (ABNT-2) |
| Fuso | (UTC-03:00) Brasília |
| Data de instalação | 02/04/2026 17:09 |
| Último boot | 18/04/2026 00:10 |
| Uptime atual | **25 dias 0 h 3 min** |
| Proprietário registrado | Beto |

### 4.1 PowerShell / Shell

| Shell | Versão |
|---|---|
| Windows PowerShell | `5.1.19041.6456` |
| PowerShell 7 (`pwsh`) | **não instalado** |

### 4.2 Atualizações recentes (últimos hotfixes)

| KB | Tipo | Data |
|---|---|---|
| KB5071959 | Security Update | 18/04/2026 |
| KB5071982 | Security Update | 16/04/2026 |
| KB5072653 | Security Update | 15/04/2026 |
| KB5066130 | Update | 15/04/2026 |
| KB5011067 | Update | 15/04/2026 |
| KB5011048 | Update | 14/04/2026 |
| KB5066135 | Update | 14/04/2026 |
| KB5066790 | Security Update | 09/04/2026 |
| KB5015684 | Update | 04/12/2023 |
| KB5014032 | Security Update | 04/12/2023 |
| KB5032907 | Update | 04/12/2023 |

> ⚠️ **Windows 10 está em fim de suporte (out/2025).** Considerar plano de migração para Windows 11 (compatibilidade: o Ryzen 5825U é suportado).

### 4.3 Segurança (Microsoft Defender)

| Campo | Valor |
|---|---|
| AMService habilitado | ✅ |
| Antivírus habilitado | ✅ |
| Proteção em tempo real | ✅ |
| Monitoramento comportamental | ✅ |
| Versão das assinaturas | `1.449.585.0` |
| Última atualização | 12/05/2026 12:55 |

---

## 5. Stack de Desenvolvimento

| Ferramenta | Versão | Observação |
|---|---|---|
| **Node.js** | `v24.15.0` | runtime instalado |
| **npm** | `11.12.1` | |
| **Python** | `3.14.5` | |
| **Git for Windows** | `2.54.0.windows.1` | |
| **winget** | `v1.28.240` | gerenciador de pacotes |
| **Java JRE 8** | Update 471 (32 + 64 bits) | + Auto Updater |
| **MSVC Redistributables** | `14.40.33810` (2015–2022 x64) | |

---

## 6. Aplicações Instaladas (inventário consolidado via Registro do Windows)

### 6.1 Produtividade / Office

- **Microsoft Office Professional Plus 2019 — pt-br** (`16.0.10417.20108`)
- **Microsoft OneDrive** (`26.070.0414.0001`)
- **Google Drive** (`124.0.3.0`)
- **Obsidian** (`1.12.7`) — vault Meu Cumpadre
- **ClickUp** (`3.5.208.0`)
- **Adobe Acrobat 64-bit** (`26.001.21529`) + Adobe Refresh Manager
- **PDF24 Creator** (`11.30.0`)
- **Poppler** (`25.07.0-0`) — utilitários PDF
- **WinRAR** (`6.11`)

### 6.2 Navegadores

- **Google Chrome** (`148.0.7778.97`)
- **Microsoft Edge** (`148.0.3967.54`) + WebView2 Runtime (`148.0.3967.54`)

### 6.3 Mídia / Captura

- **OBS Studio** (`32.1.1`)
- **TubeDigger** (`8.1.2`)

### 6.4 Runtimes / Sistema

- Microsoft Visual C++ 2015–2022 Redistributable (x64)
- Java 8 Update 471 (x86 + x64) + Auto Updater
- Microsoft Update Health Tools
- Office 16 Click-to-Run (Extensibility / Licensing / Localization)

### 6.5 Dev

- Git `2.54.0`
- Node.js `24.15.0`
- Python `3.14.5`

---

## 7. Pontos de Atenção / Recomendações

1. **Windows 10 fora de suporte mainstream** — planejar upgrade para Windows 11 (hardware é compatível).
2. **Driver AMD Radeon defasado** (out/2022) — atualizar via AMD Adrenalin Edition.
3. **Memória em single-channel** — apenas 1 dos 2 slots SODIMM populado; adicionar gêmeo do `NMSO432F82-3200E` traz ganho real em iGPU/produtividade.
4. **SSD único de 512 GB com 67% livre** — folga saudável, mas sem redundância. Considerar backup automatizado (OneDrive + Google Drive já presentes — validar cobertura efetiva).
5. **Java 8 instalado (32 + 64 bits)** — verificar se ainda é necessário; é vetor histórico de vulnerabilidades.
6. **PowerShell 7 (pwsh) ausente** — instalar para terminal moderno e melhor compatibilidade com ferramentas atuais.
7. **Bateria reportando `DesignCapacity` vazio** — pode indicar driver/firmware sem expor telemetria; rodar `powercfg /batteryreport` para análise de saúde.
8. **Uptime de 25 dias** — reiniciar para aplicar atualizações pendentes e limpar memória.

---

*Gerado automaticamente a partir de coleta via PowerShell + WMI/CIM + Registro em 2026-05-13.*
