"use client";

/**
 * 📚 CURSOS - Catálogo de Cursos
 * 
 * Página de cursos disponíveis na plataforma.
 * Visual premium inspirado em plataformas como Netflix/Stripe.
 */

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function CursosPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirecionar para login se não estiver autenticado
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  // Mostrar loading enquanto verifica sessão
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-400">Carregando...</span>
        </div>
      </div>
    );
  }

  // Se não tem sessão, não renderiza nada
  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-white">Cursos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Catálogo de Cursos
          </h1>
          <p className="text-slate-400 mt-3 text-lg">
            Explore nossos cursos de Inteligência Artificial
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button className="px-5 py-2.5 bg-violet-500 text-white text-sm font-medium rounded-full">
            Todos
          </button>
          <button className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-400 text-sm font-medium rounded-full hover:bg-white/10 hover:text-white transition-all">
            Kids
          </button>
          <button className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-400 text-sm font-medium rounded-full hover:bg-white/10 hover:text-white transition-all">
            Jovens
          </button>
          <button className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-400 text-sm font-medium rounded-full hover:bg-white/10 hover:text-white transition-all">
            Adultos
          </button>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CURSO 1 - Destaque */}
          <div className="group relative md:col-span-2 lg:col-span-2 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900/40 to-[#0f0f1a] border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
              {/* Curso Info */}
              <div className="flex-1">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                    Novo
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-medium rounded-full border border-white/10">
                    Kids
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Inteligência Artificial para Crianças
                  <span className="block text-violet-400">Primeiros Passos</span>
                </h2>

                <p className="text-slate-400 text-lg mb-8 max-w-xl">
                  Uma jornada divertida para entender como a inteligência artificial funciona. 
                  Crie seus primeiros projetos e descubra o poder da tecnologia.
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-300">10 módulos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-slate-300">Iniciante</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-slate-300">1.234 alunos</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/cursos/ia-para-criancas"
                  className="inline-flex items-center justify-center px-8 py-4 bg-violet-500 text-white text-lg font-semibold rounded-xl hover:bg-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
                >
                  <span>Começar Curso</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Curso Icon/Visual */}
              <div className="w-full md:w-48 h-48 flex-shrink-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                <svg className="w-24 h-24 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 8m0 0a8 8 0 00-8 8c0 2.472.345 4.865.99 7.131M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Placeholder Cards - Em breve */}
          <div className="group relative overflow-hidden rounded-2xl bg-[#151520] border border-white/5 opacity-60">
            <div className="p-8">
              <span className="px-3 py-1 bg-white/10 text-slate-400 text-xs font-medium rounded-full">
                Em breve
              </span>
              <h3 className="text-xl font-semibold text-slate-400 mt-4 mb-2">
                Robótica para Iniciantes
              </h3>
              <p className="text-slate-500">
                Construa seu primeiro robô do zero.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-[#151520] border border-white/5 opacity-60">
            <div className="p-8">
              <span className="px-3 py-1 bg-white/10 text-slate-400 text-xs font-medium rounded-full">
                Em breve
              </span>
              <h3 className="text-xl font-semibold text-slate-400 mt-4 mb-2">
                Programação com Python
              </h3>
              <p className="text-slate-500">
                Aprenda a linguagem da inteligência artificial.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-[#151520] border border-white/5 opacity-60">
            <div className="p-8">
              <span className="px-3 py-1 bg-white/10 text-slate-400 text-xs font-medium rounded-full">
                Em breve
              </span>
              <h3 className="text-xl font-semibold text-slate-400 mt-4 mb-2">
                Criatividade com IA
              </h3>
              <p className="text-slate-500">
                Use IA para criar arte, música e histórias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
