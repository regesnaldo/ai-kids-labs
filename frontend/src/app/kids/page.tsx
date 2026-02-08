import Link from "next/link";

export default function KidsPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] selection:bg-cyan-500/30 selection:text-white">
      {/* Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-float { animation: float 3s ease-in-out infinite; }
        `
      }} />

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-cyan-950/10 to-[#0a0a0f]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              6 a 12 anos
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="block text-cyan-400">Despertar</span>
            <span className="block">o Futuro</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Aqui, crianças descobrem que tecnologia é mágica que elas podem criar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link href="#jornada" className="px-10 py-4 bg-cyan-500 text-white font-semibold text-sm tracking-wide hover:bg-cyan-400 transition-all duration-300 rounded-full">
              Começar Aventura
            </Link>
            <Link href="/" className="px-10 py-4 border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white/5 transition-all duration-300 rounded-full">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="jornada" className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] text-cyan-400/70 uppercase font-medium block mb-4">A Jornada</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Três passos para o futuro</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Passo 1 */}
            <div className="relative p-8 bg-[#0f0f1a] border border-white/5 rounded-2xl">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Explorar</h3>
              <p className="text-slate-400 leading-relaxed">
                Crianças descobrem conceitos de IA através de histórias interativas e jogos envolventes.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="relative p-8 bg-[#0f0f1a] border border-white/5 rounded-2xl">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Criar</h3>
              <p className="text-slate-400 leading-relaxed">
                Usam ferramentas simples para construir seus primeiros projetos de robótica e programação.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="relative p-8 bg-[#0f0f1a] border border-white/5 rounded-2xl">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compartilhar</h3>
              <p className="text-slate-400 leading-relaxed">
                Apresentam suas criações para família e amigos, desenvolvendo confiança e comunicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VÃO APRENDER */}
      <section className="relative py-24 px-6 md:px-12 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] tracking-[0.3em] text-cyan-400/70 uppercase font-medium block mb-4">Conteúdo</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                O que seu filho vai aprender
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Pensamento Computacional</h3>
                    <p className="text-slate-400">Lógica, sequenciamento e resolução de problemas de forma lúdica.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Chatbots Amigáveis</h3>
                    <p className="text-slate-400">Como conversar com IAs de forma segura e produtiva.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Criatividade com IA</h3>
                    <p className="text-slate-400">Criar histórias, desenhos e músicas com ajuda da tecnologia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Placeholder */}
            <div className="relative aspect-square bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                  <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-slate-500 text-sm">Imagens ilustrativas serão adicionadas aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] tracking-[0.3em] text-emerald-400/70 uppercase font-medium block mb-4">Segurança Primeiro</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Ambiente 100% seguro para crianças
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Toda interação é monitorada. Todo conteúdo é filtrado. Toda experiência é educativa.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
              <svg className="w-8 h-8 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-white font-semibold mb-2">Conteúdo Filtrado</h3>
              <p className="text-slate-400 text-sm">Sem publicidade. Sem distrações. Apenas aprendizado.</p>
            </div>

            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
              <svg className="w-8 h-8 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-white font-semibold mb-2">Privacidade Total</h3>
              <p className="text-slate-400 text-sm">Dados protegidos. Nenhuma informação compartilhada.</p>
            </div>

            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
              <svg className="w-8 h-8 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-white font-semibold mb-2">Acompanhamento</h3>
              <p className="text-slate-400 text-sm">Pais recebem relatórios do progresso dos filhos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-cyan-950/20 to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pronto para começar?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Dê ao seu filho o presente de entender o futuro.
          </p>
          <Link href="/adultos" className="inline-block px-12 py-5 bg-cyan-500 text-white font-semibold text-base tracking-wide hover:bg-cyan-400 transition-all duration-300 rounded-full">
            Iniciar Jornada Gratuita
          </Link>
          <p className="mt-6 text-sm text-slate-500">Plano Fundação - Acesso gratuito vitalício</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-white">AI KIDS LABS</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">Kids</span>
          </div>
          <Link href="/" className="text-slate-500 hover:text-white transition-colors text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
