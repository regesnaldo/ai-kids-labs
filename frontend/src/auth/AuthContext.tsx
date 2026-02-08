'use client';

/**
 * 🔐 AUTH CONTEXT
 * 
 * Gerenciamento de autenticação global da aplicação.
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ============================================
// TYPES
// ============================================

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  level?: 'kids' | 'teens' | 'adults';
  plan?: 'foundation' | 'elite';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<{ success: boolean; error?: string }>;
}

// ============================================
// CONTEXT
// ============================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============================================
// PROVIDER
// ============================================

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verifica sessão ao iniciar
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // TODO: Implementar chamada real à API
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch {
      setIsLoading(false);
    }
  };

  const login = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // TODO: Implementar chamada real à API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        level: 'adults',
        plan: 'foundation',
      };
      
      setUser(mockUser);
      localStorage.setItem('ai_kids_labs_token', 'mock_token');
      
      return { success: true };
    } catch {
      return { success: false, error: 'Email ou senha incorretos' };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loginWithGoogle = useCallback(async () => {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: false, error: 'Login com Google em breve' };
    } catch {
      return { success: false, error: 'Erro ao conectar com Google' };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name,
        level: 'adults',
        plan: 'foundation',
      };
      
      setUser(mockUser);
      localStorage.setItem('ai_kids_labs_token', 'mock_token');
      
      return { success: true };
    } catch {
      return { success: false, error: 'Erro ao criar conta' };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setUser(null);
      localStorage.removeItem('ai_kids_labs_token');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }, []);

  const updateProfile = useCallback(async (data: Partial<User>) => {
    try {
      if (user) {
        setUser({ ...user, ...data });
      }
      return { success: true };
    } catch {
      return { success: false, error: 'Erro ao atualizar perfil' };
    }
  }, [user]);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    loginWithGoogle,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ============================================
// HOOK
// ============================================

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}

export default AuthContext;
