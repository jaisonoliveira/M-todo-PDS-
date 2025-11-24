'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, MessageCircle, Trophy, TrendingUp, Lock, Heart, Share2 } from 'lucide-react';

export default function ComunidadeTab() {
  const posts = [
    {
      id: 1,
      usuario: 'Carlos M.',
      avatar: 'CM',
      tempo: '2h atrás',
      conteudo: 'Finalmente consegui aplicar a técnica do contato visual! Os resultados foram incríveis. Obrigado Método PDS! 🔥',
      likes: 24,
      comentarios: 8,
      preview: true
    },
    {
      id: 2,
      usuario: 'Pedro S.',
      avatar: 'PS',
      tempo: '5h atrás',
      conteudo: 'Semana 3 de treinos completa! A evolução está sendo incrível...',
      likes: 0,
      comentarios: 0,
      preview: false
    },
    {
      id: 3,
      usuario: 'Rafael L.',
      avatar: 'RL',
      tempo: '1d atrás',
      conteudo: 'Quem mais está no desafio de 30 dias? Vamos juntos! 💪',
      likes: 0,
      comentarios: 0,
      preview: false
    }
  ];

  const rankings = [
    { posicao: 1, nome: 'Lucas A.', pontos: 2450, badge: '🥇' },
    { posicao: 2, nome: 'Marcos V.', pontos: 2180, badge: '🥈' },
    { posicao: 3, nome: 'Felipe R.', pontos: 1920, badge: '🥉' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
          Comunidade PDS
        </h2>
        <p className="text-gray-400">
          Conecte-se com pessoas do mesmo propósito
        </p>
      </div>

      {/* Preview Banner */}
      <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border-[#D4AF37]/30 p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Prévia da Comunidade</h3>
            <p className="text-gray-300">Veja o que os membros estão compartilhando</p>
          </div>
          <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
            Assinar para Participar
          </Button>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50 p-6 text-center space-y-2">
          <Users className="w-8 h-8 text-[#D4AF37] mx-auto" />
          <p className="text-3xl font-bold text-white">1.2k+</p>
          <p className="text-gray-400">Membros Ativos</p>
        </Card>

        <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50 p-6 text-center space-y-2">
          <MessageCircle className="w-8 h-8 text-[#D4AF37] mx-auto" />
          <p className="text-3xl font-bold text-white">350+</p>
          <p className="text-gray-400">Posts Hoje</p>
        </Card>

        <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50 p-6 text-center space-y-2">
          <Trophy className="w-8 h-8 text-[#D4AF37] mx-auto" />
          <p className="text-3xl font-bold text-white">50+</p>
          <p className="text-gray-400">Desafios Ativos</p>
        </Card>
      </div>

      {/* Feed Preview */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
          Feed da Comunidade
        </h3>

        {posts.map((post) => (
          <Card 
            key={post.id}
            className={`${
              post.preview 
                ? 'bg-gradient-to-br from-[#D4AF37]/10 to-black border-[#D4AF37]/50' 
                : 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
            } p-6 space-y-4 relative`}
          >
            {post.preview && (
              <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black font-bold text-xs">
                PRÉVIA
              </Badge>
            )}

            {!post.preview && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center space-y-3">
                  <Lock className="w-12 h-12 text-gray-400 mx-auto" />
                  <p className="text-gray-300 font-semibold">Conteúdo Exclusivo Premium</p>
                  <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
                    Assinar Agora
                  </Button>
                </div>
              </div>
            )}

            <div className="flex items-start gap-4">
              <Avatar className="w-12 h-12 border-2 border-[#D4AF37]">
                <AvatarFallback className="bg-[#D4AF37]/20 text-[#D4AF37] font-bold">
                  {post.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-white">{post.usuario}</h4>
                  <span className="text-sm text-gray-500">{post.tempo}</span>
                </div>
                <p className="text-gray-300">{post.conteudo}</p>
              </div>
            </div>

            {post.preview && (
              <div className="flex items-center gap-6 pt-2 border-t border-gray-800">
                <button className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comentarios}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Rankings */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6 space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="w-6 h-6 text-[#D4AF37]" />
          Top Membros da Semana
        </h3>
        <div className="space-y-3">
          {rankings.map((rank) => (
            <div 
              key={rank.posicao}
              className="flex items-center justify-between p-3 bg-black/50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{rank.badge}</span>
                <div>
                  <p className="font-bold text-white">{rank.nome}</p>
                  <p className="text-sm text-gray-400">{rank.pontos} pontos</p>
                </div>
              </div>
              <Badge variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">
                #{rank.posicao}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Premium CTA */}
      <Card className="bg-gradient-to-r from-black via-[#D4AF37]/20 to-black border-[#D4AF37] p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          Faça Parte da Comunidade
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Conecte-se com milhares de pessoas no mesmo propósito, participe de desafios, 
          compartilhe suas conquistas e evolua junto com a comunidade PDS.
        </p>
        <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold text-lg px-8">
          Assinar por R$ 29,90/mês
        </Button>
      </Card>
    </div>
  );
}
