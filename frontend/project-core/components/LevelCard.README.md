# 🎴 LevelCard Component

Componente de card reutilizável para os três níveis de público do AI Kids Labs.

---

## 📦 Importação

```tsx
import { LevelCard, LevelCardsGrid } from './components';
```

---

## 🎯 Props

### LevelCard

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `type` | `'kids' \| 'teens' \| 'adults'` | ✅ | Nível do card |
| `className` | `string` | ❌ | Classes CSS adicionais |

### LevelCardsGrid

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|-----------|
| `className` | `string` | ❌ | Classes CSS adicionais para o container |

---

## 🎨 Variações Visuais

| Tipo | Cor Primária | Metáfora | Público | Descrição |
|------|--------------|----------|---------|-----------|
| `kids` | Cyan (`#64D2FF`) | Despertar o Futuro | 6-12 anos | Despertamos a curiosidade tecnológica através da brincadeira criativa |
| `teens` | Orange (`#FF9F0A`) | Construindo o Amanhã | 13-17 anos | Transformamos ideias em projetos reais de impacto global |
| `adults` | Emerald (`#30D158`) | Mentes Extraordinárias | 18+ anos | Desenvolvemos profissionais prontos para liderar a era da IA |

---

## 💻 Exemplos de Uso

### Card Individual
```tsx
<LevelCard type="kids" />
```

### Grid Completo (3 colunas)
```tsx
<LevelCardsGrid />
```

### Com Classes Adicionais
```tsx
<LevelCard type="adults" className="max-w-md mx-auto" />
```

---

## 🖼️ Assets Necessários

Coloque as imagens em `public/cards/{nivel}/`:

```
public/
  cards/
    kids/
      feature-1.jpg
      feature-2.jpg
      feature-3.jpg
    jovens/
      feature-1.jpg
      feature-2.jpg
      feature-3.jpg
    adultos/
      feature-1.jpg
      feature-2.jpg
      feature-3.jpg
```

**Recomendações:**
- Formato: JPG ou WebP
- Dimensões: 400x500px (retrato)
- Tamanho máximo: 100KB por imagem

---

## 🔧 Configuração

Os metadados dos níveis estão em `config.ts`:

```typescript
LEVELS: {
  KIDS: {
    ID: 'kids',
    NAME: 'Kids',
    AGE_RANGE: '6-12 anos',
    PATH: '/kids',
    COLOR: '#64D2FF',
    METAPHOR: 'Despertar o Futuro',
    DESCRIPTION: '...',
    TAGLINE: '...',
    FEATURES: ['...'],
  },
  // ... TEENS, ADULTS
}
```

---

## ♿ Acessibilidade

- Contraste WCAG AA garantido
- Estrutura semântica (`article`, `h3`)
- Estados de hover/focus visíveis
- Navegação por teclado suportada

---

## 🚀 Performance

- Imagens lazy-loaded via `loading="lazy"`
- Animações CSS puras (sem JS)
- Bundle size mínimo
