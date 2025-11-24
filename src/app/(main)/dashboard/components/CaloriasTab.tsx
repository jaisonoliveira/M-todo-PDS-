'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Camera, Lock, Upload, Zap } from 'lucide-react';

export default function CaloriasTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
          Análise de Calorias
        </h2>
        <p className="text-gray-400">
          Tire uma foto do seu prato e descubra as calorias
        </p>
      </div>

      {/* Preview Banner */}
      <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border-[#D4AF37]/30 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Prévia: 2 Análises Gratuitas</h3>
            <p className="text-gray-300">Experimente nossa tecnologia de análise de calorias</p>
          </div>
          <Badge className="bg-[#D4AF37] text-black font-bold text-lg px-4 py-2">
            2 análises restantes
          </Badge>
        </div>
      </Card>

      {/* Upload Area */}
      <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50 p-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="w-24 h-24 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
            <Camera className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Tire uma Foto do Seu Prato</h3>
            <p className="text-gray-400 max-w-md">
              Nossa IA analisará automaticamente as calorias e nutrientes da sua refeição
            </p>
          </div>
          <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
            <Upload className="w-5 h-5 mr-2" />
            Enviar Foto
          </Button>
        </div>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-4">
          <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
            <Zap className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h3 className="text-xl font-bold text-white">Análise Instantânea</h3>
          <p className="text-gray-400">
            Resultados em segundos com precisão de IA avançada
          </p>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-4">
          <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
            <Camera className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h3 className="text-xl font-bold text-white">Qualquer Refeição</h3>
          <p className="text-gray-400">
            Café, almoço, jantar ou lanches - analisamos tudo
          </p>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-4">
          <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
            <Zap className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h3 className="text-xl font-bold text-white">Tempo de Cardio</h3>
          <p className="text-gray-400">
            Descubra quanto exercício precisa para queimar as calorias
          </p>
        </Card>
      </div>

      {/* Premium CTA */}
      <Card className="bg-gradient-to-r from-black via-[#D4AF37]/20 to-black border-[#D4AF37] p-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Lock className="w-6 h-6 text-[#D4AF37]" />
          <h3 className="text-2xl font-bold text-white">
            Análises Ilimitadas com Premium
          </h3>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Assine o plano Premium e tenha análises ilimitadas de calorias, 
          histórico completo e recomendações personalizadas de nutrição.
        </p>
        <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg px-8">
          Assinar por R$ 29,90/mês
        </Button>
      </Card>
    </div>
  );
}
