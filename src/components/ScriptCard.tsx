/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Copy, Eye, Check, AlertTriangle, RefreshCw, Key, Heart } from 'lucide-react';
import { RobloxScript } from '../types';

interface ScriptCardProps {
  script: RobloxScript;
  onOpenDetails: (script: RobloxScript) => void;
  onCopySuccess: (scriptTitle: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (scriptId: string) => void;
}

export const ScriptCard: React.FC<ScriptCardProps> = ({
  script,
  onOpenDetails,
  onCopySuccess,
  isFavorite,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(script.code);
    setCopied(true);
    onCopySuccess(script.title);
    setTimeout(() => setCopied(false), 2000);
  };

  const statusColors = {
    Working: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
    Patched: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20' },
    Updating: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  };

  return (
    <motion.div
      id={`script-card-${script.id}`}
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-panel glass-panel-hover rounded-xl overflow-hidden flex flex-col h-full relative group"
    >
      {/* Thumbnail and Tags */}
      <div className="relative h-44 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
        <img
          src={script.imageUrl}
          alt={script.title}
          className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Favorite Button */}
        <button
          id={`fav-btn-${script.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(script.id);
          }}
          className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800/80 text-rose-500 hover:text-rose-400 transition-colors"
          title={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
        </button>

        {/* Left Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5">
          <span className={`text-xs px-2.5 py-1 rounded-md font-mono border flex items-center gap-1.5 backdrop-blur-md ${statusColors[script.status].bg} ${statusColors[script.status].text} ${statusColors[script.status].border}`}>
            {script.status === 'Working' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
            {script.status === 'Updating' && <RefreshCw className="w-3 h-3 animate-spin" />}
            {script.status === 'Patched' && <AlertTriangle className="w-3 h-3" />}
            {script.status === 'Working' ? 'Funcionando' : script.status === 'Updating' ? 'Atualizando' : 'Patched'}
          </span>

          <span className={`text-xs px-2.5 py-1 rounded-md font-mono border flex items-center gap-1.5 backdrop-blur-md ${script.hasKey ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'}`}>
            <Key className="w-3 h-3" />
            {script.hasKey ? 'Com Key' : 'Sem Key (Keyless)'}
          </span>
        </div>

        {/* Game Badge */}
        <span className="absolute bottom-3 left-3 z-20 text-[11px] uppercase tracking-wider font-display font-bold bg-cyan-500 text-zinc-950 px-2 py-0.5 rounded">
          {script.gameName}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-lg text-zinc-100 group-hover:text-cyan-400 transition-colors leading-snug">
            {script.title}
          </h3>
        </div>

        <p className="text-sm text-zinc-400 line-clamp-2 mb-4 leading-relaxed flex-grow">
          {script.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 border-t border-zinc-800/60 pt-4 mb-4 text-xs font-mono text-zinc-500">
          <div>
            Visualizações: <span className="text-zinc-300 font-medium">{script.views.toLocaleString()}</span>
          </div>
          <div className="text-right">
            Cópias: <span className="text-zinc-300 font-medium">{script.copies.toLocaleString()}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            id={`details-btn-${script.id}`}
            onClick={() => onOpenDetails(script)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-bold font-display uppercase tracking-wider transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            Detalhes
          </button>

          <button
            id={`copy-btn-${script.id}`}
            onClick={handleCopy}
            disabled={script.status === 'Patched'}
            className={`flex-1 py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-bold font-display uppercase tracking-wider transition-all ${
              copied
                ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : script.status === 'Patched'
                ? 'bg-zinc-800 text-zinc-600 border border-zinc-800 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-cyan-400 text-zinc-950 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]'
            }`}
            title="Copiar script diretamente sem abrir detalhes"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copiado!' : 'Copiar Script'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
