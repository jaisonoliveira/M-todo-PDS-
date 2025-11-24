'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dumbbell, Camera, BookOpen, Lightbulb, Users, Gift, Bell, User, Settings } from 'lucide-react';
import TreinosTab from './components/TreinosTab';
import CaloriasTab from './components/CaloriasTab';
import EbookTab from './components/EbookTab';
import DicasTab from './components/DicasTab';
import ComunidadeTab from './components/ComunidadeTab';
import IndicacoesTab from './components/IndicacoesTab';
import GerenciarTab from './components/GerenciarTab';
import { Button } from '@/components/ui/button';

// Componente SVG da Coroa Dourada
const CrownIcon = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Base da coroa */}
    <path 
      d="M8 48 L12 28 L20 36 L32 20 L44 36 L52 28 L56 48 Z" 
      fill="url(#goldGradient)"
      stroke="#B8860B"
      strokeWidth="1.5"
    />
    
    {/* Pontas da coroa */}
    <circle cx="12" cy="28" r="3" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
    <circle cx="32" cy="20" r="4" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
    <circle cx="52" cy="28" r="3" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
    
    {/* Joias decorativas */}
    <circle cx="20" cy="36" r="2.5" fill="#FF0000" opacity="0.8" />
    <circle cx="44" cy="36" r="2.5" fill="#FF0000" opacity="0.8" />
    <circle cx="32" cy="32" r="3" fill="#FF0000" opacity="0.9" />
    
    {/* Brilhos */}
    <path d="M32 22 L33 24 L31 24 Z" fill="white" opacity="0.6" />
    <path d="M12 30 L13 31 L11 31 Z" fill="white" opacity="0.5" />
    <path d="M52 30 L53 31 L51 31 Z" fill="white" opacity="0.5" />
  </svg>
);

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('treinos');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-[#D4AF37]/10 to-black border-b border-[#D4AF37]/20 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CrownIcon />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
                MÉTODO PDS
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-[#D4AF37]">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#D4AF37]">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="bg-black/50 backdrop-blur-sm border-b border-[#D4AF37]/20 sticky top-[73px] z-40">
          <div className="container mx-auto px-2 sm:px-4">
            <TabsList className="w-full bg-transparent border-none grid grid-cols-7 gap-1 sm:gap-2 py-2 sm:py-4">
              <TabsTrigger 
                value="treinos" 
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base"
              >
                <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Treinos</span>
              </TabsTrigger>
              <TabsTrigger 
                value="calorias" 
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base"
              >
                <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Calorias</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ebook" 
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Ebook</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dicas" 
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base"
              >
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Dicas</span>
              </TabsTrigger>
              <TabsTrigger 
                value="comunidade" 
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Comunidade</span>
              </TabsTrigger>
              <TabsTrigger 
                value="indicacoes" 
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base"
              >
                <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Indique</span>
              </TabsTrigger>
              <TabsTrigger 
                value="gerenciar" 
                className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-base"
              >
                <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Gerenciar</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="container mx-auto px-4 py-6">
          <TabsContent value="treinos" className="mt-0">
            <TreinosTab />
          </TabsContent>
          <TabsContent value="calorias" className="mt-0">
            <CaloriasTab />
          </TabsContent>
          <TabsContent value="ebook" className="mt-0">
            <EbookTab />
          </TabsContent>
          <TabsContent value="dicas" className="mt-0">
            <DicasTab />
          </TabsContent>
          <TabsContent value="comunidade" className="mt-0">
            <ComunidadeTab />
          </TabsContent>
          <TabsContent value="indicacoes" className="mt-0">
            <IndicacoesTab />
          </TabsContent>
          <TabsContent value="gerenciar" className="mt-0">
            <GerenciarTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
