'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Lock, Download, Headphones, CheckCircle } from 'lucide-react';

export default function EbookTab() {
  const capitulos = [
    { id: 1, titulo: 'Introdução ao Método PDS', duracao: '15 min', preview: true },
    { id: 2, titulo: 'Fundamentos da Sedução', duracao: '22 min', preview: false },
    { id: 3, titulo: 'Comunicação Efetiva', duracao: '18 min', preview: false },
    { id: 4, titulo: 'Linguagem Corporal', duracao: '20 min', preview: false },
    { id: 5, titulo: 'Confiança e Autoestima', duracao: '25 min', preview: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
          Ebook & Audiobook
        </h2>
        <p className="text-gray-400">
          Método PDS completo em texto e áudio
        </p>
      </div>

      {/* Preview Banner */}
      <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border-[#D4AF37]/30 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Prévia: Primeiro Capítulo Grátis</h3>
            <p className="text-gray-300">Experimente o conteúdo completo do primeiro capítulo</p>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
            Assinar Premium
          </Button>
        </div>
      </Card>

      {/* Ebook Download */}
      <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Ebook Completo (PDF)</h3>
              <p className="text-gray-400">Método PDS - O Poder da Sedução</p>
            </div>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
            <Download className="w-4 h-4 mr-2" />
            Baixar PDF
          </Button>
        </div>
      </Card>

      {/* Audiobook Chapters */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <Headphones className="w-6 h-6 text-[#D4AF37]" />
          Audiobook - Capítulos
        </h3>
        
        <div className="space-y-3">
          {capitulos.map((capitulo) => (
            <Card 
              key={capitulo.id}
              className={`${
                capitulo.preview 
                  ? 'bg-gradient-to-r from-[#D4AF37]/10 to-black border-[#D4AF37]/50' 
                  : 'bg-gradient-to-r from-gray-900 to-black border-gray-800'
              } p-4`}
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-full ${
                    capitulo.preview ? 'bg-[#D4AF37]/20' : 'bg-gray-800'
                  } flex items-center justify-center`}>
                    {capitulo.preview ? (
                      <Headphones className="w-6 h-6 text-[#D4AF37]" />
                    ) : (
                      <Lock className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white">{capitulo.titulo}</h4>
                      {capitulo.preview && (
                        <Badge className="bg-[#D4AF37] text-black text-xs">PRÉVIA</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{capitulo.duracao}</p>
                  </div>
                </div>
                <Button 
                  className={`${
                    capitulo.preview 
                      ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-black' 
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                  }`}
                  disabled={!capitulo.preview}
                >
                  {capitulo.preview ? 'Ouvir Agora' : 'Bloqueado'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Desafios Diários */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
          Desafios Diários do Ebook
        </h3>
        <p className="text-gray-400">
          Complete os exercícios práticos baseados no conteúdo do livro e acompanhe sua evolução
        </p>
        <Button className="w-full bg-gray-800 hover:bg-gray-700 text-gray-400" disabled>
          <Lock className="w-4 h-4 mr-2" />
          Disponível no Premium
        </Button>
      </Card>

      {/* Premium CTA */}
      <Card className="bg-gradient-to-r from-black via-[#D4AF37]/20 to-black border-[#D4AF37] p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Desbloqueie Todo o Conteúdo
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Tenha acesso completo ao ebook, todos os capítulos do audiobook e 
          desafios diários para acelerar sua evolução pessoal.
        </p>
        <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg px-8">
          Assinar por R$ 29,90/mês
        </Button>
      </Card>
    </div>
  );
}
