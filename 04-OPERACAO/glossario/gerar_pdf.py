# -*- coding: utf-8 -*-
"""Renderiza o Vocabulário da Casa MC em PDF (tabela/planilha) via Pillow+DejaVu."""
from PIL import Image, ImageDraw, ImageFont
from gerar_dados import GRUPOS, DATA

DPI = 150
W, H = int(8.27*DPI), int(11.69*DPI)      # A4 ~ 1240 x 1753
M = int(0.5*DPI)                           # margem 75px
FREG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FBLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
def F(sz, b=False): return ImageFont.truetype(FBLD if b else FREG, sz)

f_title=F(30,True); f_sub=F(14); f_meta=F(11); f_band=F(16,True)
f_term=F(13,True); f_def=F(13); f_head=F(13,True); f_foot=F(9)

GREEN=(27,67,50); BAND=(45,106,79); ALT=(238,246,240); BORDER=(183,205,191)
TERMC=(27,67,50); BODY=(33,42,31); META=(108,117,125); WHITE=(255,255,255)

def san(s):
    s=s.replace('⚠️','(!) ').replace('⚠','(!) ')
    out=[]
    for ch in s:
        cp=ord(ch)
        if ch=='️': continue
        if cp>=0x1F000: continue
        if 0x2600<=cp<=0x27BF: continue
        out.append(ch)
    return ''.join(out).strip()

PADX=10; PADY=8; LINEH=20
TERM_W=300
col1_x=M
col2_x=M+TERM_W+2*PADX
right=W-M
def_w=right-col2_x-PADX
bottom=H-M-26

_sc=ImageDraw.Draw(Image.new("RGB",(8,8)))
def tlen(t,f): return _sc.textlength(t,font=f)

def wrap(text,font,maxw):
    lines=[]
    for para in text.split("\n"):
        cur=""
        for w in para.split(" "):
            trial=w if not cur else cur+" "+w
            if tlen(trial,font)<=maxw:
                cur=trial
            else:
                if cur: lines.append(cur)
                if tlen(w,font)>maxw:
                    piece=""
                    for ch in w:
                        if tlen(piece+ch,font)<=maxw: piece+=ch
                        else: lines.append(piece); piece=ch
                    cur=piece
                else:
                    cur=w
        if cur: lines.append(cur)
    return lines or [""]

pages=[]
def new_page():
    img=Image.new("RGB",(W,H),WHITE)
    pages.append(img)
    return img, ImageDraw.Draw(img)

def header_row(d,y):
    h=LINEH+2*PADY
    d.rectangle([M,y,right,y+h],fill=GREEN)
    d.text((col1_x+PADX,y+PADY),"Termo",font=f_head,fill=WHITE)
    d.text((col2_x,y+PADY),"O que é, na real",font=f_head,fill=WHITE)
    return y+h

img,d=new_page()
y=M
d.text((M,y),san("Meu Cumpadre — Vocabulário da Casa (v2)"),font=f_title,fill=GREEN); y+=44
d.text((M,y),san("A linguagem que a gente usa aqui dentro — explicada simples, pra você e pro Beto."),font=f_sub,fill=BAND); y+=24
total=sum(len(it) for _,it in GRUPOS)
d.text((M,y),san(f"{total} termos · {len(GRUPOS)} grupos · {DATA} · linguagem coloquial · Dignidade > Compliance > Viabilidade"),font=f_meta,fill=META); y+=26
y=header_row(d,y)

def ensure(space):
    global img,d,y
    if y+space>bottom:
        img,d=new_page(); y=M; y=header_row(d,y)

for grupo,itens in GRUPOS:
    bh=LINEH+2*PADY
    ensure(bh+46)
    d.rectangle([M,y,right,y+bh],fill=BAND)
    d.text((col1_x+PADX,y+PADY),san(grupo),font=f_band,fill=WHITE)
    y+=bh
    for i,(termo,sig) in enumerate(itens):
        tl=wrap(san(termo),f_term,TERM_W)
        sl=wrap(san(sig),f_def,def_w)
        rh=max(len(tl),len(sl))*LINEH+2*PADY
        ensure(rh)
        if i%2: d.rectangle([M,y,right,y+rh],fill=ALT)
        d.rectangle([M,y,right,y+rh],outline=BORDER,width=1)
        d.line([col2_x-PADX,y,col2_x-PADX,y+rh],fill=BORDER,width=1)
        ty=y+PADY
        for ln in tl: d.text((col1_x+PADX,ty),ln,font=f_term,fill=TERMC); ty+=LINEH
        ty=y+PADY
        for ln in sl: d.text((col2_x,ty),ln,font=f_def,fill=BODY); ty+=LINEH
        y+=rh

# rodape em todas as paginas
foot=san('"O diamante é carbono que não desistiu da pressão." · Provérbios 31:8 · Em dúvida num código de benefício? Confirme no CNIS/sistema (Proof-First). ∞')
for p_i,pg in enumerate(pages,1):
    dd=ImageDraw.Draw(pg)
    dd.text((M,H-M+2),foot,font=f_foot,fill=META)
    dd.text((right-90,H-M+2),f"pág. {p_i}/{len(pages)}",font=f_foot,fill=META)

out="/tmp/Vocabulario-MeuCumpadre-v2.pdf"
pages[0].save(out,"PDF",resolution=float(DPI),save_all=True,append_images=pages[1:])
import os
for i,pg in enumerate(pages,1):
    pg.save(f"/tmp/vpage{i}.png")
print("PDF:",out,"| paginas:",len(pages),"| KB:",round(os.path.getsize(out)/1024))
