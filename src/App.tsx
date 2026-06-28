/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Filter,
  Sparkles,
  Download,
  MessageCircle,
  Code2,
  Heart,
  ChevronRight,
  TrendingUp,
  Flame,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Users,
  Terminal,
  Compass,
  ArrowUpRight,
  HelpCircle,
  ListFilter
} from 'lucide-react';
import { ROBLOX_SCRIPTS } from './data';
import { RobloxScript } from './types';
import { ScriptCard } from './components/ScriptCard';
import { ScriptModal } from './components/ScriptModal';
import { ExecutorSection } from './components/ExecutorSection';
import { CreatorSection } from './components/CreatorSection';
import { Toast, ToastMessage } from './components/Toast';

export default function App() {
  // Tabs: 'scripts' | 'executors' | 'favorites'
  const [activeTab, setActiveTab] = useState<'scripts' | 'executors' | 'favorites'>('scripts');
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<string>('Todos');
  const [selectedKeyFilter, setSelectedKeyFilter] = useState<'all' | 'keyless' | 'hasKey'>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'all' | 'Working' | 'Updating' | 'Patched'>('all');
  const [sortBy, setSortBy] = useState<'views' | 'copies' | 'recent'>('views');

  // Favorites state loaded from localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mp_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal target script
  const [selectedScript, setSelectedScript] = useState<RobloxScript | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Custom Toast notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Simulated live stats
  const [onlineCount, setOnlineCount] = useState(2451);
  const [discordStatus, setDiscordStatus] = useState('Online');

  useEffect(() => {
    // Save favorites to storage when updated
    localStorage.setItem('mp_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    // Subtle simulation of online counter shifting to feel alive
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 9) - 4);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const addToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, text, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleFavorite = (scriptId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(scriptId);
      if (exists) {
        addToast('Removido dos favoritos!', 'info');
        return prev.filter((id) => id !== scriptId);
      } else {
        addToast('Adicionado aos favoritos!', 'success');
        return [...prev, scriptId];
      }
    });
  };

  const handleCopySuccess = (scriptTitle: string) => {
    addToast(`Código do ${scriptTitle} copiado com sucesso! Abra o seu executor e cole.`, 'success');
  };

  // Get all unique game names for filter menu
  const uniqueGames = useMemo(() => {
    const games = ROBLOX_SCRIPTS.map((s) => s.gameName);
    return ['Todos', ...Array.from(new Set(games))];
  }, []);

  // Filter & Sort Logic
  const processedScripts = useMemo(() => {
    let result = [...ROBLOX_SCRIPTS];

    // If on favorites tab, only keep favorites
    if (activeTab === 'favorites') {
      result = result.filter((s) => favorites.includes(s.id));
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.gameName.toLowerCase().includes(q) ||
          s.categories.some((cat) => cat.toLowerCase().includes(q))
      );
    }

    // Game name category filter
    if (selectedGame !== 'Todos') {
      result = result.filter((s) => s.gameName === selectedGame);
    }

    // Key requirement filter
    if (selectedKeyFilter === 'keyless') {
      result = result.filter((s) => !s.hasKey);
    } else if (selectedKeyFilter === 'hasKey') {
      result = result.filter((s) => s.hasKey);
    }

    // Status filter
    if (selectedStatusFilter !== 'all') {
      result = result.filter((s) => s.status === selectedStatusFilter);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'copies') return b.copies - a.copies;
      if (sortBy === 'recent') {
        return new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime();
      }
      return 0;
    });

    return result;
  }, [activeTab, searchQuery, selectedGame, selectedKeyFilter, selectedStatusFilter, sortBy, favorites]);

  const handleOpenDetails = (script: RobloxScript) => {
    setSelectedScript(script);
    setIsModalOpen(true);
  };

  const bannerText = useMemo(() => {
    if (activeTab === 'favorites') return 'Meus Scripts Salvos';
    if (activeTab === 'executors') return 'Executores Recomendados';
    return 'Explorar Scripts Roblox';
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-cyan-500 selection:text-zinc-950 flex flex-col relative overflow-x-hidden">
      
      {/* Background Neon Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Header Stat Ticker */}
      <div className="w-full bg-zinc-950 border-b border-zinc-900 text-xs font-mono py-2 px-4 flex justify-between items-center overflow-x-auto gap-4 scrollbar-none select-none z-30">
        <div className="flex items-center gap-6 whitespace-nowrap">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-zinc-500">Online:</span>
            <span className="text-cyan-400 font-bold">{onlineCount} jogadores</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-zinc-500">Scripts:</span>
            <span className="text-zinc-200 font-bold">{ROBLOX_SCRIPTS.length} registrados</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-zinc-500">Downloads:</span>
            <span className="text-zinc-200 font-bold">142K+</span>
          </div>
        </div>

        <div className="flex items-center gap-4 whitespace-nowrap text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Sistema Central:</span>
            <span className="text-emerald-400">ATIVO</span>
          </div>
          <span>&bull;</span>
          <span className="text-zinc-600">v1.2.0 Stable</span>
        </div>
      </div>
      {/* Main Navigation Header */}
      <header className="sticky top-0 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3.5 cursor-pointer group select-none" onClick={() => { setActiveTab('scripts'); setSearchQuery(''); }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 opacity-70 blur-md group-hover:opacity-100 transition duration-300" />
              <div className="relative w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-8 h-8 select-none" fillRule="evenodd">
                  <g transform="translate(50,50) rotate(-14) translate(-50,-50)">
                    <path d="M 12 12 L 88 12 L 88 88 L 12 88 Z M 38 38 L 38 62 L 62 62 L 62 38 Z" fill="url(#robloxHeaderGradient)" />
                  </g>
                  <defs>
                    <linearGradient id="robloxHeaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="font-display font-black text-xl text-white leading-none tracking-wider uppercase flex items-center">
                SCRIPTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-extrabold font-display ml-1.5">OFICIAL MP</span>
              </h1>
              <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono mt-1">PORTFÓLIO & EXECUÇÃO PREMIUM</p>
            </div>
          </div>

          {/* Tab Selector Links */}
          <nav className="flex items-center bg-zinc-900/60 border border-zinc-800 p-1.5 rounded-2xl">
            <button
              id="nav-tab-scripts"
              onClick={() => setActiveTab('scripts')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-colors ${
                activeTab === 'scripts'
                  ? 'bg-zinc-800 text-cyan-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-zinc-700/50'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Scripts Hub
            </button>
            <button
              id="nav-tab-favorites"
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                activeTab === 'favorites'
                  ? 'bg-zinc-800 text-rose-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-zinc-700/50'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${favorites.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              Favoritos ({favorites.length})
            </button>
            <button
              id="nav-tab-executors"
              onClick={() => setActiveTab('executors')}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                activeTab === 'executors'
                  ? 'bg-zinc-800 text-purple-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-zinc-700/50'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              Executores
            </button>
          </nav>
        </div>
      </header>

      {/* Banner / Hero Section */}
      <section className="relative overflow-hidden flex-shrink-0 select-none border-b border-zinc-900 bg-zinc-950">
        {/* Background Image with modern overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/roblox_script_banner_1782674633485.jpg" 
            alt="Roblox Scripts Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-bold font-mono shadow-[0_0_15px_rgba(34,211,238,0.15)] uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            Central de Exploit Oficial do MP v1.2
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-none uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SCRIPTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">OFICIAL MP</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-3xl mx-auto leading-relaxed font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              A melhor central de scripts otimizados e executores Roblox atualizados da internet. Copie códigos seguros, livres de vírus e super rápidos em apenas um clique e destrua nos servidores!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Main Workspace Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Scripts Catalogue Filter System View */}
        {(activeTab === 'scripts' || activeTab === 'favorites') && (
          <div className="space-y-8">
            
            {/* Filter Hub Toolbar */}
            <div className="glass-panel rounded-2xl p-5 border border-zinc-900 space-y-4 shadow-xl">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                
                {/* Search Inputs */}
                <div className="relative w-full lg:max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500" />
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Pesquise por Blox Fruits, Brookhaven, Redz Hub..."
                    className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-cyan-500 rounded-xl pl-11 pr-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors font-sans"
                  />
                  {searchQuery && (
                    <button
                      id="clear-search-btn"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
                    >
                      Limpar
                    </button>
                  )}
                </div>

                {/* Subcategory dropdown tools */}
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  
                  {/* Game select filter */}
                  <div className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
                    <Compass className="w-4 h-4 text-zinc-500" />
                    <select
                      id="game-filter"
                      value={selectedGame}
                      onChange={(e) => setSelectedGame(e.target.value)}
                      className="bg-transparent text-xs font-semibold text-zinc-300 outline-none pr-1 cursor-pointer"
                    >
                      {uniqueGames.map((game) => (
                        <option key={game} value={game}>
                          Jogo: {game}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Key requirement selector */}
                  <div className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
                    <ListFilter className="w-4 h-4 text-zinc-500" />
                    <select
                      id="key-requirement-filter"
                      value={selectedKeyFilter}
                      onChange={(e) => setSelectedKeyFilter(e.target.value as any)}
                      className="bg-transparent text-xs font-semibold text-zinc-300 outline-none pr-1 cursor-pointer"
                    >
                      <option value="all">Sistemas de Key: Todos</option>
                      <option value="keyless">Sem Key (Keyless)</option>
                      <option value="hasKey">Necessita de Key</option>
                    </select>
                  </div>

                  {/* Status selector */}
                  <div className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
                    <RefreshCw className="w-4 h-4 text-zinc-500" />
                    <select
                      id="status-filter"
                      value={selectedStatusFilter}
                      onChange={(e) => setSelectedStatusFilter(e.target.value as any)}
                      className="bg-transparent text-xs font-semibold text-zinc-300 outline-none pr-1 cursor-pointer"
                    >
                      <option value="all">Status: Todos</option>
                      <option value="Working">Status: Funcionando</option>
                      <option value="Updating">Status: Atualizando</option>
                      <option value="Patched">Status: Patched</option>
                    </select>
                  </div>

                  {/* Sort selector */}
                  <div className="flex items-center gap-1.5 bg-zinc-950 px-3 py-1.5 rounded-xl border border-zinc-800">
                    <TrendingUp className="w-4 h-4 text-zinc-500" />
                    <select
                      id="sort-selector"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-transparent text-xs font-semibold text-zinc-300 outline-none pr-1 cursor-pointer"
                    >
                      <option value="views">Mais Visualizados</option>
                      <option value="copies">Mais Copiados</option>
                      <option value="recent">Mais Recentes</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Catalog Grid */}
            {processedScripts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {processedScripts.map((script) => (
                    <ScriptCard
                      key={script.id}
                      script={script}
                      onOpenDetails={handleOpenDetails}
                      onCopySuccess={handleCopySuccess}
                      isFavorite={favorites.includes(script.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="glass-panel rounded-2xl p-16 text-center border border-zinc-900 max-w-lg mx-auto space-y-4">
                <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto text-zinc-500">
                  <Compass className="w-8 h-8 animate-pulse text-zinc-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-white">Nenhum script localizado</h3>
                  <p className="text-sm text-zinc-400 font-sans">
                    Não encontramos scripts com esses filtros ou buscas selecionadas. Tente redefinir sua pesquisa para ver mais resultados.
                  </p>
                </div>
                <button
                  id="reset-filters-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedGame('Todos');
                    setSelectedKeyFilter('all');
                    setSelectedStatusFilter('all');
                  }}
                  className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-bold rounded-xl transition-colors font-display"
                >
                  Limpar Todos os Filtros
                </button>
              </div>
            )}
          </div>
        )}

        {/* Executor Download Area */}
        {activeTab === 'executors' && <ExecutorSection />}

      </main>

      {/* Fast Help Panel Accordion bottom panel */}
      {activeTab === 'scripts' && (
        <section className="bg-zinc-950 border-t border-zinc-900 py-12 flex-shrink-0 mt-8 select-none">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-purple-400" /> Dúvidas Frequentes (FAQ)
            </h3>
            
            <div className="space-y-3.5 text-sm">
              <div className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-xl space-y-1">
                <h4 className="font-semibold text-zinc-200">Como eu injeto os scripts no Roblox?</h4>
                <p className="text-xs text-zinc-400">
                  Você precisa de um executor ativo (como Delta ou Arceus X) rodando no seu aparelho. Copie o script que fornecemos neste site, cole na aba do editor de código do executor dentro do jogo, e pressione 'Execute'.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-xl space-y-1">
                <h4 className="font-semibold text-zinc-200">Por que o Roblox detecta ou crasha meu executor?</h4>
                <p className="text-xs text-zinc-400">
                  O Roblox possui um sistema anti-cheat ativo (Hyperion no PC, Byfron em dispositivos móveis). Certifique-se de baixar sempre a versão atualizada do executor indicada no nosso site para evitar falhas ou detecções.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-xl space-y-1">
                <h4 className="font-semibold text-zinc-200">O que é um sistema de Key (Chave)?</h4>
                <p className="text-xs text-zinc-400">
                  Alguns desenvolvedores de scripts colocam um sistema de bloqueio por chave para monetizar o trabalho através de encurtadores de links (Key Systems). Fornecemos os links oficiais ao lado do script para que você possa desbloquear de forma segura.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Creator Profile Badge Section */}
      <CreatorSection />

      {/* Main Footer Brand */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-8 px-4 flex-shrink-0 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center">
              <span className="text-[10px] font-extrabold text-zinc-950">MP</span>
            </div>
            <span>SCRIPTS OFICIAL MP &copy; {new Date().getFullYear()}. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://discord.gg/scripts-oficial-mp" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">Discord</a>
            <a href="https://youtube.com/@scripts-oficial-mp" target="_blank" rel="noopener" className="hover:text-rose-400 transition-colors">YouTube</a>
            <a href="https://discord.gg/scripts-oficial-mp" target="_blank" rel="noopener" className="hover:text-purple-400 transition-colors">Suporte</a>
          </div>
        </div>
      </footer>

      {/* Overlays / Modals */}
      <ScriptModal
        script={selectedScript}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedScript(null);
        }}
        onCopySuccess={handleCopySuccess}
      />

      {/* Toast Alert stack */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
