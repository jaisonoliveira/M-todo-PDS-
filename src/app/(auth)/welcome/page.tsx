'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Crown, Play, Sparkles, Users, TrendingUp, Heart } from 'lucide-react';

export default function WelcomePage() {
  const router = useRouter();
  const [videoWatched, setVideoWatched] = useState(false);

  const handleContinue = () => {
    localStorage.setItem('pds_watched_welcome', 'true');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-black to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-16 h-16 text-[#D4AF37]" />
            <Sparkles className="w-8 h-8 text-[#D4AF37] animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
            BEM-VINDO AO MÉTODO PDS
          </h1>
          <p className="text-white/70 text-lg">Prepare-se para sua transformação</p>
        </div>

        {/* Vídeo de Boas-Vindas */}
        <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#D4AF37]/20 mb-8">
          <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center mb-6 border border-white/10 relative overflow-hidden group cursor-pointer">
            {/* Placeholder do vídeo - substituir por iframe/video real */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent"></div>
            <div className="relative z-10 text-center">
              <Play className="w-20 h-20 text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-white/70">Clique para assistir o vídeo de boas-vindas</p>
            </div>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 p-4 rounded-xl border border-[#D4AF37]/10 text-center">
              <Users className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Comunidade Exclusiva</h3>
              <p className="text-white/60 text-sm">Conecte-se com pessoas do mesmo propósito</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-[#D4AF37]/10 text-center">
              <TrendingUp className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Evolução Diária</h3>
              <p className="text-white/60 text-sm">Treinos e desafios personalizados</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-[#D4AF37]/10 text-center">
              <Heart className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Transformação Real</h3>
              <p className="text-white/60 text-sm">Torne-se a melhor versão de si mesmo</p>
            </div>
          </div>

          <Button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold py-6 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#D4AF37]/20"
          >
            COMEÇAR MINHA EVOLUÇÃO
          </Button>
        </div>

        {/* Informações Adicionais */}
        <div className="text-center space-y-4">
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4">
            <p className="text-white/90 text-sm">
              🎁 <span className="font-semibold text-[#D4AF37]">7 DIAS GRÁTIS</span> para explorar todo o conteúdo
            </p>
          </div>
          <p className="text-white/50 text-xs">
            Após o período de teste, continue por apenas R$ 29,90/mês
          </p>
        </div>
      </div>
    </div>
  );
}
