import { createBrowserClient } from '@supabase/ssr';

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Tipos do banco de dados
export type Database = {
  public: {
    Tables: {
      vendas: {
        Row: {
          id: string;
          user_id: string;
          produto: string;
          valor: number;
          quantidade: number;
          cliente: string;
          data: string;
          status: 'pendente' | 'concluida' | 'cancelada';
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['vendas']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['vendas']['Insert']>;
      };
      produtos: {
        Row: {
          id: string;
          user_id: string;
          nome: string;
          preco: number;
          estoque: number;
          descricao: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['produtos']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['produtos']['Insert']>;
      };
      clientes: {
        Row: {
          id: string;
          user_id: string;
          nome: string;
          email: string;
          telefone: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['clientes']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['clientes']['Insert']>;
      };
    };
  };
};