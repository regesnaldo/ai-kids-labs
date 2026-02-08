import Link from "next/link";

export default function AdultosPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] selection:bg-emerald-500/30 selection:text-white">
      {/* Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
          .animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-gradient { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        `
      }} />

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-emerald-950/10 to-[#0a0a0f]" />
        <div className="absolute bottom-0 left-1/3 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              18+ anos | Transformação Profissional
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="block">Mentes</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Extraordinárias
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Profissionais que dominam a IA não serão substituídos por ela.
            Eles serão quem liderarão a próxima década.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link href="#programa" className="px-10 py-4 bg-emerald-500 text-white font-semibold text-sm tracking-wide hover:bg-emerald-400 transition-all duration-300 rounded-full">
              Iniciar Transformação
            </Link>
            <Link href="/" className="px-10 py-4 border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white/5 transition-all duration-300 rounded-full">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>

      {/* REALIDADE */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] tracking-[0.3em] text-emerald-400/70 uppercase font-medium block mb-4">A Realidade</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                A IA não está vindo.
                <span className="block text-emerald-400">Ela já está aqui.</span>
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-[#0f0f1a] border-l-2 border-emerald-500 rounded-r-xl">
                  <h3 className="text-white font-semibold mb-2">Profissionais que usam IA</h3>
                  <p className="text-slate-400">Produzem 10x mais em metade do tempo. São promovidos. Lideram equipes. Definem estratégias.</p>
                </div>

                <div className="p-6 bg-[#0f0f1a] border-l-2 border-slate-600 rounded-r-xl">
                  <h3 className="text-white font-semibold mb-2">Profissionais que ignoram IA</h3>
                  <p className="text-slate-400">Estão sendo substituídos por quem entendeu primeiro. Não por máquinas, mas por pessoas com máquinas.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-center">
                <p className="text-4xl font-bold text-emerald-400 mb-2">85%</p>
                <p className="text-slate-400 text-sm">Dos empregos de 2030 ainda não existem</p>
              </div>
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-center">
                <p className="text-4xl font-bold text-emerald-400 mb-2">10x</p>
                <p className="text-slate-400 text-sm">Mais produtividade com IA</p>
              </div>
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-center">
                <p className="text-4xl font-bold text-emerald-400 mb-2">97%</p>
                <p className="text-slate-400 text-sm">Das empresas querem profissionais com IA</p>
              </div>
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-center">
                <p className="text-4xl font-bold text-emerald-400 mb-2">3x</p>
                <p className="text-slate-400 text-sm">Maior salário para quem domina IA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section id="programa" className="relative py-24 px-6 md:px-12 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] text-emerald-400/70 uppercase font-medium block mb-4">O Programa</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Sua transformação em 3 fases</h2>
          </div>

          <div className="space-y-8">
            {/* Fase 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-emerald-400">1</span>
              </div>
              <div className="flex-1 p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Fundamentos da IA</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Entenda como a IA realmente funciona. Domine os principais modelos e aprenda a escolher a ferramenta certa para cada tarefa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">ChatGPT & Claude</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">Prompt Engineering</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">IA Generativa</span>
                </div>
              </div>
            </div>

            {/* Fase 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-emerald-400">2</span>
              </div>
              <div className="flex-1 p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Automação de Processos</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Aprenda a automatizar tarefas repetitivas. Crie fluxos de trabalho inteligentes que trabalham por você enquanto você foca no estratégico.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">Make & Zapier</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">APIs & Integrações</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">Bases de Conhecimento</span>
                </div>
              </div>
            </div>

            {/* Fase 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-emerald-400">3</span>
              </div>
              <div className="flex-1 p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Liderança na Era da IA</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Aprenda a liderar equipes híbridas (humanos + IA). Desenvolva a visão estratégica para transformar sua área ou empresa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">Gestão de Equipes</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">Estratégia Digital</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full">Inovação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] text-emerald-400/70 uppercase font-medium block mb-4">Para Quem é</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Qual é o seu perfil?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Perfil 1 */}
            <div className="p-8 bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-500/10 hover:border-emerald-500/30 rounded-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Profissionais Liberais</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Advogados, médicos, consultores, coaches. Multiplique sua produtividade e ofereça serviços que seus concorrentes não conseguem.
              </p>
            </div>

            {/* Perfil 2 */}
            <div className="p-8 bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-500/10 hover:border-emerald-500/30 rounded-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Empreendedores</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reduza custos operacionais em 70%. Automatize atendimento, marketing e processos. Foque no crescimento enquanto a IA opera.
              </p>
            </div>

            {/* Perfil 3 */}
            <div className="p-8 bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-500/10 hover:border-emerald-500/30 rounded-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Gestores & Líderes</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Aprenda a implementar IA em sua empresa. Lidere a transformação digital da sua área e torne-se indispensável para a organização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="relative py-24 px-6 md:px-12 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] text-emerald-400/70 uppercase font-medium block mb-4">Resultados Reais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Quem transformou sua carreira</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
              <p className="text-slate-300 leading-relaxed mb-6">
                "Em 3 meses, automatizei 80% do meu trabalho operacional. Fui promovido a diretor porque pude focar em estratégia."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">RM</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Ricardo M.</p>
                  <p className="text-slate-500 text-sm">Diretor de Operações</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
              <p className="text-slate-300 leading-relaxed mb-6">
                "Minha produtividade como advogada aumentou 5x. Agora atendo 3x mais clientes com a mesma equipe."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">FC</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Fernanda C.</p>
                  <p className="text-slate-500 text-sm">Advogada</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
              <p className="text-slate-300 leading-relaxed mb-6">
                "Fiz a transição de marketing tradicional para IA. Hoje consulto empresas sobre automação. Tripliquei minha renda."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">AP</span>
                </div>
                <div>
                  <p className="text-white font-semibold">André P.</p>
                  <p className="text-slate-500 text-sm">Consultor de IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] text-emerald-400/70 uppercase font-medium block mb-4">Investimento</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Escolha seu plano</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fundação */}
            <div className="p-10 bg-[#0f0f1a] border border-white/10 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Plano Fundação</h3>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">Gratuito</span>
              </div>
              <p className="text-slate-400 mb-8">Acesso essencial para começar sua jornada na IA.</p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Acesso aos laboratórios básicos
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comunidade de alunos
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificado de participação
                </li>
              </ul>

              <button className="w-full py-4 bg-white text-[#0a0a0f] font-semibold rounded-full hover:bg-slate-200 transition-all">
                Começar Grátis
              </button>
            </div>

            {/* Elite */}
            <div className="p-10 bg-gradient-to-b from-emerald-500/10 to-[#0f0f1a] border border-emerald-500/30 rounded-2xl relative">
              <div className="absolute -top-3 right-8 px-4 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                Recomendado
              </div>

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Plano Elite</h3>
                <span className="text-emerald-400 font-bold">Em Breve</span>
              </div>
              <p className="text-slate-400 mb-8">Formação completa para quem quer liderar a era da IA.</p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-200">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tudo do Plano Fundação
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mentorias individuais
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Projetos profissionais
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Acesso antecipado a novidades
                </li>
              </ul>

              <button className="w-full py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-all">
                Entrar na Lista de Espera
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-emerald-950/30 to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            O futuro não espera.
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Cada dia que você adia é um dia que seus concorrentes avançam.
          </p>
          <Link href="#programa" className="inline-block px-12 py-5 bg-emerald-500 text-white font-semibold text-base tracking-wide hover:bg-emerald-400 transition-all duration-300 rounded-full">
            Começar Agora
          </Link>
          <p className="mt-6 text-sm text-slate-500">Acesso gratuito. Cancele quando quiser.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-white">AI KIDS LABS</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">Adultos</span>
          </div>
          <Link href="/" className="text-slate-500 hover:text-white transition-colors text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
