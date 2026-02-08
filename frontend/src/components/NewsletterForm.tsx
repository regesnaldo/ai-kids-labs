'use client';

/**
 * 📧 NEWSLETTER FORM
 * 
 * Formulário de inscrição na newsletter.
 */

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Implementar integração real com serviço de email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Inscrição realizada com sucesso!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Erro ao realizar inscrição. Tente novamente.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
        <div className="flex items-center justify-center gap-3">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-emerald-400 font-medium">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
        required
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-8 py-4 bg-violet-500 text-white font-semibold rounded-full hover:bg-violet-400 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Inscrevendo...' : 'Inscrever-se'}
      </button>
      
      {status === 'error' && (
        <p className="text-red-400 text-sm w-full text-center">{message}</p>
      )}
    </form>
  );
}
