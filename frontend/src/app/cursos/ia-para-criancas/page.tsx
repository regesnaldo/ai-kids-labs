"use client";

/**
 * 📖 CURSO: IA para Crianças - Primeiros Passos
 * 
 * Página do curso com sistema de matrícula via Supabase.
 */

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useEnrollments } from "@/hooks";

const CURSO_ID = "ia-para-criancas";

export default function CursoIAParaCriancasPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userEmail = session?.user?.email;
  
  const { 
    enrolledSlugs, 
    enroll, 
    loading: loadingEnrollments,
    refresh 
  } = useEnrollments(userEmail);

  const [isEnrolling, setIsEnrolling] = useState(false);

  // Verificar matrícula
  const isEnrolled = enrolledSlugs.includes(CURSO_ID);

  // Redirecionar para login se não estiver autenticado
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  // Função de matrícula
  const handleEnroll = async () => {
    if (!userEmail) return;
    
    setIsEnrolling(true);
    const success = await enroll(CURSO_ID);
    
    if (success) {
      // Recarregar para atualizar UI
      await refresh();
    }
    
    setIsEnrolling(false);
  };

  // Mostrar loading
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

  // Se não tem sessão, não renderiza
  if (!session) {
    return null;
  }

  const modulos = [
    { id: 1, titulo: "O que é IA", status: isEnrolled ? "disponivel" : "bloqueado" },
    { id: 2, titulo: "Como os robôs aprendem", status: "bloqueado" },
    { id: 3, titulo: "Conversando com máquinas", status: "bloqueado" },
    { id: 4, titulo: "Criando meu primeiro chatbot", status: "bloqueado" },
    { id: 5, titulo: "Jogos e IA", status: "bloqueado" },
    { id: 6, titulo: "Ética na IA", status: "bloqueado" },
    { id: 7, titulo: "Projeto: Robô ajudante", status: "bloqueado" },
    { id: 8, titulo: "Futuro da tecnologia", status: "bloqueado" },
    { id: 9, titulo: "Revisão geral", status: "bloqueado" },
    { id: 10, titulo: "Certificado", status: "bloqueado" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]" />
      </div>

      {/* Header Curso */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link href="/dashboard" className="hover:text-white transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <Link href="/cursos" className="hover:text-white transition-colors">
              Cursos
            </Link>
            <span>/</span>
            <span className="text-white">IA para Crianças</span>
          </div>

          {/* Título do Curso + Badge */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center border border-white/10">
              <svg className="w-10 h-10 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Inteligência Artificial para Crianças
                </h1>
                {isEnrolled && (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <span>✓</span>
                    <span>Matriculado</span>
                  </span>
                )}
              </div>
              <p className="text-slate-400">Primeiros Passos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Player Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-[#151520] to-[#0f0f1a] rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10" />
              
              <div className="text-center relative z-10">
                {isEnrolled ? (
                  <>
                    <div className="w-20 h-20 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-8 h-8 text-violet-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white font-medium">Módulo 1 - O que é IA</p>
                    <p className="text-slate-500 text-sm mt-1">Clique para assistir</p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="text-slate-400">Matricule-se para acessar o conteúdo</p>
                  </>
                )}
              </div>
            </div>

            {/* Botão de Matrícula ou Continuar */}
            {!isEnrolled ? (
              <div className="p-8 bg-gradient-to-br from-violet-900/20 to-[#0f0f1a] border border-violet-500/20 rounded-2xl text-center">
                <h2 className="text-2xl font-bold text-white mb-3">
                  Comece sua jornada agora
                </h2>
                <p className="text-slate-400 mb-6 max-w-xl mx-auto">
                  Matricule-se gratuitamente e tenha acesso a todos os módulos do curso.
                </p>
                <button
                  onClick={handleEnroll}
                  disabled={isEnrolling}
                  className="inline-flex items-center justify-center px-10 py-4 bg-violet-500 text-white text-lg font-semibold rounded-xl hover:bg-violet-400 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isEnrolling ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Matriculando...
                    </>
                  ) : (
                    <>
                      <span>Matricular-se</span>
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="p-8 bg-gradient-to-br from-emerald-900/20 to-[#0f0f1a] border border-emerald-500/20 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎉</span>
                  <h2 className="text-2xl font-bold text-white">
                    Você está matriculado!
                  </h2>
                </div>
                <p className="text-slate-400 mb-4">
                  Bem-vindo ao primeiro módulo. Em breve o conteúdo estará disponível.
                </p>
                <button className="inline-flex items-center justify-center px-8 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-all duration-300">
                  <span>Continuar Curso</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            )}

            {/* Sobre o Curso */}
            <div className="p-8 bg-[#151520] border border-white/5 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Sobre este curso</h3>
              <p className="text-slate-400 leading-relaxed">
                Neste curso, você vai descobrir como a inteligência artificial funciona 
                de forma simples e divertida. Vamos criar projetos, conversar com robôs 
                e entender como a tecnologia está mudando o mundo.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">10</div>
                  <div className="text-slate-500 text-sm">Módulos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">5h</div>
                  <div className="text-slate-500 text-sm">Duração</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">Iniciante</div>
                  <div className="text-slate-500 text-sm">Nível</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Lista de Módulos */}
          <div className="lg:col-span-1">
            <div className="bg-[#151520] border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h3 className="text-lg font-semibold text-white">Conteúdo do curso</h3>
                <p className="text-slate-500 text-sm mt-1">10 módulos</p>
              </div>
              
              <div className="divide-y divide-white/5">
                {modulos.map((modulo) => (
                  <div
                    key={modulo.id}
                    className={`p-4 flex items-center gap-4 transition-colors ${
                      modulo.status === "disponivel"
                        ? "bg-emerald-500/5 hover:bg-white/5 cursor-pointer"
                        : "opacity-50"
                    }`}
                  >
                    {/* Status Icon */}
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                      {modulo.status === "disponivel" ? (
                        <span className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-sm">
                          ▶
                        </span>
                      ) : modulo.status === "bloqueado" ? (
                        <span className="w-6 h-6 bg-white/10 text-slate-500 rounded-full flex items-center justify-center text-sm">
                          🔒
                        </span>
                      ) : (
                        <span className="w-6 h-6 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center text-sm border border-violet-500/30">
                          {modulo.id}
                        </span>
                      )}
                    </div>

                    {/* Título */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        modulo.status === "disponivel" ? "text-emerald-400" : "text-slate-300"
                      }`}>
                        Módulo {modulo.id}
                      </p>
                      <p className={`text-sm truncate ${
                        modulo.status === "disponivel" ? "text-emerald-400/70" : "text-slate-500"
                      }`}>
                        {modulo.titulo}
                      </p>
                    </div>

                    {/* Duração */}
                    <span className="text-xs text-slate-600 flex-shrink-0">
                      15 min
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progresso */}
            <div className="mt-6 p-6 bg-[#151520] border border-white/5 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm">Seu progresso</span>
                <span className="text-white font-semibold">{isEnrolled ? "0%" : "--"}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${isEnrolled ? "w-0" : "w-0"} bg-gradient-to-r from-violet-500 to-violet-400 rounded-full`} />
              </div>
              <p className="text-slate-500 text-sm mt-3">
                {isEnrolled ? "0 de 10 módulos concluídos" : "Matricule-se para acompanhar seu progresso"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
