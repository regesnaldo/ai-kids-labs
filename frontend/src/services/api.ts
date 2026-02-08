/**
 * 🌐 SERVIÇO DE API
 * 
 * Cliente HTTP para comunicação com backend.
 * Configurado para Next.js com fetch nativo.
 */

import CONFIG from '../../project-core/config';

// Tipos de resposta da API
type ApiResponse<T> = {
  data?: T;
  error?: string;
  success: boolean;
};

// Configuração base
const API_BASE_URL = CONFIG.API?.BASE_URL || '/api';

/**
 * Faz requisição GET
 */
export async function get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  return fetchApi<T>(endpoint, { ...options, method: 'GET' });
}

/**
 * Faz requisição POST
 */
export async function post<T>(endpoint: string, body: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
  return fetchApi<T>(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  });
}

/**
 * Faz requisição PUT
 */
export async function put<T>(endpoint: string, body: unknown, options?: RequestInit): Promise<ApiResponse<T>> {
  return fetchApi<T>(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

/**
 * Faz requisição DELETE
 */
export async function del<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  return fetchApi<T>(endpoint, { ...options, method: 'DELETE' });
}

// Alias para compatibilidade
export { del as delete_ };

/**
 * Função base para fetch
 */
async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // Adiciona token de auth se existir
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem(CONFIG.AUTH?.TOKEN_KEY || 'ai_kids_labs_token');
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    // Parse da resposta
    let data: unknown;
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      return {
        success: false,
        error: (data as { message?: string })?.message || `Erro ${response.status}`,
      };
    }

    return {
      success: true,
      data: data as T,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro de conexão',
    };
  }
}

/**
 * Serviços específicos do domínio
 */
export const api = {
  get,
  post,
  put,
  delete: del,
};

export default api;
