/**
 * 🎴 LevelCard Component
 * 
 * Componente reutilizável para exibir os três níveis do AI Kids Labs:
 * - Kids (6-12 anos): Despertar o Futuro
 * - Jovens (13-17 anos): Construindo o Amanhã  
 * - Adultos (18+ anos): Mentes Extraordinárias
 */

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ============================================
// TIPOS
// ============================================

export type LevelType = 'kids' | 'teens' | 'adults';

export interface LevelCardProps {
  type: LevelType;
  className?: string;
}

export interface LevelData {
  id: LevelType;
  title: string;
  subtitle: string;
  ageRange: string;
  description: string;
  features: string[];
  imagePath: string;
  gradient: string;
  accentColor: string;
  borderColor: string;
  href: string;
}

// ============================================
// CONFIGURAÇÃO DOS NÍVEIS
// ============================================

const LEVELS_CONFIG: Record<LevelType, LevelData> = {
  kids: {
    id: 'kids',
    title: 'Despertar o Futuro',
    subtitle: 'Acesso Essencial',
    ageRange: '6-12 anos',
    description: 'Primeiros passos na inteligência artificial com robôs amigos, histórias mágicas e laboratórios interativos.',
    features: [
      'Robôs virtuais interativos',
      'Histórias com IA',
      'Jogos educativos',
      'Laboratório seguro'
    ],
    imagePath: '/cards/kids/hero.png',
    gradient: 'from-cyan-500 via-blue-500 to-violet-600',
    accentColor: '#64D2FF',
    borderColor: 'rgba(100, 210, 255, 0.3)',
    href: '/kids'
  },
  teens: {
    id: 'teens',
    title: 'Construindo o Amanhã',
    subtitle: 'Formação Prática',
    ageRange: '13-17 anos',
    description: 'Mãos na massa com projetos reais de IA. Desenvolva apps, games e construa seu portfólio profissional.',
    features: [
      'Projetos de programação',
      'Criação de apps com IA',
      'Desenvolvimento de games',
      'Desafios técnicos'
    ],
    imagePath: '/cards/jovens/hero.png',
    gradient: 'from-orange-500 via-amber-500 to-violet-600',
    accentColor: '#FF9F0A',
    borderColor: 'rgba(255, 159, 10, 0.3)',
    href: '/jovens'
  },
  adults: {
    id: 'adults',
    title: 'Mentes Extraordinárias',
    subtitle: 'Especialização Profissional',
    ageRange: '18+ anos',
    description: 'Formação profissional em IA. Domine ferramentas avançadas e transforme sua carreira com inteligência artificial.',
    features: [
      'Especialização técnica',
      'Projetos profissionais',
      'Mentorias estratégicas',
      'Certificações'
    ],
    imagePath: '/cards/adultos/hero.png',
    gradient: 'from-emerald-500 via-teal-500 to-blue-600',
    accentColor: '#30D158',
    borderColor: 'rgba(48, 209, 88, 0.3)',
    href: '/adultos'
  }
};

// ============================================
// COMPONENTE
// ============================================

export const LevelCard: React.FC<LevelCardProps> = ({ type, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const level = LEVELS_CONFIG[type];

  return (
    <Link 
      href={level.href}
      className={`group block w-full max-w-md mx-auto ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Principal */}
      <div 
        className="relative bg-[#0f0f1a] rounded-2xl overflow-hidden border transition-all duration-500"
        style={{ 
          borderColor: isHovered ? level.accentColor : level.borderColor,
          boxShadow: isHovered ? `0 0 40px ${level.borderColor}` : 'none'
        }}
      >
        {/* Glow Effect */}
        <div 
          className={`absolute -inset-1 bg-gradient-to-r ${level.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
        />

        {/* Imagem de Fundo */}
        <div className="relative h-56 overflow-hidden">
          {/* Placeholder gradiente até ter imagem real */}
          <div className={`absolute inset-0 bg-gradient-to-br ${level.gradient} opacity-30`} />
          
          {/* Pattern de grid tecnológico */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent" />

          {/* Badge de idade */}
          <div className="absolute top-4 right-4">
            <span 
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border"
              style={{ 
                backgroundColor: `${level.accentColor}15`,
                borderColor: level.borderColor,
                color: level.accentColor
              }}
            >
              {level.ageRange}
            </span>
          </div>

          {/* Ícone central (placeholder até ter imagem) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${level.gradient} flex items-center justify-center transform transition-transform duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}
            >
              {type === 'kids' && (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {type === 'teens' && (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
              {type === 'adults' && (
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="relative p-6 pt-4">
          {/* Subtítulo */}
          <span 
            className="text-xs font-medium uppercase tracking-wider"
            style={{ color: level.accentColor }}
          >
            {level.subtitle}
          </span>

          {/* Título */}
          <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-slate-200 transition-colors">
            {level.title}
          </h3>

          {/* Descrição */}
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            {level.description}
          </p>

          {/* Features */}
          <ul className="mt-5 space-y-2">
            {level.features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-center gap-3 text-sm text-slate-300 transform transition-all duration-300"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                }}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: level.accentColor }}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div 
              className="flex items-center justify-between group/btn cursor-pointer"
              style={{ color: level.accentColor }}
            >
              <span className="font-semibold text-sm tracking-wide">
                Explorar Trilha
              </span>
              <svg 
                className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Barra de progresso decorativa */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
          <div 
            className={`h-full bg-gradient-to-r ${level.gradient} transition-all duration-700`}
            style={{ width: isHovered ? '100%' : '0%' }}
          />
        </div>
      </div>
    </Link>
  );
};

// ============================================
// COMPONENTE GRID (PARA EXIBIR OS 3 CARDS)
// ============================================

export const LevelCardsGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
            Escolha Sua Jornada
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Trilhas de Formação
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Do despertar curioso à maestria profissional, 
            cada nível é uma jornada completa de transformação tecnológica.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LevelCard type="kids" />
          <LevelCard type="teens" />
          <LevelCard type="adults" />
        </div>
      </div>
    </section>
  );
};

export default LevelCard;
