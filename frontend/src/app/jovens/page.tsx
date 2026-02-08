import Link from "next/link";

export default function JovensPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] selection:bg-orange-500/30 selection:text-white">
      {/* Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.3); } 50% { box-shadow: 0 0 40px rgba(251, 146, 60, 0.5); } }
          .animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        `
      }} />

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-orange-950/10 to-[#0a0a0f]" />
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              13 a 17 anos
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="block text-orange-400">Construindo</span>
            <span className="block">o Amanhã</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Jovens que não apenas usam tecnologia — eles a criam.
            Projetos reais, portfólio sólido, futuro garantido.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link href="#projetos" className="px-10 py-4 bg-orange-500 text-white font-semibold text-sm tracking-wide hover:bg-orange-400 transition-all duration-300 rounded-full">
              Ver Projetos
            </Link>
            <Link href="/" className="px-10 py-4 border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white/5 transition-all duration-300 rounded-full">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] text-orange-400/70 uppercase font-medium block mb-4">Por que aqui?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Sua idade é sua vantagem</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#0f0f1a] border border-white/5 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Projetos que importam</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Não fazemos exercícios fictícios. Você constrói aplicações reais que resolvem problemas reais — e que vão para seu portfólio.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Apps funcionais
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Sites profissionais
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Automações inteligentes
                </li>
              </ul>
            </div>

            <div className="p-8 bg-[#0f0f1a] border border-white/5 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Mentoria de quem já venceu</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Aprenda com profissionais que trabalham nas maiores empresas de tecnologia do mundo.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Sessões ao vivo semanais
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Feedback em seus projetos
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Networking profissional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRILHAS */}
      <section id="projetos" className="relative py-24 px-6 md:px-12 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] text-orange-400/70 uppercase font-medium block mb-4">Trilhas de Aprendizado</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Escolha seu caminho</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Trilha 1 */}
            <div className="group p-8 bg-gradient-to-b from-orange-500/5 to-transparent border border-orange-500/10 hover:border-orange-500/30 rounded-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Desenvolvedor Full Stack</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Aprenda a construir aplicações web completas com as tecnologias mais modernas do mercado.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">Banco de Dados</span>
              </div>
            </div>

            {/* Trilha 2 */}
            <div className="group p-8 bg-gradient-to-b from-orange-500/5 to-transparent border border-orange-500/10 hover:border-orange-500/30 rounded-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Especialista em IA</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Domine ferramentas de IA para criar soluções inteligentes que automatizam e inovam.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">ChatGPT</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">Midjourney</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">Automação</span>
              </div>
            </div>

            {/* Trilha 3 */}
            <div className="group p-8 bg-gradient-to-b from-orange-500/5 to-transparent border border-orange-500/10 hover:border-orange-500/30 rounded-2xl transition-all duration-500">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Empreendedor Digital</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Aprenda a criar e escalar negócios digitais usando tecnologia como alavanca de crescimento.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">Marketing</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">Produto</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full">Vendas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HACKATHONS */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] tracking-[0.3em] text-orange-400/70 uppercase font-medium block mb-4">Competições</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Hackathons e Desafios
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Coloque suas habilidades à prova em competições mensais. Ganhe prêmios, reconhecimento e oportunidades reais.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#0f0f1a] rounded-xl border border-white/5">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-bold">#1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Prêmios em Dinheiro</h4>
                    <p className="text-slate-400 text-sm">Ganhadores recebem bolsas e investimentos em seus projetos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0f0f1a] rounded-xl border border-white/5">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-bold">#2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Networking</h4>
                    <p className="text-slate-400 text-sm">Conecte-se com outros jovens talentosos e empresas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0f0f1a] rounded-xl border border-white/5">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-400 font-bold">#3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Portfólio Real</h4>
                    <p className="text-slate-400 text-sm">Cada hackathon gera um projeto para seu currículo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative aspect-square bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-3xl border border-white/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <svg className="w-12 h-12 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <p className="text-slate-500 text-sm">Imagens ilustrativas serão adicionadas aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="relative py-24 px-6 md:px-12 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] text-orange-400/70 uppercase font-medium block mb-4">Histórias Reais</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Quem passou por aqui</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
              <p className="text-slate-300 leading-relaxed mb-6">
                "Comecei com 14 anos. Hoje, com 17, tenho um app com 10 mil usuários e uma empresa de tecnologia. O AI Kids Labs mudou minha vida."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400 font-bold">GL</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Gabriel L.</p>
                  <p className="text-slate-500 text-sm">17 anos, Fundador</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#0a0a0f] border border-white/5 rounded-2xl">
              <p className="text-slate-300 leading-relaxed mb-6">
                "Ganhei 3 hackathons e fui contratada como desenvolvedora júnior aos 16. Aprendi mais aqui do que em 2 anos de escola tradicional."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400 font-bold">MS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Marina S.</p>
                  <p className="text-slate-500 text-sm">16 anos, Dev Júnior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-orange-950/20 to-[#0a0a0f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Sua jornada começa agora
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Não espere a faculdade para começar a construir seu futuro.
          </p>
          <Link href="/adultos" className="inline-block px-12 py-5 bg-orange-500 text-white font-semibold text-base tracking-wide hover:bg-orange-400 transition-all duration-300 rounded-full">
            Entrar para o Labs
          </Link>
          <p className="mt-6 text-sm text-slate-500">Acesso gratuito ao Plano Fundação</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-white">AI KIDS LABS</span>
            <span className="text-slate-600">|</span>
            <span className="text-orange-400">Jovens</span>
          </div>
          <Link href="/" className="text-slate-500 hover:text-white transition-colors text-sm">
            ← Voltar para Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
