'use client';

import { useState, useEffect, useCallback } from 'react';

export interface Enrollment {
  id: string;
  user_email: string;
  course_slug: string;
  status: string;
  progress: number;
  created_at: string;
  updated_at: string;
}

export function useEnrollments(userEmail: string | null | undefined) {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [enrolledSlugs, setEnrolledSlugs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Buscar matrículas do usuário via API Route
  const fetchEnrollments = useCallback(async () => {
    if (!userEmail) {
      setEnrollments([]);
      setEnrolledSlugs([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/enrollments');
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Não autenticado');
        }
        const data = await response.json();
        throw new Error(data.error || 'Erro ao buscar matrículas');
      }

      const data = await response.json();
      const enrollmentsList = data.enrollments || [];
      setEnrollments(enrollmentsList);
      setEnrolledSlugs(enrollmentsList.map((e: Enrollment) => e.course_slug));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      console.error('Erro ao buscar matrículas:', err);
    } finally {
      setLoading(false);
    }
  }, [userEmail]);

  // Verificar se está matriculado em um curso específico
  const checkEnrollment = useCallback(async (courseSlug: string): Promise<boolean> => {
    if (!userEmail) return false;

    try {
      const response = await fetch(`/api/enrollments/check?courseSlug=${encodeURIComponent(courseSlug)}`);
      
      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return data.enrolled;
    } catch (err) {
      console.error('Erro ao verificar matrícula:', err);
      return false;
    }
  }, [userEmail]);

  // Matricular usuário em um curso
  const enroll = useCallback(async (courseSlug: string): Promise<boolean> => {
    if (!userEmail) {
      setError('Usuário não autenticado');
      return false;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseSlug }),
      });

      if (!response.ok) {
        if (response.status === 409) {
          // Já matriculado, não é erro
          await fetchEnrollments();
          return true;
        }
        const data = await response.json();
        throw new Error(data.error || 'Erro ao matricular');
      }

      // Atualizar lista após matrícula
      await fetchEnrollments();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao matricular');
      console.error('Erro ao matricular:', err);
      return false;
    } finally {
      setLoading(false);
    }
  }, [userEmail, fetchEnrollments]);

  // Cancelar matrícula
  const unenroll = useCallback(async (courseSlug: string): Promise<boolean> => {
    if (!userEmail) {
      setError('Usuário não autenticado');
      return false;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/enrollments?courseSlug=${encodeURIComponent(courseSlug)}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao cancelar matrícula');
      }

      // Atualizar lista após cancelamento
      await fetchEnrollments();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao cancelar matrícula');
      console.error('Erro ao cancelar matrícula:', err);
      return false;
    } finally {
      setLoading(false);
    }
  }, [userEmail, fetchEnrollments]);

  // Carregar matrículas quando o email mudar
  useEffect(() => {
    fetchEnrollments();
  }, [fetchEnrollments]);

  return {
    enrollments,
    enrolledSlugs,
    loading,
    error,
    enroll,
    unenroll,
    checkEnrollment,
    refresh: fetchEnrollments,
  };
}
