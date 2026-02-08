-- ============================================================================
-- MIGRAÇÃO: Criação da tabela de matrículas (enrollments)
-- ============================================================================
-- IMPORTANTE: Este schema é projetado para uso com NextAuth (não Supabase Auth)
-- 
-- ARQUITETURA DE SEGURANÇA:
-- - RLS está ATIVADO (tabela bloqueada para acesso direto via anon key)
-- - NÃO existem policies de acesso público
-- - Toda escrita/leitura será feita via backend Next.js usando SERVICE ROLE KEY
-- - O frontend NUNCA acessa diretamente esta tabela
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Criar tabela de matrículas
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_email TEXT NOT NULL,
    course_slug TEXT NOT NULL,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),
    progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 2. Índices para performance
-- ----------------------------------------------------------------------------
-- Índice único para evitar matrículas duplicadas
CREATE UNIQUE INDEX IF NOT EXISTS idx_enrollments_user_course 
    ON public.enrollments(user_email, course_slug);

-- Índice para buscar matrículas por usuário
CREATE INDEX IF NOT EXISTS idx_enrollments_user_email 
    ON public.enrollments(user_email);

-- Índice para buscar matrículas por curso
CREATE INDEX IF NOT EXISTS idx_enrollments_course_slug 
    ON public.enrollments(course_slug);

-- ----------------------------------------------------------------------------
-- 3. Habilitar Row Level Security (RLS)
-- ----------------------------------------------------------------------------
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- NOTA IMPORTANTE SOBRE POLICIES:
-- ============================================================================
-- NÃO CRIAMOS POLICIES AQUI. Motivos:
-- 
-- 1. NextAuth NÃO é compatível com as policies de RLS do Supabase Auth
--    (não usamos auth.uid() ou auth.jwt() porque o JWT vem do NextAuth)
--
-- 2. A tabela está BLOQUEADA para qualquer acesso via anon key
--    (tentativas de SELECT/INSERT/UPDATE/DELETE via cliente frontend serão negadas)
--
-- 3. O backend Next.js acessa usando SERVICE ROLE KEY (bypass RLS)
--    Crie um client Supabase no servidor com a service_role key:
--    
--    const supabaseAdmin = createClient(
--      process.env.NEXT_PUBLIC_SUPABASE_URL!,
--      process.env.SUPABASE_SERVICE_ROLE_KEY!  <-- esta key bypassa RLS
--    );
--
-- 4. Validação de permissões é feita no backend Next.js (middleware + session)
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 4. Trigger para atualizar updated_at automaticamente
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_enrollments_updated_at ON public.enrollments;

CREATE TRIGGER update_enrollments_updated_at
    BEFORE UPDATE ON public.enrollments
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ----------------------------------------------------------------------------
-- 5. Comentários para documentação
-- ----------------------------------------------------------------------------
COMMENT ON TABLE public.enrollments IS 'Tabela de matrículas de usuários em cursos. RLS ativo, acesso apenas via backend com service role key.';
COMMENT ON COLUMN public.enrollments.user_email IS 'Email do usuário (vem do NextAuth session)';
COMMENT ON COLUMN public.enrollments.course_slug IS 'Slug identificador do curso (ex: ia-para-criancas)';
COMMENT ON COLUMN public.enrollments.status IS 'Status da matrícula: active, completed, cancelled';
COMMENT ON COLUMN public.enrollments.progress IS 'Progresso do curso em porcentagem (0-100)';
