"use client";

/**
 * 📊 DASHBOARD - Área do Aluno
 * 
 * Dashboard com sistema de matrícula via Supabase.
 */

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { useEnrollments } from "@/hooks";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userEmail = session?.user?.email;
  
  const { 
    enrolledSlugs, 
    loading: loadingEnrollments 
  } = useEnrollments(userEmail);

  // Verificar matrícula no curso de IA
  const isEnrolledInIA = enrolledSlugs.includes('ia-para-criancas');
  const hasEnrollments = enrolledSlugs.length > 0;

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

  const userName = session.user?.name || userEmail?.split("@")[0] || "Aluno";

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-2">
            Área do Aluno
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Bem-vindo de volta, <span className="text-violet-400">{userName}</span>
          </h1>
          <p className="text-slate-400 mt-4 text-lg">
            Continue sua jornada de aprendizado em Inteligência Artificial.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Meus Cursos */}
          <div className="group relative p-8 bg-gradient-to-br from-[#151520] to-[#0f0f1a] border border-white/5 rounded-2xl hover:border-violet-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            
            <div className="relative">
              <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">Meus Cursos</h3>
              
              {loadingEnrollments ? (
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-4 h-4 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-slate-500 text-sm">Carregando...</span>
                </div>
              ) : isEnrolledInIA ? (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span className="text-emerald-400 text-sm font-medium">Em andamento</span>
                  </div>
                  <p className="text-white font-medium mb-1">
                    Inteligência Artificial para Crianças
                  </p>
                  <p className="text-slate-500 text-sm">
                    0% completo
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <Link 
                      href="/cursos/ia-para-criancas"
                      className="inline-flex items-center px-4 py-2 bg-violet-500 text-white text-sm font-medium rounded-lg hover:bg-violet-400 transition-colors"
                    >
                      Continuar
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-slate-400">
                    Você ainda não iniciou nenhum curso.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <Link 
                      href="/cursos"
                      className="text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors"
                    >
                      Explorar catálogo →
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Card 2 - Progresso */}
          <div className="group relative p-8 bg-gradient-to-br from-[#151520] to-[#0f0f1a] border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            
            <div className="relative">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">Progresso</h3>
              <p className="text-slate-400">
                {isEnrolledInIA ? "0% completo" : "Matricule-se para começar"}
              </p>
              
              {/* Barra de progresso */}
              <div className="mt-6">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full ${isEnrolledInIA ? "w-0" : "w-0"} bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full`} />
                </div>
                {isEnrolledInIA ? (
                  <Link 
                    href="/cursos/ia-para-criancas"
                    className="inline-block text-emerald-400 text-sm font-medium mt-2 hover:text-emerald-300 transition-colors"
                  >
                    Comece agora →
                  </Link>
                ) : (
                  <p className="text-slate-500 text-sm mt-2">
                    Nenhum curso iniciado
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Card 3 - Continuar Aprendendo */}
          <div className="group relative p-8 bg-gradient-to-br from-violet-900/20 to-[#0f0f1a] border border-violet-500/20 rounded-2xl hover:border-violet-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            
            <div className="relative">
              <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {isEnrolledInIA ? "Continuar Estudando" : "Começar a Aprender"}
              </h3>
              <p className="text-slate-400 mb-6">
                {isEnrolledInIA 
                  ? "Continue de onde parou no seu curso de IA."
                  : "Dê o primeiro passo na sua jornada de IA."}
              </p>
              
              <Link
                href="/cursos/ia-para-criancas"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-violet-500 text-white font-semibold rounded-xl hover:bg-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
              >
                <span>{isEnrolledInIA ? "Continuar Curso" : "Matricular-se Agora"}</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Seção de Navegação Rápida */}
        <div className="mt-12 p-8 bg-[#151520] border border-white/5 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white mb-6">O que você quer fazer hoje?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/cursos" className="group p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-violet-500/30 transition-all">
              <div className="text-violet-400 font-medium group-hover:text-violet-300">Explorar Catálogo</div>
              <p className="text-slate-500 text-sm mt-1">Ver todos os cursos</p>
            </Link>
            
            <Link href="/cursos/ia-para-criancas" className="group p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-violet-500/30 transition-all">
              <div className="text-violet-400 font-medium group-hover:text-violet-300">
                {isEnrolledInIA ? "Meu Curso" : "Primeiros Passos"}
              </div>
              <p className="text-slate-500 text-sm mt-1">
                {isEnrolledInIA ? "Continuar IA para Crianças" : "Iniciar jornada"}
              </p>
            </Link>
            
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl opacity-50 cursor-not-allowed">
              <div className="text-slate-400 font-medium">Comunidade</div>
              <p className="text-slate-500 text-sm mt-1">Em breve</p>
            </div>
            
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl opacity-50 cursor-not-allowed">
              <div className="text-slate-400 font-medium">Certificados</div>
              <p className="text-slate-500 text-sm mt-1">Em breve</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
