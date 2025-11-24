'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Venda {
  id: string;
  produto: string;
  valor: number;
  quantidade: number;
  cliente: string;
  data: string;
  status: 'pendente' | 'concluida' | 'cancelada';
}

export default function VendasTab() {
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingVenda, setEditingVenda] = useState<Venda | null>(null);

  // Form states
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [cliente, setCliente] = useState('');
  const [data, setData] = useState('');
  const [status, setStatus] = useState<'pendente' | 'concluida' | 'cancelada'>('pendente');

  useEffect(() => {
    fetchVendas();
  }, []);

  const fetchVendas = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('vendas')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVendas(data || []);
    } catch (error: any) {
      toast.error('Erro ao carregar vendas: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setProduto('');
    setValor('');
    setQuantidade('');
    setCliente('');
    setData('');
    setStatus('pendente');
    setEditingVenda(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const vendaData = {
        user_id: user.id,
        produto,
        valor: parseFloat(valor),
        quantidade: parseInt(quantidade),
        cliente,
        data,
        status,
      };

      if (editingVenda) {
        const { error } = await supabase
          .from('vendas')
          .update(vendaData)
          .eq('id', editingVenda.id);

        if (error) throw error;
        toast.success('Venda atualizada com sucesso!');
      } else {
        const { error } = await supabase
          .from('vendas')
          .insert([vendaData]);

        if (error) throw error;
        toast.success('Venda criada com sucesso!');
      }

      setDialogOpen(false);
      resetForm();
      fetchVendas();
    } catch (error: any) {
      toast.error('Erro ao salvar venda: ' + error.message);
    }
  };

  const handleEdit = (venda: Venda) => {
    setEditingVenda(venda);
    setProduto(venda.produto);
    setValor(venda.valor.toString());
    setQuantidade(venda.quantidade.toString());
    setCliente(venda.cliente);
    setData(venda.data);
    setStatus(venda.status);
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta venda?')) return;

    try {
      const { error } = await supabase
        .from('vendas')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Venda excluída com sucesso!');
      fetchVendas();
    } catch (error: any) {
      toast.error('Erro ao excluir venda: ' + error.message);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pendente':
        return <Badge className="bg-yellow-600">Pendente</Badge>;
      case 'concluida':
        return <Badge className="bg-green-600">Concluída</Badge>;
      case 'cancelada':
        return <Badge className="bg-red-600">Cancelada</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
            Vendas
          </h2>
          <p className="text-gray-400">Gerencie suas vendas</p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                resetForm();
                setDialogOpen(true);
              }}
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:opacity-90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nova Venda
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-black border-[#D4AF37]/20">
            <DialogHeader>
              <DialogTitle className="text-white">
                {editingVenda ? 'Editar Venda' : 'Nova Venda'}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Preencha os dados da venda
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="produto" className="text-white">Produto</Label>
                  <Input
                    id="produto"
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    placeholder="Nome do produto"
                    required
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor" className="text-white">Valor Unitário</Label>
                  <Input
                    id="valor"
                    type="number"
                    step="0.01"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="0.00"
                    required
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantidade" className="text-white">Quantidade</Label>
                  <Input
                    id="quantidade"
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    placeholder="1"
                    required
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cliente" className="text-white">Cliente</Label>
                  <Input
                    id="cliente"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                    placeholder="Nome do cliente"
                    required
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="data" className="text-white">Data</Label>
                  <Input
                    id="data"
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status" className="text-white">Status</Label>
                  <Select value={status} onValueChange={(value: any) => setStatus(value)}>
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      <SelectItem value="pendente">Pendente</SelectItem>
                      <SelectItem value="concluida">Concluída</SelectItem>
                      <SelectItem value="cancelada">Cancelada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                  className="border-gray-700 text-white hover:bg-gray-800"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:opacity-90"
                >
                  {editingVenda ? 'Atualizar' : 'Criar'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="bg-black/50 border-[#D4AF37]/20">
        <CardHeader>
          <CardTitle className="text-white">Lista de Vendas</CardTitle>
          <CardDescription className="text-gray-400">
            Todas as vendas registradas
          </CardDescription>
        </CardHeader>
        <CardContent>
          {vendas.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Nenhuma venda encontrada</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-400">Produto</TableHead>
                  <TableHead className="text-gray-400">Cliente</TableHead>
                  <TableHead className="text-gray-400">Valor</TableHead>
                  <TableHead className="text-gray-400">Qtd</TableHead>
                  <TableHead className="text-gray-400">Total</TableHead>
                  <TableHead className="text-gray-400">Data</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vendas.map((venda) => (
                  <TableRow key={venda.id} className="border-gray-700">
                    <TableCell className="text-white">{venda.produto}</TableCell>
                    <TableCell className="text-white">{venda.cliente}</TableCell>
                    <TableCell className="text-white">R$ {venda.valor.toFixed(2)}</TableCell>
                    <TableCell className="text-white">{venda.quantidade}</TableCell>
                    <TableCell className="text-white">
                      R$ {(venda.valor * venda.quantidade).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-white">
                      {new Date(venda.data).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell>{getStatusBadge(venda.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEdit(venda)}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(venda.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}