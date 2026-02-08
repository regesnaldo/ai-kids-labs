# AI Kids Labs

Plataforma de aprendizado de Inteligência Artificial para crianças, jovens e adultos.

## 🚀 Tecnologias

- **Frontend:** Next.js 16 + TypeScript + Tailwind CSS
- **Autenticação:** NextAuth.js
- **Banco de Dados:** Supabase (PostgreSQL)
- **Deploy:** Vercel (recomendado)

## 📁 Estrutura

```
ai-kids-labs/
├── AI-KIDS-LABS P2/
│   ├── frontend/          # Aplicação principal Next.js
│   │   ├── src/
│   │   │   ├── app/       # Rotas e páginas
│   │   │   ├── components/# Componentes React
│   │   │   ├── hooks/     # Custom hooks
│   │   │   ├── lib/       # Configurações (auth, supabase)
│   │   │   └── services/  # API services
│   │   └── supabase/      # Migrations SQL
│   └── supabase/          # Documentação do banco
└── ...
```

## 🛠️ Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/ai-kids-labs.git
cd ai-kids-labs/AI-KIDS-LABS\ P2/frontend
```

### 2. Instale dependências
```bash
npm install
```

### 3. Configure variáveis de ambiente
Copie `.env.local.example` para `.env.local` e preencha:

```bash
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=seu-secret-aqui

# Supabase
NEXT_PUBLIC_SUPABASE_URL=sua-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key
```

### 4. Execute a migration no Supabase
Acesse o SQL Editor do Supabase e execute:
`supabase/migrations/001_create_enrollments.sql`

### 5. Rode o projeto
```bash
npm run dev
```

## 🔐 Autenticação

- Login: `teste@teste.com`
- Senha: `123456`

## 📄 Licença

MIT
