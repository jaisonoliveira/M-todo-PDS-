'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Lock, Sparkles } from 'lucide-react';

export default function DicasTab() {
  const dicas = [
    {
      id: 1,
      titulo: 'O Poder do Contato Visual',
      categoria: 'Comunicação',
      preview: true,
      conteudo: 'Manter contato visual demonstra confiança e interesse genuíno. Pratique olhar nos olhos durante conversas, mas sem ser intimidador.'
    },
    {
      id: 2,
      titulo: 'Linguagem Corporal Aberta',
      categoria: 'Postura',
      preview: true,
      conteudo: 'Mantenha uma postura aberta: ombros para trás, peito aberto e braços descruzados. Isso transmite confiança e receptividade.'
    },
    {
      id: 3,
      titulo: 'A Arte da Escuta Ativa',
      categoria: 'Comunicação',
      preview: true,
      conteudo: 'Ouça mais do que fala. Faça perguntas genuínas e demonstre interesse real no que a outra pessoa está dizendo.'
    },
    {
      id: 4,
      titulo: 'Tom de Voz e Ritmo',
      categoria: 'Comunicação',
      preview: false,
      conteudo: ''
    },
    {
      id: 5,
      titulo: 'Criando Conexão Emocional',
      categoria: 'Sedução',
      preview: false,
      conteudo: ''
    },
    {
      id: 6,
      titulo: 'O Timing Perfeito',
      categoria: 'Estratégia',
      preview: false,
      conteudo: ''
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
          Dicas de Sedução Diárias
        </h2>
        <p className="text-gray-400">
          Técnicas práticas de comunicação e persuasão
        </p>
      </div>

      {/* Preview Banner */}
      <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border-[#D4AF37]/30 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Prévia: 3 Dicas Gratuitas</h3>
            <p className="text-gray-300">Experimente nossas dicas de sedução e comunicação</p>
          </div>
          <Badge className="bg-[#D4AF37] text-black font-bold text-lg px-4 py-2">
            3 dicas disponíveis
          </Badge>
        </div>
      </Card>

      {/* Dicas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dicas.map((dica) => (
          <Card 
            key={dica.id}
            className={`${
              dica.preview 
                ? 'bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50' 
                : 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
            } p-6 space-y-4 relative`}
          >
            {/* Preview Badge */}
            {dica.preview && (
              <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black font-bold text-xs">
                PRÉVIA
              </Badge>
            )}

            {/* Lock Icon */}
            {!dica.preview && (
              <div className="absolute top-4 right-4">
                <Lock className="w-5 h-5 text-gray-500" />
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg ${
                  dica.preview ? 'bg-[#D4AF37]/20' : 'bg-gray-800'
                } flex items-center justify-center flex-shrink-0`}>
                  <Lightbulb className={`w-5 h-5 ${
                    dica.preview ? 'text-[#D4AF37]' : 'text-gray-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{dica.titulo}</h3>
                  <Badge variant="outline" className="border-[#D4AF37]/30 text-gray-300 text-xs">
                    {dica.categoria}
                  </Badge>
                </div>
              </div>

              {dica.preview ? (
                <p className="text-gray-300 text-sm leading-relaxed">
                  {dica.conteudo}
                </p>
              ) : (
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <Lock className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">
                    Conteúdo disponível no Premium
                  </p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-3 text-center">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h3 className="text-lg font-bold text-white">Dicas Diárias</h3>
          <p className="text-gray-400 text-sm">
            Novo conteúdo todos os dias para sua evolução constante
          </p>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-3 text-center">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto">
            <Lightbulb className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h3 className="text-lg font-bold text-white">Técnicas Práticas</h3>
          <p className="text-gray-400 text-sm">
            Aplique imediatamente no seu dia a dia
          </p>
        </Card>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-3 text-center">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h3 className="text-lg font-bold text-white">Resultados Reais</h3>
          <p className="text-gray-400 text-sm">
            Métodos comprovados e testados
          </p>
        </Card>
      </div>

      {/* Premium CTA */}
      <Card className="bg-gradient-to-r from-black via-[#D4AF37]/20 to-black border-[#D4AF37] p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Acesso Ilimitado às Dicas
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Desbloqueie todas as dicas de sedução, comunicação e persuasão. 
          Novo conteúdo exclusivo todos os dias para acelerar sua evolução.
        </p>
        <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg px-8">
          Assinar por R$ 29,90/mês
        </Button>
      </Card>
    </div>
  );
}
