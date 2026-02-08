# 🏗️ ARQUITETURA DO PRODUTO - AI Kids Labs

## Estrutura de Navegação

### Públicas (Landing)
```
/
├── / (Home - Jornada completa)
├── /kids (Área Kids)
├── /jovens (Área Jovens)
├── /adultos (Área Adultos)
├── /sobre (Institucional)
└── /contato
```

### Logadas (Plataforma)
```
/app
├── /dashboard
├── /trilhas
│   ├── /temporada-1
│   ├── /temporada-2
│   └── ...
├── /laboratorio (prática com IA)
├── /projetos
├── /perfil
└── /comunidade
```

---

## Sistema de Trilhas (Temporadas)

### Conceito
Cada nível (Kids, Jovens, Adultos) tem **Temporadas** — jornadas narrativas de 10 episódios cada.

### Estrutura de Temporada
```
Temporada X: [Nome Cinematográfico]
├── Episódio 1: [Título Impactante]
├── Episódio 2: [Título Impactante]
├── ...
└── Episódio 10: [Conclusão + Juramento]
```

### Temporadas por Nível

#### 🧒 KIDS (6-12 anos)
| Temporada | Nome | Foco |
|-----------|------|------|
| 1 | O Despertar Tecnológico | Fundamentos de IA, visão computacional, chatbots |
| 2 | A Revolução dos Robôs | Robótica, automação, lógica |
| 3 | O Mundo Mágico dos Dados | Dados, padrões, previsões |
| 4 | Super-Heróis da Ética | Ética digital, segurança, responsabilidade |

#### 🧑 JOVENS (13-17 anos)
| Temporada | Nome | Foco |
|-----------|------|------|
| 1 | Construindo o Amanhã | Programação, projetos reais, portfólio |
| 2 | A Era dos Algoritmos | Machine Learning, redes neurais básicas |
| 3 | Fronteiras da IA | IA generativa, LLMs, prompts avançados |
| 4 | Empreendedor Tech | Produto, startup, monetização |

#### 👨 ADULTOS (18+ anos)
| Temporada | Nome | Foco |
|-----------|------|------|
| 1 | Transformação Profissional | IA aplicada à carreira atual |
| 2 | Especialização Técnica | ML, Data Science, Engenharia de IA |
| 3 | Liderança em IA | Gestão de projetos, ética avançada |
| 4 | Mestria | Certificação, consultoria, ensino |

---

## Arquitetura de Episódio

### Estrutura Padronizada
Cada episódio segue framework **HERO**:

```
H - Hook (Abertura Cinematográfica)
    └─ Vídeo de 30-60s com narrativa envolvente

E - Experience (Experiência Prática)
    └─ Interação com IA real (Teachable Machine, ChatGPT API, etc.)

R - Reflect (Reflexão)
    └─ Questionário, diário de aprendizado, discussão

O - Output (Entregável)
    └─ Projeto, certificado de etapa, badge
```

### Componentes de Episódio
1. **Vídeo de Abertura** — Estilo Netflix, produção premium
2. **Laboratório Interativo** — Canvas para experimentação
3. **Desafio do Dia** — Missão prática com IA real
4. **Check-in Emocional** — Como o aluno se sente
5. **Galeria de Conquistas** — Badges e progresso visual

---

## Sistema de Progressão

### Níveis de Aluno
```
Explorador → Aprendiz → Construtor → Inovador → Mestre
   (0)        (1-3)       (4-6)       (7-9)      (10+)
```

### Badges (Conquistas)
- **Categoria Habilidade:** Programador, Designer de IA, Cientista de Dados
- **Categoria Social:** Mentor, Colaborador, Líder
- **Categoria Conquista:** Primeiro App, 100 Dias, Projeto Destaque

### Certificações
- **Certificado Júnior** — Completa 1 temporada
- **Certificado Especialista** — Completa 3 temporadas
- **Certificado Mestre** — Completa todas + projeto final

---

## Tipos de Conteúdo

### 1. Vídeos Institucionais
- Produção cinematográfica
- Duração: 3-5 minutos
- Estilo: Documentário/Netflix
- Assunto: Abertura de temporada/episódio

### 2. Laboratórios Interativos
- Interface hands-on
- Integração com APIs reais
- Sandbox seguro para experimentação
- Feedback imediato da IA

### 3. Projetos Práticos
- Entregáveis concretos
- Portfólio construído ao longo do tempo
- Possibilidade de publicação/compartilhamento
- Avaliação por pares (em jovens/adultos)

### 4. Mentorias
- **Mentor Artificial:** Disponível 24/7, respostas personalizadas
- **Conselho Científico:** Humanos para supervisão ética
- **Comunidade:** Fóruns por nível de maturidade

---

## Features da Plataforma

### Core (MVP)
- [x] Trilhas episódicas
- [x] Laboratório interativo
- [x] Sistema de badges
- [ ] Perfil do aluno com portfólio
- [ ] Dashboard de progresso
- [ ] Comunidade (fórum/chat)

### Future (Pós-lançamento)
- [ ] Competições/hackathons
- [ ] Mentorias 1:1 humanas (premium)
- [ ] Parcerias com empresas (estágios)
- [ ] APP mobile nativo
- [ ] Realidade Virtual para laboratórios
- [ ] Certificações reconhecidas internacionalmente

---

## Experiência do Usuário (UX)

### Jornada do Primeiro Acesso
```
1. Landing Page → Convicção institucional
2. Seleção de Nível → Kids/Jovens/Adultos
3. Cadastro Rápido → Email, nome, idade
4. Onboarding → Tour da plataforma (gamificado)
5. Primeiro Episódio → Experiência "wow" imediata
6. Conquista Inicial → Badge "Explorador"
7. Convite Compartilhar → Viralização orgânica
```

### Recorrência
- **Notificações inteligentes:** Lembretes personalizados, não genéricos
- **Streaks:** Sequências de dias com atividade
- **Novos desafios semanais:** Conteúdo além das trilhas
- **Eventos ao vivo:** Webinars com especialistas

---

## Monetização

### Modelo Freemium

**Plano Fundação (Gratuito):**
- Acesso à Temporada 1 completa
- Laboratórios básicos
- Comunidade limitada
- Badge Explorador

**Plano Elite (Pago):**
- Todas as temporadas
- Laboratórios avançados
- Mentorias prioritárias
- Certificações oficiais
- Projetos profissionais
- Networking exclusivo

### Preços (Referência)
- **Mensal:** R$ 97/mês
- **Anual:** R$ 897/ano (economia de 25%)
- **Vitalício:** R$ 2.497 (acesso permanente)
- **Família:** R$ 147/mês (até 3 membros)

---

## Métricas de Sucesso (KPIs)

### Engajamento
- Taxa de conclusão de episódios: > 70%
- Tempo médio na plataforma: > 30 min/semana
- Retenção mensal: > 80%

### Aprendizado
- Projetos concluídos por aluno: > 5/ano
- Satisfação com conteúdo: NPS > 50
- Progressão de nível: 60% sobem de nível em 6 meses

### Negócio
- CAC (Custo de Aquisição): < R$ 150
- LTV (Lifetime Value): > R$ 1.200
- Taxa de conversão Free→Premium: > 15%

---

**Documento versão 1.0**  
**Status:** Definição estratégica completa  
**Próximo passo:** Especificação técnica de implementação
