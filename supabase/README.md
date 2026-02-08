# 🗄️ Supabase - Configuração do Banco de Dados

## 📋 Estrutura

```
supabase/
├── migrations/
│   └── 001_create_enrollments.sql    ← SQL para criar tabela de matrículas
└── README.md                          ← Este arquivo
```

---

## 🚀 Como Executar o SQL no Supabase

### Passo 1: Acesse o Supabase

1. Vá para [https://app.supabase.com](https://app.supabase.com)
2. Faça login na sua conta
3. Selecione o projeto **AI Kids Labs**

### Passo 2: Abra o SQL Editor

1. No menu lateral esquerdo, clique em **"SQL Editor"**
2. Clique em **"New query"** (ou "Nova consulta")
3. Dê um nome: `create_enrollments_table`

### Passo 3: Cole o SQL

1. Abra o arquivo: `supabase/migrations/001_create_enrollments.sql`
2. Copie todo o conteúdo
3. Cole no editor do Supabase

### Passo 4: Execute

1. Clique no botão **"Run"** (ou "Executar")
2. Aguarde a mensagem de sucesso

### Passo 5: Verifique

1. No menu lateral, clique em **"Table Editor"**
2. Procure pela tabela **"enrollments"**
3. Confirme que apareceu na lista

---

## 📊 Estrutura da Tabela

### Tabela: `enrollments`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Identificador único da matrícula |
| `user_email` | TEXT | Email do usuário (vem do NextAuth) |
| `course_slug` | TEXT | Slug do curso (ex: `ia-para-criancas`) |
| `created_at` | TIMESTAMP | Data/hora da matrícula |

### Constraints

- **PRIMARY KEY**: `id`
- **UNIQUE**: `(user_email, course_slug)` - evita matrículas duplicadas
- **NOT NULL**: `user_email`, `course_slug`

### Segurança (RLS)

| Operação | Política |
|----------|----------|
| **SELECT** | Usuário só vê suas próprias matrículas |
| **INSERT** | Usuário só pode se matricular |
| **DELETE** | Usuário só pode cancelar suas matrículas |

---

## 🔌 Integração com Next.js

### Instalar cliente Supabase

```bash
npm install @supabase/supabase-js
```

### Criar cliente

```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### Variáveis de ambiente

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
```

### Exemplo: Matricular usuário

```typescript
import { supabase } from '@/lib/supabase';

async function matricularUsuario(email: string, courseSlug: string) {
  const { data, error } = await supabase
    .from('enrollments')
    .insert([
      { user_email: email, course_slug: courseSlug }
    ]);
    
  if (error) {
    console.error('Erro ao matricular:', error);
    return null;
  }
  
  return data;
}
```

### Exemplo: Buscar matrículas do usuário

```typescript
async function getMatriculasUsuario(email: string) {
  const { data, error } = await supabase
    .from('enrollments')
    .select('*')
    .eq('user_email', email);
    
  if (error) {
    console.error('Erro ao buscar:', error);
    return [];
  }
  
  return data;
}
```

---

## ✅ Checklist

- [ ] Projeto criado no Supabase
- [ ] SQL executado com sucesso
- [ ] Tabela `enrollments` aparece no Table Editor
- [ ] RLS está ativo (ver ícone de escudo na tabela)
- [ ] Variáveis de ambiente configuradas no Next.js
- [ ] Cliente Supabase criado no projeto

---

## 🆘 Troubleshooting

### Erro: "duplicate key value violates unique constraint"

**Significado**: Usuário já está matriculado neste curso.

**Solução**: Verifique se já existe matrícula antes de inserir:

```typescript
const { data: existing } = await supabase
  .from('enrollments')
  .select('*')
  .eq('user_email', email)
  .eq('course_slug', courseSlug)
  .single();

if (existing) {
  console.log('Usuário já matriculado');
  return;
}
```

### Erro: "new row violates row-level security policy"

**Significado**: RLS está bloqueando a operação.

**Solução**: Verifique se o JWT está sendo enviado corretamente ou use a **Service Role Key** (somente servidor):

```typescript
// Para operações no servidor (API routes)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Só no servidor!
);
```

---

## 📚 Documentação

- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Next.js com Supabase](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
