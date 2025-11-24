'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Crown, Sparkles } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    username: '',
    password: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Salvar dados do usuário (implementar com backend/Supabase)
    localStorage.setItem('pds_visited', 'true');
    localStorage.setItem('pds_user', JSON.stringify(formData));
    router.push('/welcome');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Premium */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-12 h-12 text-[#D4AF37]" />
            <Sparkles className="w-6 h-6 text-[#D4AF37] animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
            MÉTODO PDS
          </h1>
          <p className="text-white/70 text-sm">O Poder da Sedução</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#D4AF37]/20">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Nome Completo</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">E-mail</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-white">WhatsApp</Label>
            <Input
              id="whatsapp"
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">Nome de Usuário</Label>
            <Input
              id="username"
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              placeholder="@seunome"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Senha</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender" className="text-white">Gênero</Label>
            <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Selecione seu gênero" />
              </SelectTrigger>
              <SelectContent className="bg-black border-[#D4AF37]/20">
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
                <SelectItem value="prefiro-nao-dizer">Prefiro não dizer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold py-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            COMEÇAR MINHA EVOLUÇÃO
          </Button>
        </form>

        <p className="text-center text-white/50 text-xs mt-6">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
        </p>
      </div>
    </div>
  );
}
