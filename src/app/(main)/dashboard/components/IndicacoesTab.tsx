'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Users, Share2, Award, Sparkles, Copy } from 'lucide-react';

export default function IndicacoesTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
          Indique & Evolua
        </h2>
        <p className="text-gray-400">
          Convide amigos e ganhe recompensas exclusivas
        </p>
      </div>

      {/* Hero Card */}
      <Card className="bg-gradient-to-br from-[#D4AF37]/20 via-[#D4AF37]/10 to-black border-[#D4AF37] p-8 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto">
          <Gift className="w-10 h-10 text-[#D4AF37]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-white">
            Ganhe 1 Mês Grátis
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Para cada 3 amigos que assinarem o Premium através do seu link, 
            você ganha 1 mês de acesso gratuito!
          </p>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 text-center space-y-3">
          <Users className="w-8 h-8 text-[#D4AF37] mx-auto" />
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-gray-400">Amigos Indicados</p>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 text-center space-y-3">
          <Award className="w-8 h-8 text-[#D4AF37] mx-auto" />
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-gray-400">Conversões</p>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 text-center space-y-3">
          <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto" />
          <p className="text-4xl font-bold text-white">0</p>
          <p className="text-gray-400">Meses Ganhos</p>
        </Card>
      </div>

      {/* Referral Link */}
      <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50 p-6 space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Share2 className="w-6 h-6 text-[#D4AF37]" />
          Seu Link de Indicação
        </h3>
        <div className="flex gap-3">
          <div className="flex-1 bg-black/50 rounded-lg p-4 border border-gray-800">
            <p className="text-gray-300 font-mono text-sm break-all">
              https://metodopds.com/ref/SEU_CODIGO_AQUI
            </p>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
            <Copy className="w-4 h-4 mr-2" />
            Copiar
          </Button>
        </div>
      </Card>

      {/* Benefits */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Como Funciona</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D4AF37]">1</span>
            </div>
            <h4 className="text-lg font-bold text-white">Compartilhe seu Link</h4>
            <p className="text-gray-400">
              Envie seu link exclusivo para amigos que se interessam por evolução pessoal
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D4AF37]">2</span>
            </div>
            <h4 className="text-lg font-bold text-white">Amigos Assinam</h4>
            <p className="text-gray-400">
              Quando seus amigos assinarem o Premium, você acumula pontos
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D4AF37]">3</span>
            </div>
            <h4 className="text-lg font-bold text-white">Ganhe Recompensas</h4>
            <p className="text-gray-400">
              A cada 3 conversões, você ganha 1 mês de Premium totalmente grátis
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#D4AF37]">4</span>
            </div>
            <h4 className="text-lg font-bold text-white">Benefícios Ilimitados</h4>
            <p className="text-gray-400">
              Não há limite! Quanto mais indicar, mais meses grátis você acumula
            </p>
          </Card>
        </div>
      </div>

      {/* Bonus Tiers */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Award className="w-6 h-6 text-[#D4AF37]" />
          Níveis de Recompensa
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-[#D4AF37]/30">
            <div>
              <p className="font-bold text-white">Bronze</p>
              <p className="text-sm text-gray-400">3 conversões</p>
            </div>
            <Badge className="bg-[#CD7F32] text-white">1 mês grátis</Badge>
          </div>
          <div className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-[#D4AF37]/30">
            <div>
              <p className="font-bold text-white">Prata</p>
              <p className="text-sm text-gray-400">6 conversões</p>
            </div>
            <Badge className="bg-[#C0C0C0] text-black">2 meses grátis</Badge>
          </div>
          <div className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-[#D4AF37]">
            <div>
              <p className="font-bold text-white">Ouro</p>
              <p className="text-sm text-gray-400">10 conversões</p>
            </div>
            <Badge className="bg-[#D4AF37] text-black">4 meses grátis</Badge>
          </div>
        </div>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-black via-[#D4AF37]/20 to-black border-[#D4AF37] p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Comece a Indicar Agora
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Compartilhe o Método PDS com seus amigos e construa uma rede de evolução. 
          Todos ganham: seus amigos evoluem e você ganha acesso gratuito!
        </p>
        <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg px-8">
          <Share2 className="w-5 h-5 mr-2" />
          Compartilhar Agora
        </Button>
      </Card>
    </div>
  );
}
