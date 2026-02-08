/**
 * 🎮 EXEMPLO: Demo dos LevelCards
 * 
 * Esta página demonstra como usar os três cards de nível
 * (Kids, Jovens, Adultos) em uma grade responsiva.
 */

import React from 'react';
import { LevelCard, LevelCardsGrid } from '../../components';

// ============================================
// OPÇÃO 1: Usando o Grid Completo (Recomendado)
// ============================================

export const DemoGridCompleto: React.FC = () => {
  return <LevelCardsGrid />;
};

// ============================================
// OPÇÃO 2: Usando Cards Individuais (Customizado)
// ============================================

export const DemoCardsIndividuais: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título Customizado */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Comece Sua Jornada
          </h1>
          <p className="text-slate-400 text-lg">
            Escolha o nível que melhor representa você
          </p>
        </div>

        {/* Grid com espaçamento customizado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <LevelCard type="kids" />
          <LevelCard type="teens" />
          <LevelCard type="adults" />
        </div>

        {/* Informação adicional */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Não sabe qual escolher?{' '}
            <a href="/teste" className="text-violet-400 hover:text-violet-300 underline">
              Faça o teste de nivelamento
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================
// OPÇÃO 3: Layout com Destaque (Um card maior)
// ============================================

export const DemoComDestaque: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Para Todas as Idades
        </h2>

        {/* Layout assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kids - Destaque */}
          <div className="md:col-span-2">
            <LevelCard type="kids" className="max-w-2xl mx-auto" />
          </div>
          
          {/* Teens e Adults lado a lado */}
          <LevelCard type="teens" />
          <LevelCard type="adults" />
        </div>
      </div>
    </div>
  );
};

// ============================================
// USO NA PÁGINA PRINCIPAL
// ============================================

/*
// app/page.tsx ou qualquer página
import { LevelCardsGrid } from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LevelCardsGrid />
      <Footer />
    </main>
  );
}
*/

export default DemoGridCompleto;
