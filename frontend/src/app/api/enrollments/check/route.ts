import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createClient } from '@supabase/supabase-js';

// Client Supabase com SERVICE ROLE KEY (bypass RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET /api/enrollments/check?courseSlug=xxx - Verificar se está matriculado
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const userEmail = session.user.email;
    const { searchParams } = new URL(request.url);
    const courseSlug = searchParams.get('courseSlug');

    if (!courseSlug) {
      return NextResponse.json({ error: 'courseSlug é obrigatório' }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('enrollments')
      .select('id')
      .eq('user_email', userEmail)
      .eq('course_slug', courseSlug)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = nenhum resultado encontrado
      console.error('Erro ao verificar matrícula:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ enrolled: !!data });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
