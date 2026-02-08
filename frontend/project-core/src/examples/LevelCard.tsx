/**
 * 🎴 EXEMPLO: LevelCard Component
 * 
 * Este é um exemplo de como criar um componente de card
 * para os níveis do AI Kids Labs.
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ============================================
// TIPOS
// ============================================

interface LevelCardProps {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  imagePath: string;
  color: string;
  href: string;
}

// ============================================
// COMPONENTE
// ============================================

export const LevelCard: React.FC<LevelCardProps> = ({
  title,
  ageRange,
  description,
  imagePath,
  color,
  href,
}) => {
  return (
    <Link href={href} className="group block">
      <div 
        className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 
                   transition-all duration-500 hover:scale-[1.02] hover:border-slate-600"
        style={{ borderColor: `${color}30` }}
      >
        {/* Imagem de Fundo */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {/* Faixa Etária */}
          <span 
            className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-3"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            {ageRange}
          </span>

          {/* Título */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
            {title}
          </h3>

          {/* Descrição */}
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* Indicador de Ação */}
          <div className="mt-4 flex items-center text-sm font-medium" style={{ color }}>
            <span>Explorar</span>
            <svg 
              className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Efeito de Brilho */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${color}10, transparent 70%)`
          }}
        />
      </div>
    </Link>
  );
};

// ============================================
// EXEMPLO DE USO
// ============================================

/*
import { LevelCard } from './examples/LevelCard';

<LevelCard
  id="kids"
  title="Despertar o Futuro"
  ageRange="6-12 anos"
  description="Primeiros passos na inteligência artificial com robôs amigos e histórias mágicas."
  imagePath="/cards/kids/hero.png"
  color="#64D2FF"
  href="/kids"
/>
*/

export default LevelCard;
