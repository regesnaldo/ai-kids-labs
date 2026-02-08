// ============================================================================
// SUPABASE CLIENT
// ============================================================================
// IMPORTANTE: Este arquivo está mantido para referência.
// 
// ARQUITETURA ATUAL (Segura):
// - Frontend → API Routes (Next.js) → Supabase (com SERVICE ROLE KEY)
// - O frontend NUNCA acessa o Supabase diretamente
// - As operações de matrícula estão em: src/app/api/enrollments/*
// 
// MOTIVO: NextAuth não é compatível com RLS policies do Supabase Auth.
// A solução é usar SERVICE ROLE KEY no backend (bypass RLS) e fazer
// a autorização via session do NextAuth nas API Routes.
// ============================================================================

import { createClient } from '@supabase/supabase-js';

// Cliente Supabase (apenas para uso futuro se necessário)
// NOTA: Não usar para operações de matrícula - use as API Routes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Cliente para uso no browser (caso precise de alguma funcionalidade futura)
export const supabase = supabaseUrl && supabaseUrl.startsWith('http')
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Tipos exportados para uso em outros módulos
export interface Enrollment {
  id: string;
  user_email: string;
  course_slug: string;
  status: string;
  progress: number;
  created_at: string;
  updated_at: string;
}

// ============================================================================
// FUNÇÕES DEPRECIADAS - NÃO USAR
// Use as API Routes em vez disso:
// - GET    /api/enrollments              -> listar matrículas
// - POST   /api/enrollments              -> criar matrícula
// - DELETE /api/enrollments?courseSlug=x -> cancelar matrícula
// - GET    /api/enrollments/check?courseSlug=x -> verificar matrícula
// ============================================================================
