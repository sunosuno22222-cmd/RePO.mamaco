/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Shield, ShieldAlert, Star, Layers, Cpu, Laptop, Smartphone, AlertCircle, Sparkles } from 'lucide-react';
import { Executor } from '../types';
import { EXECUTORS } from '../data';

export const ExecutorSection: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<'All' | 'Android' | 'iOS' | 'PC'>('All');

  const filteredExecutors = EXECUTORS.filter((exec) => {
    if (selectedPlatform === 'All') return true;
    if (selectedPlatform === 'Android') return exec.platform.includes('Android') || exec.platform === 'Multiplatform';
    if (selectedPlatform === 'iOS') return exec.platform.includes('iOS') || exec.platform === 'Multiplatform';
    if (selectedPlatform === 'PC') return exec.platform.includes('PC') || exec.platform === 'Multiplatform';
    return true;
  });

  const getPlatformIcon = (platform: string) => {
    if (platform.includes('PC')) return <Laptop className="w-4 h-4" />;
    return <Smartphone className="w-4 h-4" />;
  };

  return (
    <div className="space-y-8">
      {/* Upper header summary */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
          Download de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Executores Roblox</span>
        </h2>
        <p className="text-sm text-zinc-400">
          Baixe os melhores e mais seguros executores de Roblox Luau para Android, iOS e PC Windows. Todos testados e prontos para injetar seus scripts favoritos.
        </p>
      </div>

      {/* Platform Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {(['All', 'Android', 'iOS', 'PC'] as const).map((platform) => (
          <button
            key={platform}
            id={`platform-filter-${platform}`}
            onClick={() => setSelectedPlatform(platform)}
            className={`px-5 py-2 rounded-xl text-xs font-semibold font-display tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              selectedPlatform === platform
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-zinc-950 font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800'
            }`}
          >
            {platform === 'All' && <Layers className="w-3.5 h-3.5" />}
            {platform === 'Android' && <Smartphone className="w-3.5 h-3.5" />}
            {platform === 'iOS' && <Smartphone className="w-3.5 h-3.5" />}
            {platform === 'PC' && <Laptop className="w-3.5 h-3.5" />}
            {platform === 'All' ? 'Todos' : platform}
          </button>
        ))}
      </div>

      {/* Executors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExecutors.map((exec) => (
          <motion.div
            key={exec.id}
            id={`executor-card-${exec.id}`}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel hover:border-purple-500/30 rounded-xl overflow-hidden flex flex-col h-full group transition-all"
          >
            {/* Header / platform banner */}
            <div className="p-5 bg-zinc-950/40 border-b border-zinc-800/60 relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                  exec.status === 'Working'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}>
                  {exec.status === 'Working' ? 'Funcionando' : 'Atualizando'}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                  exec.isFree
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                }`}>
                  {exec.isFree ? 'Grátis' : 'Pago'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={exec.imageUrl}
                    alt={exec.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-zinc-100 group-hover:text-purple-400 transition-colors leading-snug">
                    {exec.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono mt-1">
                    {getPlatformIcon(exec.platform)}
                    <span>{exec.platform}</span>
                    <span>&bull;</span>
                    <span>{exec.version}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Info */}
            <div className="p-5 flex-grow space-y-4">
              {/* Stars rating */}
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-zinc-200 font-bold">{exec.rating}</span>
                  <span className="text-zinc-500">/5.0</span>
                </div>
                <div className="text-right">
                  Tamanho: <span className="text-zinc-200 font-bold">{exec.size}</span>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="space-y-1.5 text-xs text-zinc-300">
                <h4 className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 font-mono">Destaques</h4>
                {exec.features.map((feat, index) => (
                  <div key={index} className="flex items-start gap-1.5 leading-relaxed text-zinc-400">
                    <span className="text-purple-500 flex-shrink-0 font-bold font-mono">▸</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Key System Indicator */}
              <div className="text-[11px] p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/80 font-mono text-zinc-400 flex items-center justify-between">
                <span>Sistema de Key:</span>
                <span className={exec.hasKey ? 'text-amber-400 font-semibold' : 'text-cyan-400 font-semibold'}>
                  {exec.hasKey ? 'Possui Linkvertise' : 'Totalmente Keyless'}
                </span>
              </div>
            </div>

            {/* Download CTA Button */}
            <div className="p-5 pt-0 mt-auto">
              <a
                href={exec.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-zinc-950 font-extrabold font-display rounded-xl text-center text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              >
                <Download className="w-4 h-4 text-zinc-950" />
                Baixar Executor
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Safety Notice Box (Essential for Roblox Exploit Portfolios) */}
      <div className="glass-panel border-amber-500/20 bg-amber-500/5 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/25">
            <ShieldAlert className="w-8 h-8" />
          </div>
        </div>
        <div className="md:col-span-11 space-y-1 text-center md:text-left">
          <h4 className="text-base font-display font-bold text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
            <Shield className="w-4 h-4 inline" /> Alerta de Segurança e Falsos Positivos
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed font-sans">
            Devido à natureza dos injetores de código de Roblox, a maioria dos antivírus de PC Windows detecta os executores como <strong className="text-zinc-100">Falso Positivo (Malicious bytecode/injector)</strong>. Recomendamos desativar temporariamente o Windows Defender ou adicionar o executor à pasta de exclusões para permitir que a injeção Luau funcione corretamente e sem crashar.
          </p>
        </div>
      </div>
    </div>
  );
};
