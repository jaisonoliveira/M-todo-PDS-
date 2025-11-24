'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

export default function VideoBoasVindas() {
  const [mostrarVideo, setMostrarVideo] = useState(true);
  const [videoUrl] = useState(''); // URL será gerenciada pelo admin

  if (!mostrarVideo) return null;

  return (
    <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50 p-6 mb-6 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
        onClick={() => setMostrarVideo(false)}
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-white">
            Bem-vindo ao Método PDS! 🎉
          </h3>
          <p className="text-gray-300">
            Assista ao vídeo de boas-vindas e descubra como aproveitar ao máximo a plataforma
          </p>
        </div>

        {videoUrl ? (
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
            {/* Aqui será incorporado o vídeo real quando o admin adicionar */}
            <div className="text-center space-y-3">
              <Play className="w-16 h-16 text-[#D4AF37] mx-auto" />
              <p className="text-gray-400">Vídeo de boas-vindas</p>
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center border border-gray-800">
            <div className="text-center space-y-3 p-6">
              <Play className="w-16 h-16 text-gray-600 mx-auto" />
              <p className="text-gray-500">
                O administrador ainda não adicionou o vídeo de boas-vindas
              </p>
              <p className="text-sm text-gray-600">
                Vá para a aba "Gerenciar" para adicionar o vídeo
              </p>
            </div>
          </div>
        )}

        <div className="text-center">
          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
            <Play className="w-4 h-4 mr-2" />
            Assistir Vídeo
          </Button>
        </div>
      </div>
    </Card>
  );
}
