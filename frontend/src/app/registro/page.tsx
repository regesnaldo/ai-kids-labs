'use client';

/**
 * 📝 REGISTRO PAGE
 * 
 * Página de criação de conta - Em breve.
 */

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [isLoading] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6 py-12">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold text-white tracking-wider">AI KIDS LABS</h1>
          </Link>
          <p className="mt-2 text-slate-400">Crie sua conta</p>
        </div>

        {/* Register Card */}
        <div className="p-8 bg-[#0f0f1a] border border-white/10 rounded-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Registro em breve</h2>
          
          <p className="text-slate-400 mb-6">
            Estamos preparando um sistema de cadastro completo. 
            Por enquanto, use as credenciais de teste na página de login.
          </p>

          <div className="p-4 bg-violet-500/10 border border-violet-500/20 rounded-lg mb-6">
            <p className="text-sm text-slate-300">
              <strong className="text-white">Credenciais de teste:</strong><br />
              Email: teste@teste.com<br />
              Senha: 123456
            </p>
          </div>

          <Link
            href="/login"
            className="w-full block text-center py-3 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-400 transition-all"
          >
            Ir para Login
          </Link>
        </div>

        {/* Back Link */}
        <Link 
          href="/" 
          className="mt-8 flex items-center justify-center gap-2 text-slate-500 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
