/**
 * ⚙️ CONFIGURAÇÃO DO PROJETO - AI Kids Labs
 * 
 * Este arquivo centraliza todas as configurações da aplicação.
 * Não armazene segredos ou chaves privadas aqui — use variáveis de ambiente.
 */

// ============================================
// CONFIGURAÇÕES GLOBAIS
// ============================================

export const CONFIG = {
  // Informações do Projeto
  PROJECT: {
    NAME: 'AI Kids Labs',
    VERSION: '1.0.0',
    DESCRIPTION: 'Centro de Excelência Mundial em Inteligência Artificial',
    URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    ENVIRONMENT: process.env.NODE_ENV || 'development',
  },

  // Níveis de Aprendizado
  LEVELS: {
    KIDS: {
      ID: 'kids',
      NAME: 'Kids',
      AGE_RANGE: '6-12 anos',
      PATH: '/kids',
      COLOR: '#64D2FF', // Ciano
      ICON: 'Sparkles',
      METAPHOR: 'Despertar o Futuro',
      DESCRIPTION: 'Despertamos a curiosidade tecnológica através da brincadeira criativa',
      TAGLINE: 'Aventuras lúdicas que ensinam IA enquanto divertem',
      FEATURES: ['Jogos educativos', 'Robótica simples', 'Histórias interativas'],
    },
    TEENS: {
      ID: 'jovens',
      NAME: 'Jovens',
      AGE_RANGE: '13-17 anos',
      PATH: '/jovens',
      COLOR: '#FF9F0A', // Laranja
      ICON: 'Rocket',
      METAPHOR: 'Construindo o Amanhã',
      DESCRIPTION: 'Transformamos ideias em projetos reais de impacto global',
      TAGLINE: 'Projetos reais que constroem portfólio e futuro',
      FEATURES: ['Projetos práticos', 'Hackathons', 'Mentoria tech'],
    },
    ADULTS: {
      ID: 'adultos',
      NAME: 'Adultos',
      AGE_RANGE: '18+ anos',
      PATH: '/adultos',
      COLOR: '#30D158', // Verde
      ICON: 'Brain',
      METAPHOR: 'Mentes Extraordinárias',
      DESCRIPTION: 'Desenvolvemos profissionais prontos para liderar a era da IA',
      TAGLINE: 'Transformação profissional para a era da IA',
      FEATURES: ['Automação de negócios', 'IA aplicada', 'Liderança tech'],
    },
  },

  // Planos de Assinatura
  PLANS: {
    FOUNDATION: {
      ID: 'fundacao',
      NAME: 'Plano Fundação',
      TYPE: 'free',
      PRICE: 0,
      DESCRIPTION: 'Acesso Essencial',
    },
    ELITE: {
      ID: 'elite',
      NAME: 'Plano Elite',
      TYPE: 'premium',
      PRICE_MONTHLY: 97,
      PRICE_ANNUAL: 897,
      DESCRIPTION: 'Formação Avançada',
    },
  },

  // Estrutura de Temporadas
  SEASONS: {
    EPISODES_PER_SEASON: 10,
    DEFAULT_DURATION_MINUTES: 15,
  },

  // Configurações de API
  API: {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || '/api',
    TIMEOUT: 30000, // 30 segundos
    RETRY_ATTEMPTS: 3,
  },

  // Autenticação
  AUTH: {
    SESSION_DURATION_DAYS: 30,
    TOKEN_KEY: 'ai_kids_labs_token',
    REFRESH_THRESHOLD_MINUTES: 5,
  },

  // Caminhos de Assets
  ASSETS: {
    IMAGES: '/assets/images',
    ICONS: '/assets/icons',
    FONTS: '/assets/fonts',
    CARDS: {
      KIDS: '/cards/kids',
      TEENS: '/cards/jovens',
      ADULTS: '/cards/adultos',
    },
  },

  // Analytics e Tracking
  ANALYTICS: {
    ENABLED: process.env.NODE_ENV === 'production',
    GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GA_ID || '',
    FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
  },

  // Feature Flags (Funcionalidades em Desenvolvimento)
  FEATURES: {
    AI_MENTOR: true,
    COMMUNITY_FORUM: false,
    MOBILE_APP: false,
    VR_LABS: false,
  },

  // Limites e Paginação
  LIMITS: {
    MAX_UPLOAD_SIZE_MB: 10,
    ITEMS_PER_PAGE: 12,
    MAX_EPISODES_FREE: 10,
  },
} as const;

// ============================================
// TIPOS DERIVADOS (TypeScript)
// ============================================

export type ProjectConfig = typeof CONFIG;
export type LevelId = keyof typeof CONFIG.LEVELS;
export type PlanId = keyof typeof CONFIG.PLANS;
export type FeatureFlag = keyof typeof CONFIG.FEATURES;

// ============================================
// HELPERS
// ============================================

/**
 * Verifica se uma funcionalidade está ativa
 */
export function isFeatureEnabled(feature: FeatureFlag): boolean {
  return CONFIG.FEATURES[feature];
}

/**
 * Retorna configuração de um nível específico
 */
export function getLevelConfig(levelId: LevelId) {
  return CONFIG.LEVELS[levelId];
}

/**
 * Retorna URL completa de um asset
 */
export function getAssetUrl(path: string): string {
  return `${CONFIG.PROJECT.URL}${path}`;
}

// ============================================
// EXPORTAÇÃO PADRÃO
// ============================================

export default CONFIG;
