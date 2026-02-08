'use client';

import { useState, useEffect } from 'react';

// Tipos para os módulos
interface Modulo {
  id: number;
  titulo: string;
  descricao: string;
  progresso?: number;
}

// Mock User para demonstração (simulando um pai logado)
const user = {
  role: 'parent',
  name: 'Responsável',
};

// Simulação de serviço de busca de dados
const getModules = async (): Promise<Modulo[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    { id: 1, titulo: "MÓDULO 01", descricao: "Descubra como os robôs pensam e aprenda a falar com eles!", progresso: 10 },
    { id: 2, titulo: "MÓDULO 02", descricao: "Crie suas próprias artes e histórias usando Inteligência Artificial.", progresso: 0 },
    { id: 3, titulo: "MÓDULO 03", descricao: "O laboratório secreto onde a tecnologia encontra a diversão.", progresso: 0 },
    { id: 4, titulo: "MÓDULO 04", descricao: "Avançando para conceitos de Machine Learning de forma divertida.", progresso: 0 },
    { id: 5, titulo: "MÓDULO 05", descricao: "Projeto Final: Construa seu próprio assistente virtual.", progresso: 0 },
  ];
};

// Componentes do Modo Pais
const TimeLimits = () => (
  <div className="bg-gray-800/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
    <div className="flex items-center gap-2 mb-3 text-purple-300">
      <span className="text-xl">⏱️</span>
      <h4 className="font-bold">Tempo de Uso</h4>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-400">
        <span>Hoje</span>
        <span>45m / 2h</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div className="bg-purple-500 h-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{width: '37%'}}></div>
      </div>
      <button className="text-xs text-purple-400 hover:text-purple-300 mt-2 underline">
        Ajustar limites
      </button>
    </div>
  </div>
);

const ProgressReports = () => (
  <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
    <div className="flex items-center gap-2 mb-3 text-blue-300">
      <span className="text-xl">📊</span>
      <h4 className="font-bold">Relatórios</h4>
    </div>
    <p className="text-sm text-gray-400 mb-3">
      O desempenho no Módulo 01 foi excelente! 🌟
    </p>
    <div className="flex gap-2">
      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Lógica: 90%</span>
      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Criatividade: 85%</span>
    </div>
  </div>
);

const SafetySettings = () => (
  <div className="bg-gray-800/50 p-4 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
    <div className="flex items-center gap-2 mb-3 text-red-300">
      <span className="text-xl">🛡️</span>
      <h4 className="font-bold">Segurança</h4>
    </div>
    <div className="space-y-2 text-sm text-gray-400">
      <div className="flex items-center justify-between">
        <span>Filtro de Conteúdo</span>
        <span className="text-green-400 font-bold">ATIVO</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Chat Moderado</span>
        <span className="text-green-400 font-bold">ATIVO</span>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [modules, setModules] = useState<Modulo[]>([]);
  const [loading, setLoading] = useState(true);
  const roboUrl = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getModules();
        setModules(data);
      } catch (error) {
        console.error("Erro ao carregar módulos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const AulaCard = ({ titulo, descricao, progresso = 0 }: { titulo: string; descricao: string; progresso?: number }) => {
    return (
      <div className="aula-card group bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-purple-200">
        <div className="relative w-32 h-32 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
          <img
            src={roboUrl}
            alt="Robô Instrutor"
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e: any) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" }}
          />
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">{titulo}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{descricao}</p>
        
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-4 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mb-4 font-medium">{progresso}% Completo</p>

        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2">
          {progresso > 0 ? 'CONTINUAR' : 'INICIAR JORNADA'}
          <span className="text-lg">➜</span>
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 leading-tight drop-shadow-sm">
          A.I KIDS LABS
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto">
          Formamos a <span className="font-semibold text-purple-600">geração</span> que construirá o futuro.
        </p>
      </div>

      {/* Seção Primeiros Passos */}
      <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            🚀 Primeiros Passos
          </h3>
          <p className="text-gray-600 mb-6 text-lg">Bem-vindo(a) ao laboratório! Para começar sua aventura:</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-800 font-medium">
              <span className="mr-3 text-2xl">👤</span> Complete seu perfil
            </li>
            <li className="flex items-center p-4 bg-purple-50 rounded-lg border border-purple-100 text-purple-800 font-medium">
              <span className="mr-3 text-2xl">🤖</span> Explore o Módulo 01
            </li>
            <li className="flex items-center p-4 bg-pink-50 rounded-lg border border-pink-100 text-pink-800 font-medium">
              <span className="mr-3 text-2xl">⏱️</span> Configure limites
            </li>
          </ul>
        </div>
      </div>

      {/* DASHBOARD DOS PAIS (Renderização Condicional) */}
      {user.role === 'parent' && (
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="p-8 bg-slate-900 rounded-2xl border border-purple-500/30 shadow-2xl relative overflow-hidden">
            {/* Efeito de fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="flex items-center justify-between mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="bg-purple-600 p-2 rounded-lg text-white">👨‍👩‍👧‍👦</span>
                Painel dos Pais
              </h3>
              <span className="text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-1 rounded bg-purple-500/10">
                ADMIN MODE: ON
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <TimeLimits />
              <ProgressReports />
              <SafetySettings />
            </div>
          </div>
        </div>
      )}
       
      {/* Grid de Módulos */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pl-4 border-l-4 border-purple-500">
          Seus Módulos de Aprendizado
        </h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {modules.map((modulo) => (
              <AulaCard 
                key={modulo.id}
                titulo={modulo.titulo}
                descricao={modulo.descricao}
                progresso={modulo.progresso}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
