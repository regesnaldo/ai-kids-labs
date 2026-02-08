# 🎥 Recursos de Vídeo - AI Kids Labs

## 📁 Estrutura de Pastas

```
public/videos/
├── kids/           ← Vídeos para crianças (6-12 anos)
├── jovens/         ← Vídeos para adolescentes (13-17 anos)
├── adultos/        ← Vídeos para adultos (18+ anos)
└── intro/          ← Vídeos introdutórios gerais sobre IA
```

---

## 🌐 Fontes Gratuitas de Vídeos

### Pexels Videos (Recomendado)
https://www.pexels.com/videos/

**Termos de busca sugeridos:**
- `artificial intelligence`
- `robot`
- `coding`
- `technology`
- `computer`
- `future technology`
- `digital`
- `programming`

### Pixabay Videos
https://pixabay.com/videos/

**Termos de busca sugeridos:**
- `artificial intelligence`
- `robotics`
- `cyber`
- `technology`
- `innovation`

### Coverr
https://coverr.co/

**Categorias:**
- Technology
- Business
- Abstract

---

## 🎬 Sugestões por Categoria

### Kids (6-12 anos)
**Estilo:** Colorido, animado, amigável, lento

**Temas:**
- Robôs dançando ou se movendo
- Animações de circuitos/colorido
- Crianças interagindo com tablets
- Desenhos animados educativos
- Blocos de programação (Scratch-style)

**Duração ideal:** 15-30 segundos (loops)

---

### Jovens (13-17 anos)
**Estilo:** Dinâmico, moderno, energético

**Temas:**
- Telas de código/programação
- Hackathons/equipes trabalhando
- Interfaces futuristas
- Drones/robótica
- Efeitos digitais/cyberpunk

**Duração ideal:** 20-45 segundos

---

### Adultos (18+ anos)
**Estilo:** Profissional, sofisticado, limpo

**Temas:**
- Visualizações de dados/IA
- Gráficos de neural networks
- Ambientes corporativos com tech
- Automação/robôs industriais
- Interfaces holográficas

**Duração ideal:** 30-60 segundos

---

## 📋 Checklist de Vídeos Necessários

### Kids
- [ ] `hero.mp4` - Vídeo hero para página Kids (loop)
- [ ] `robo.mp4` - Robô/tech animação
- [ ] `educativo.mp4` - Aprendizado lúdico

### Jovens
- [ ] `hero.mp4` - Vídeo hero para página Jovens
- [ ] `coding.mp4` - Programação/código
- [ ] `projeto.mp4` - Projetos em equipe

### Adultos
- [ ] `hero.mp4` - Vídeo hero para página Adultos
- [ ] `ia.mp4` - Inteligência Artificial/neural
- [ ] `negocios.mp4` - Tecnologia nos negócios

### Intro Geral
- [ ] `welcome.mp4` - Vídeo de boas-vindas do Labs
- [ ] `ia-explicacao.mp4` - O que é IA (educativo)

---

## 💾 Especificações Técnicas

### Formatos Suportados
- **MP4 (H.264)** - Recomendado (melhor compatibilidade)
- **WebM** - Alternativa (melhor compressão)

### Resoluções
- **Hero/Background:** 1920x1080 (Full HD)
- **Cards/Thumbs:** 1280x720 (HD)
- **Mobile:** 1080x1920 (Vertical) - opcional

### Tamanho Máximo
- Vídeos hero: até 10MB (comprimidos)
- Vídeos curtos: até 5MB
- Use ferramentas como HandBrake ou FFmpeg para compressão

---

## 🔧 Compressão de Vídeo

### Usando FFmpeg (recomendado)
```bash
# Compressão para web
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -crf 23 output.mp4

# Reduzir tamanho mantendo qualidade
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k output.mp4

# Criar versão mobile (vertical)
ffmpeg -i input.mp4 -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2" -c:v libx264 -crf 23 output-mobile.mp4
```

### Ferramentas Online
- https://compressvideo.io/
- https://www.video2edit.com/compress-video
- https://www.freeconvert.com/video-compressor

---

## 📝 Exemplo de Uso no Código

### Vídeo de Background (Hero)
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/kids/hero.mp4" type="video/mp4" />
</video>
```

### Vídeo com Poster
```tsx
<video
  controls
  poster="/cards/kids/01.jpg"
  className="w-full rounded-xl"
>
  <source src="/videos/kids/educativo.mp4" type="video/mp4" />
  Seu navegador não suporta vídeos.
</video>
```

### Lazy Loading
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="w-full"
>
  <source src="/videos/intro/ia-explicacao.mp4" type="video/mp4" />
</video>
```

---

## ⚠️ Direitos e Licenças

Todos os vídeos devem ser:
- ✅ Royalty-free (sem royalties)
- ✅ Free for commercial use (uso comercial permitido)
- ✅ No attribution required (sem necessidade de atribuição) OU
- ✅ Properly attributed (atribuição correta conforme licença)

**Fontes confiáveis:**
- Pexels: Free to use
- Pixabay: Free to use
- Coverr: Free to use

---

## 🚀 Próximos Passos

1. Baixar vídeos das fontes recomendadas
2. Comprimir para tamanho adequado (< 10MB cada)
3. Renomear conforme padrão definido
4. Testar em diferentes navegadores
5. Criar versões mobile (vertical) se necessário
