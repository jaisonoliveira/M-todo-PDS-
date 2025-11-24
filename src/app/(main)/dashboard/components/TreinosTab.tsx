'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Lock, Play } from 'lucide-react';
import VideoBoasVindas from './VideoBoasVindas';

export default function TreinosTab() {
  const treinos = [
    {
      id: 1,
      dia: 'Segunda-feira',
      musculo: 'Peito',
      nivel: 'Iniciante',
      duracao: '45 min',
      exercicios: 8,
      preview: true
    },
    {
      id: 2,
      dia: 'Terça-feira',
      musculo: 'Costas',
      nivel: 'Intermediário',
      duracao: '50 min',
      exercicios: 10,
      preview: false
    },
    {
      id: 3,
      dia: 'Quarta-feira',
      musculo: 'Pernas',
      nivel: 'Avançado',
      duracao: '60 min',
      exercicios: 12,
      preview: false
    },
    {
      id: 4,
      dia: 'Quinta-feira',
      musculo: 'Ombros',
      nivel: 'Iniciante',
      duracao: '40 min',
      exercicios: 7,
      preview: false
    },
    {
      id: 5,
      dia: 'Sexta-feira',
      musculo: 'Braços',
      nivel: 'Intermediário',
      duracao: '45 min',
      exercicios: 9,
      preview: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Vídeo de Boas-Vindas */}
      <VideoBoasVindas />

      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
          Treinos Diários
        </h2>
        <p className="text-gray-400">
          Um músculo por dia, evolução garantida
        </p>
      </div>

      {/* Preview Banner */}
      <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border-[#D4AF37]/30 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Prévia Gratuita Disponível</h3>
            <p className="text-gray-300">Experimente o treino de hoje e veja a qualidade do conteúdo</p>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
            Assinar Premium
          </Button>
        </div>
      </Card>

      {/* Treinos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treinos.map((treino) => (
          <Card 
            key={treino.id} 
            className={`bg-gradient-to-br ${
              treino.preview 
                ? 'from-[#D4AF37]/10 to-black border-[#D4AF37]/50' 
                : 'from-gray-900 to-black border-gray-800'
            } p-6 space-y-4 relative overflow-hidden`}
          >
            {/* Preview Badge */}
            {treino.preview && (
              <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black font-bold">
                PRÉVIA
              </Badge>
            )}

            {/* Lock Icon for Premium */}
            {!treino.preview && (
              <div className="absolute top-4 right-4">
                <Lock className="w-5 h-5 text-gray-500" />
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Dumbbell className={treino.preview ? 'text-[#D4AF37]' : 'text-gray-500'} />
                <h3 className="text-xl font-bold text-white">{treino.dia}</h3>
              </div>
              <p className="text-2xl font-bold text-[#D4AF37]">{treino.musculo}</p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="border-[#D4AF37]/30 text-gray-300">
                {treino.nivel}
              </Badge>
              <Badge variant="outline" className="border-[#D4AF37]/30 text-gray-300">
                {treino.duracao}
              </Badge>
              <Badge variant="outline" className="border-[#D4AF37]/30 text-gray-300">
                {treino.exercicios} exercícios
              </Badge>
            </div>

            <Button 
              className={`w-full ${
                treino.preview 
                  ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-black' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-400'
              }`}
              disabled={!treino.preview}
            >
              {treino.preview ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Iniciar Treino
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Assine para Desbloquear
                </>
              )}
            </Button>
          </Card>
        ))}
      </div>

      {/* CTA Premium */}
      <Card className="bg-gradient-to-r from-black via-[#D4AF37]/20 to-black border-[#D4AF37] p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Desbloqueie Todos os Treinos
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Tenha acesso completo a treinos personalizados para cada dia da semana, 
          com progressão de níveis e acompanhamento de evolução.
        </p>
        <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg px-8">
          Assinar por R$ 29,90/mês
        </Button>
      </Card>
    </div>
  );
}
