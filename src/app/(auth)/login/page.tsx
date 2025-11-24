'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Crown, Lock, User } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar autenticação (Supabase)
    localStorage.setItem('pds_logged_in', 'true');
    
    // Verificar se já assistiu o vídeo de boas-vindas
    const hasWatchedWelcome = localStorage.getItem('pds_watched_welcome');
    if (!hasWatchedWelcome) {
      router.push('/welcome');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black to-black"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-16 h-16 text-[#D4AF37]" />
          </div>
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
            MÉTODO PDS
          </h1>
          <p className="text-white/70">Bem-vindo de volta</p>
        </div>

        {/* Formulário de Login */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#D4AF37]/20">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white flex items-center gap-2">
              <User className="w-4 h-4" />
              Usuário
            </Label>
            <Input
              id="username"
              type="text"
              required
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              placeholder="@seunome"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Senha
            </Label>
            <Input
              id="password"
              type="password"
              required
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              placeholder="••••••••"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold py-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#D4AF37]/20"
          >
            ENTRAR NO MÉTODO PDS
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => router.push('/onboarding')}
              className="text-[#D4AF37] hover:text-[#F4D03F] text-sm transition-colors"
            >
              Ainda não tem conta? Cadastre-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
