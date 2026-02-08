-- ============================================================
-- MIGRAÇÃO: Criar tabela de matrículas (enrollments)
-- ============================================================
-- Execute este SQL no Supabase SQL Editor
-- ============================================================

-- 1. Criar a tabela enrollments
CREATE TABLE IF NOT EXISTS enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_email TEXT NOT NULL,
    course_slug TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraint para evitar matrículas duplicadas
    UNIQUE(user_email, course_slug)
);

-- 2. Criar índices para performance
CREATE INDEX IF NOT EXISTS idx_enrollments_user_email ON enrollments(user_email);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_slug ON enrollments(course_slug);

-- 3. Ativar Row Level Security (RLS)
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- 4. Criar políticas de segurança

-- Policy: SELECT - usuários só podem ver suas próprias matrículas
CREATE POLICY "Usuários podem ver apenas suas próprias matrículas"
ON enrollments
FOR SELECT
USING (user_email = auth.jwt() ->> 'email');

-- Policy: INSERT - usuários só podem criar matrículas para si mesmos
CREATE POLICY "Usuários podem matricular-se"
ON enrollments
FOR INSERT
WITH CHECK (user_email = auth.jwt() ->> 'email');

-- Policy: DELETE - usuários só podem deletar suas próprias matrículas
CREATE POLICY "Usuários podem cancelar suas matrículas"
ON enrollments
FOR DELETE
USING (user_email = auth.jwt() ->> 'email');

-- 5. Comentários na tabela
COMMENT ON TABLE enrollments IS 'Tabela de matrículas de usuários em cursos';
COMMENT ON COLUMN enrollments.user_email IS 'Email do usuário (vem do JWT do NextAuth)';
COMMENT ON COLUMN enrollments.course_slug IS 'Slug identificador do curso (ex: ia-para-criancas)';

-- ============================================================
-- FIM DA MIGRAÇÃO
-- ============================================================
