'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, ShoppingCart, Package, Users, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

interface Stats {
  totalVendas: number;
  totalValor: number;
  totalProdutos: number;
  totalClientes: number;
}

export default function DashboardTab() {
  const [stats, setStats] = useState<Stats>({
    totalVendas: 0,
    totalValor: 0,
    totalProdutos: 0,
    totalClientes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Buscar vendas
      const { data: vendas, error: vendasError } = await supabase
        .from('vendas')
        .select('*')
        .eq('user_id', user.id);

      if (vendasError) throw vendasError;

      // Buscar produtos
      const { data: produtos, error: produtosError } = await supabase
        .from('produtos')
        .select('*')
        .eq('user_id', user.id);

      if (produtosError) throw produtosError;

      // Buscar clientes
      const { data: clientes, error: clientesError } = await supabase
        .from('clientes')
        .select('*')
        .eq('user_id', user.id);

      if (clientesError) throw clientesError;

      const totalVendas = vendas?.length || 0;
      const totalValor = vendas?.reduce((sum, venda) => sum + (venda.valor * venda.quantidade), 0) || 0;
      const totalProdutos = produtos?.length || 0;
      const totalClientes = clientes?.length || 0;

      setStats({
        totalVendas,
        totalValor,
        totalProdutos,
        totalClientes,
      });
    } catch (error: any) {
      toast.error('Erro ao carregar estatísticas: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4AF37]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent mb-2">
          Dashboard
        </h2>
        <p className="text-gray-400">Visão geral do seu negócio</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-black/50 border-[#D4AF37]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total de Vendas</CardTitle>
            <ShoppingCart className="h-4 w-4 text-[#D4AF37]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalVendas}</div>
            <p className="text-xs text-gray-400">vendas realizadas</p>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-[#D4AF37]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-[#D4AF37]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              R$ {stats.totalValor.toFixed(2)}
            </div>
            <p className="text-xs text-gray-400">valor total vendido</p>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-[#D4AF37]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Produtos</CardTitle>
            <Package className="h-4 w-4 text-[#D4AF37]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalProdutos}</div>
            <p className="text-xs text-gray-400">produtos cadastrados</p>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-[#D4AF37]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Clientes</CardTitle>
            <Users className="h-4 w-4 text-[#D4AF37]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalClientes}</div>
            <p className="text-xs text-gray-400">clientes registrados</p>
          </CardContent>
        </Card>
      </div>

      {/* Resumo Recente */}
      <Card className="bg-black/50 border-[#D4AF37]/20">
        <CardHeader>
          <CardTitle className="text-xl text-white">Resumo do Sistema</CardTitle>
          <CardDescription className="text-gray-400">
            Sistema de gerenciamento de vendas e treinamentos PDS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Status do Sistema:</span>
            <Badge className="bg-green-600 text-white">Ativo</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Banco de Dados:</span>
            <Badge className="bg-blue-600 text-white">Supabase</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Autenticação:</span>
            <Badge className="bg-purple-600 text-white">Supabase Auth</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}