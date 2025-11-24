'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Settings, Video, Upload, Trash2, Edit, Save, FileText, BookOpen } from 'lucide-react';

export default function GerenciarTab() {
  const [videoBoasVindas, setVideoBoasVindas] = useState('');
  const [videosTreino, setVideosTreino] = useState<Array<{id: number, titulo: string, url: string, dia: string}>>([]);
  const [videosDicas, setVideosDicas] = useState<Array<{id: number, titulo: string, url: string, categoria: string}>>([]);
  const [videosComunidade, setVideosComunidade] = useState<Array<{id: number, titulo: string, url: string, topico: string}>>([]);
  const [ebooksTreino, setEbooksTreino] = useState<Array<{id: number, titulo: string, url: string, descricao: string}>>([]);
  const [ebooksDicas, setEbooksDicas] = useState<Array<{id: number, titulo: string, url: string, descricao: string}>>([]);
  const [ebooksComunidade, setEbooksComunidade] = useState<Array<{id: number, titulo: string, url: string, descricao: string}>>([]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
          Gerenciar Conteúdo
        </h2>
        <p className="text-gray-400">
          Painel do criador - Adicione e gerencie vídeos, eBooks e conteúdos para cada segmento
        </p>
      </div>

      {/* Admin Badge */}
      <Card className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border-[#D4AF37]/30 p-4">
        <div className="flex items-center gap-3">
          <Settings className="w-6 h-6 text-[#D4AF37]" />
          <div>
            <h3 className="font-bold text-white">Modo Administrador</h3>
            <p className="text-sm text-gray-400">Você está gerenciando o conteúdo da plataforma - Atualize mensalmente</p>
          </div>
        </div>
      </Card>

      {/* Vídeo de Boas-Vindas */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/50 p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Video className="w-6 h-6 text-[#D4AF37]" />
          <h3 className="text-xl font-bold text-white">Vídeo de Boas-Vindas</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="video-boas-vindas" className="text-white">
              URL do Vídeo (YouTube, Vimeo, etc.)
            </Label>
            <Input
              id="video-boas-vindas"
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoBoasVindas}
              onChange={(e) => setVideoBoasVindas(e.target.value)}
              className="bg-black/50 border-gray-700 text-white"
            />
          </div>

          {videoBoasVindas && (
            <div className="bg-black/50 rounded-lg p-4 border border-[#D4AF37]/30">
              <p className="text-sm text-gray-400 mb-2">Preview:</p>
              <p className="text-white font-mono text-sm break-all">{videoBoasVindas}</p>
            </div>
          )}

          <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
            <Save className="w-4 h-4 mr-2" />
            Salvar Vídeo de Boas-Vindas
          </Button>
        </div>
      </Card>

      {/* SEÇÃO TREINOS */}
      <div className="space-y-6 border-t-2 border-[#D4AF37]/30 pt-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#D4AF37]">📋 SEÇÃO TREINOS</h3>
          <p className="text-gray-400 text-sm">Gerencie vídeos e eBooks de treinos</p>
        </div>

        {/* Vídeos de Treino */}
        <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Video className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-bold text-white">Vídeos de Treinos</h3>
            </div>
            <Badge className="bg-[#D4AF37] text-black">
              {videosTreino.length} vídeos
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Título do Treino</Label>
                <Input
                  placeholder="Ex: Treino de Peito - Segunda"
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Dia da Semana</Label>
                <Input
                  placeholder="Ex: Segunda-feira"
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white">URL do Vídeo</Label>
              <Input
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
              <Upload className="w-4 h-4 mr-2" />
              Adicionar Vídeo de Treino
            </Button>
          </div>

          {videosTreino.length > 0 && (
            <div className="space-y-3 mt-6">
              <h4 className="font-bold text-white">Vídeos Cadastrados:</h4>
              {videosTreino.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-gray-800"
                >
                  <div>
                    <p className="font-bold text-white">{video.titulo}</p>
                    <p className="text-sm text-gray-400">{video.dia}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* eBooks de Treino */}
        <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-bold text-white">eBooks de Treinos (PDF)</h3>
            </div>
            <Badge className="bg-[#D4AF37] text-black">
              {ebooksTreino.length} eBooks
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white">Título do eBook</Label>
              <Input
                placeholder="Ex: Guia Completo de Treino - Mês de Janeiro"
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">URL do PDF</Label>
              <Input
                type="url"
                placeholder="https://drive.google.com/file/d/... ou link direto do PDF"
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Descrição</Label>
              <Textarea
                placeholder="Descreva o conteúdo do eBook..."
                className="bg-black/50 border-gray-700 text-white min-h-[80px]"
              />
            </div>

            <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
              <Upload className="w-4 h-4 mr-2" />
              Adicionar eBook de Treino
            </Button>
          </div>

          {ebooksTreino.length > 0 && (
            <div className="space-y-3 mt-6">
              <h4 className="font-bold text-white">eBooks Cadastrados:</h4>
              {ebooksTreino.map((ebook) => (
                <div
                  key={ebook.id}
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-gray-800"
                >
                  <div>
                    <p className="font-bold text-white">{ebook.titulo}</p>
                    <p className="text-sm text-gray-400">{ebook.descricao}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* SEÇÃO DICAS DE SEDUÇÃO */}
      <div className="space-y-6 border-t-2 border-[#D4AF37]/30 pt-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#D4AF37]">💡 SEÇÃO DICAS DE SEDUÇÃO</h3>
          <p className="text-gray-400 text-sm">Gerencie vídeos e eBooks de dicas</p>
        </div>

        {/* Vídeos de Dicas */}
        <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Video className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-bold text-white">Vídeos de Dicas</h3>
            </div>
            <Badge className="bg-[#D4AF37] text-black">
              {videosDicas.length} vídeos
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Título da Dica</Label>
                <Input
                  placeholder="Ex: O Poder do Contato Visual"
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Categoria</Label>
                <Input
                  placeholder="Ex: Comunicação"
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white">URL do Vídeo</Label>
              <Input
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Descrição</Label>
              <Textarea
                placeholder="Descreva brevemente o conteúdo da dica..."
                className="bg-black/50 border-gray-700 text-white min-h-[100px]"
              />
            </div>

            <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
              <Upload className="w-4 h-4 mr-2" />
              Adicionar Vídeo de Dica
            </Button>
          </div>

          {videosDicas.length > 0 && (
            <div className="space-y-3 mt-6">
              <h4 className="font-bold text-white">Vídeos Cadastrados:</h4>
              {videosDicas.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-gray-800"
                >
                  <div>
                    <p className="font-bold text-white">{video.titulo}</p>
                    <p className="text-sm text-gray-400">{video.categoria}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* eBooks de Dicas */}
        <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-bold text-white">eBooks de Dicas (PDF)</h3>
            </div>
            <Badge className="bg-[#D4AF37] text-black">
              {ebooksDicas.length} eBooks
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white">Título do eBook</Label>
              <Input
                placeholder="Ex: Guia de Sedução Avançada - Janeiro"
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">URL do PDF</Label>
              <Input
                type="url"
                placeholder="https://drive.google.com/file/d/... ou link direto do PDF"
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Descrição</Label>
              <Textarea
                placeholder="Descreva o conteúdo do eBook..."
                className="bg-black/50 border-gray-700 text-white min-h-[80px]"
              />
            </div>

            <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
              <Upload className="w-4 h-4 mr-2" />
              Adicionar eBook de Dicas
            </Button>
          </div>

          {ebooksDicas.length > 0 && (
            <div className="space-y-3 mt-6">
              <h4 className="font-bold text-white">eBooks Cadastrados:</h4>
              {ebooksDicas.map((ebook) => (
                <div
                  key={ebook.id}
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-gray-800"
                >
                  <div>
                    <p className="font-bold text-white">{ebook.titulo}</p>
                    <p className="text-sm text-gray-400">{ebook.descricao}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* SEÇÃO COMUNIDADE */}
      <div className="space-y-6 border-t-2 border-[#D4AF37]/30 pt-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#D4AF37]">👥 SEÇÃO COMUNIDADE</h3>
          <p className="text-gray-400 text-sm">Gerencie vídeos e eBooks da comunidade</p>
        </div>

        {/* Vídeos de Comunidade */}
        <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Video className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-bold text-white">Vídeos da Comunidade</h3>
            </div>
            <Badge className="bg-[#D4AF37] text-black">
              {videosComunidade.length} vídeos
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Título do Vídeo</Label>
                <Input
                  placeholder="Ex: Depoimento de Transformação"
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Tópico</Label>
                <Input
                  placeholder="Ex: Depoimentos"
                  className="bg-black/50 border-gray-700 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-white">URL do Vídeo</Label>
              <Input
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
              <Upload className="w-4 h-4 mr-2" />
              Adicionar Vídeo da Comunidade
            </Button>
          </div>

          {videosComunidade.length > 0 && (
            <div className="space-y-3 mt-6">
              <h4 className="font-bold text-white">Vídeos Cadastrados:</h4>
              {videosComunidade.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-gray-800"
                >
                  <div>
                    <p className="font-bold text-white">{video.titulo}</p>
                    <p className="text-sm text-gray-400">{video.topico}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* eBooks de Comunidade */}
        <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/50 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-bold text-white">eBooks da Comunidade (PDF)</h3>
            </div>
            <Badge className="bg-[#D4AF37] text-black">
              {ebooksComunidade.length} eBooks
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white">Título do eBook</Label>
              <Input
                placeholder="Ex: Histórias de Sucesso - Janeiro"
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">URL do PDF</Label>
              <Input
                type="url"
                placeholder="https://drive.google.com/file/d/... ou link direto do PDF"
                className="bg-black/50 border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Descrição</Label>
              <Textarea
                placeholder="Descreva o conteúdo do eBook..."
                className="bg-black/50 border-gray-700 text-white min-h-[80px]"
              />
            </div>

            <Button className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-bold">
              <Upload className="w-4 h-4 mr-2" />
              Adicionar eBook da Comunidade
            </Button>
          </div>

          {ebooksComunidade.length > 0 && (
            <div className="space-y-3 mt-6">
              <h4 className="font-bold text-white">eBooks Cadastrados:</h4>
              {ebooksComunidade.map((ebook) => (
                <div
                  key={ebook.id}
                  className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-gray-800"
                >
                  <div>
                    <p className="font-bold text-white">{ebook.titulo}</p>
                    <p className="text-sm text-gray-400">{ebook.descricao}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500/30 text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Instruções */}
      <Card className="bg-gradient-to-r from-black via-[#D4AF37]/20 to-black border-[#D4AF37] p-6 space-y-3">
        <h3 className="text-lg font-bold text-white">📌 Instruções de Uso</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• <strong>Vídeos:</strong> Cole a URL completa (YouTube, Vimeo, etc.)</li>
          <li>• <strong>PDFs:</strong> Use links diretos ou Google Drive/Dropbox públicos</li>
          <li>• <strong>Atualização Mensal:</strong> Atualize o conteúdo todo mês para manter os usuários engajados</li>
          <li>• <strong>Organização:</strong> Cada seção (Treinos, Dicas, Comunidade) tem vídeos e eBooks separados</li>
          <li>• <strong>Edição:</strong> Use o botão de editar para modificar conteúdos existentes</li>
          <li>• <strong>Exclusão:</strong> Use o botão de lixeira para remover conteúdos antigos</li>
        </ul>
      </Card>

      {/* Dicas de Profissionalização */}
      <Card className="bg-gradient-to-r from-purple-900/20 via-[#D4AF37]/20 to-purple-900/20 border-purple-500/30 p-6 space-y-3">
        <h3 className="text-lg font-bold text-white">✨ Dicas para Profissionalizar o App</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• <strong>Consistência:</strong> Mantenha um cronograma regular de atualizações (ex: todo dia 1º do mês)</li>
          <li>• <strong>Qualidade:</strong> Priorize conteúdo de alta qualidade sobre quantidade</li>
          <li>• <strong>Engajamento:</strong> Responda comentários e feedbacks na seção Comunidade</li>
          <li>• <strong>Variedade:</strong> Alterne entre diferentes tipos de conteúdo (vídeos curtos, longos, PDFs detalhados)</li>
          <li>• <strong>Exclusividade:</strong> Ofereça conteúdo exclusivo que não está disponível em outros lugares</li>
          <li>• <strong>Notificações:</strong> Avise os usuários quando novo conteúdo for adicionado</li>
        </ul>
      </Card>
    </div>
  );
}
