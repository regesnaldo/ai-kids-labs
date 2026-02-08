/**
 * 🛠️ FORMATADORES UTILITÁRIOS
 * 
 * Funções para formatação de dados comuns no projeto.
 */

/**
 * Formata número de telefone brasileiro
 * Ex: 11999999999 → (11) 99999-9999
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return phone;
}

/**
 * Formata CPF
 * Ex: 12345678900 → 123.456.789-00
 */
export function formatCPF(cpf: string): string {
  const cleaned = cpf.replace(/\D/g, '');
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Formata valores monetários em Reais
 * Ex: 97.00 → R$ 97,00
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata data para padrão brasileiro
 * Ex: 2026-02-04 → 04/02/2026
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('pt-BR');
}

/**
 * Formata idade para exibição
 * Ex: 6-12 anos → "6 a 12 anos"
 */
export function formatAgeRange(ageRange: string): string {
  return ageRange.replace('-', ' a ');
}

/**
 * Limita texto com reticências
 * Ex: "Texto muito longo..." → "Texto mui..."
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Converte slug para texto legível
 * Ex: "kids-labs" → "Kids Labs"
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Gera iniciais a partir do nome
 * Ex: "João Silva" → "JS"
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
}
