// Serviço de matrículas - agora usa API Routes do Next.js
// O backend (API Routes) acessa o Supabase com SERVICE ROLE KEY

import { Enrollment } from '@/hooks/useEnrollments';

const API_BASE = '/api/enrollments';

export async function getUserEnrollments(): Promise<Enrollment[]> {
  const response = await fetch(API_BASE);
  
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Não autenticado');
    }
    const data = await response.json();
    throw new Error(data.error || 'Erro ao buscar matrículas');
  }

  const data = await response.json();
  return data.enrollments || [];
}

export async function checkEnrollment(courseSlug: string): Promise<boolean> {
  const response = await fetch(`${API_BASE}/check?courseSlug=${encodeURIComponent(courseSlug)}`);
  
  if (!response.ok) {
    return false;
  }

  const data = await response.json();
  return data.enrolled;
}

export async function enrollUser(courseSlug: string): Promise<{ success: boolean; alreadyEnrolled?: boolean }> {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ courseSlug }),
  });

  if (response.status === 409) {
    return { success: true, alreadyEnrolled: true };
  }

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Erro ao matricular');
  }

  return { success: true, alreadyEnrolled: false };
}

export async function unenrollUser(courseSlug: string): Promise<boolean> {
  const response = await fetch(`${API_BASE}?courseSlug=${encodeURIComponent(courseSlug)}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || 'Erro ao cancelar matrícula');
  }

  return true;
}
