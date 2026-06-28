/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Key, HelpCircle, Terminal, Calendar, User, ExternalLink, ShieldCheck } from 'lucide-react';
import { RobloxScript } from '../types';

interface ScriptModalProps {
  script: RobloxScript | null;
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: (scriptTitle: string) => void;
}

export const ScriptModal: React.FC<ScriptModalProps> = ({
  script,
  isOpen,
  onClose,
  onCopySuccess,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!script) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(script.code);
    setCopied(true);
    onCopySuccess(script.title);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header image/banner background */}
            <div className="relative h-44 bg-zinc-950 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-950/40 to-transparent" />
              <img
                src={script.imageUrl}
                alt={script.title}
                className="w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
              <button
                id="close-modal-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/50 text-zinc-400 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-cyan-500 text-zinc-950 px-2 py-0.5 rounded font-display">
                  {script.gameName}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mt-1 leading-tight">
                  {script.title}
                </h2>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 space-y-6">
              {/* Meta Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-zinc-950/50 rounded-xl p-4 border border-zinc-800/80 text-xs font-mono">
                <div className="flex items-center gap-2 text-zinc-400">
                  <User className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="block text-zinc-600 text-[10px] uppercase">Autor</span>
                    <span className="text-zinc-200 font-semibold">{script.author}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <div>
                    <span className="block text-zinc-600 text-[10px] uppercase">Atualizado</span>
                    <span className="text-zinc-200 font-semibold">{script.updatedDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <div>
                    <span className="block text-zinc-600 text-[10px] uppercase">Segurança</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 inline" /> Seguro
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Key className="w-4 h-4 text-rose-400" />
                  <div>
                    <span className="block text-zinc-600 text-[10px] uppercase">Chave (Key)</span>
                    <span className={`font-semibold ${script.hasKey ? 'text-amber-400' : 'text-cyan-400'}`}>
                      {script.hasKey ? 'Necessária' : 'Keyless'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-display font-semibold uppercase text-zinc-400 tracking-wider mb-2">Sobre o Script</h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950/20 p-4 rounded-xl border border-zinc-800/40">
                  {script.description}
                </p>
              </div>

              {/* Key Bypass Section */}
              {script.hasKey && (
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Key className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-zinc-100">Este script possui Sistema de Key (Chave)</h5>
                      <p className="text-xs text-zinc-400 mt-1">
                        Você precisará de uma chave para desbloquear as funções dentro do jogo. Clique no link para obter a chave do desenvolvedor original.
                      </p>
                    </div>
                  </div>
                  {script.keyLink && (
                    <a
                      href={script.keyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg text-xs font-bold font-display flex items-center justify-center gap-2 flex-shrink-0 transition-colors"
                    >
                      Pegar Key Oficial <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

              {/* Features List */}
              <div>
                <h4 className="text-sm font-display font-semibold uppercase text-zinc-400 tracking-wider mb-3">Principais Funções</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {script.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-zinc-300 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Panel & Instructions */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-display font-semibold uppercase text-zinc-400 tracking-wider">Código (Loadstring)</h4>
                  <span className="text-xs text-zinc-500 font-mono">Formato Luau</span>
                </div>

                <div className="relative">
                  {/* Code Container */}
                  <div className="w-full bg-zinc-950 rounded-xl p-4 border border-zinc-800 font-mono text-xs overflow-x-auto text-cyan-400 break-all select-all leading-relaxed whitespace-pre-wrap pr-12 min-h-20 flex items-center">
                    <code>{script.code}</code>
                  </div>

                  {/* Copy Button */}
                  <button
                    id="copy-script-modal-btn"
                    onClick={handleCopy}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-lg border transition-all ${
                      copied
                        ? 'bg-emerald-500 text-zinc-950 border-emerald-500 hover:bg-emerald-400 glow-green'
                        : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white'
                    }`}
                    title="Copiar Código"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Tutorial Steps */}
              <div className="bg-zinc-950/40 rounded-xl p-5 border border-zinc-800/50">
                <h4 className="text-sm font-display font-semibold uppercase text-zinc-400 tracking-wider flex items-center gap-2 mb-3">
                  <HelpCircle className="w-4 h-4 text-purple-400" /> Como usar o Script?
                </h4>
                <ol className="list-decimal list-inside space-y-2.5 text-xs text-zinc-400 leading-relaxed font-sans">
                  <li>Clique no botão acima para <strong className="text-zinc-200">Copiar o Código</strong>.</li>
                  <li>Baixe e instale um <strong className="text-zinc-200">Executor compatível</strong> (ex: Delta ou Arceus X na aba executores).</li>
                  <li>Abra o <strong className="text-zinc-200">Roblox</strong> com o executor ativado.</li>
                  <li>Abra a caixa de entrada de scripts do seu executor, <strong className="text-zinc-200">cole o código</strong> copiado.</li>
                  <li>Clique em <strong className="text-zinc-200">Execute</strong> ou <strong className="text-zinc-200">Inject</strong>.</li>
                  <li>O menu flutuante do script irá abrir no seu jogo. Divirta-se!</li>
                </ol>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-zinc-950 px-6 py-4 border-t border-zinc-800 flex items-center justify-between flex-shrink-0">
              <span className="text-xs text-zinc-500 font-mono">SCRIPTS OFICIAL MP &copy; 2026</span>
              <button
                id="close-footer-modal-btn"
                onClick={onClose}
                className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 hover:text-white rounded-lg text-xs font-semibold text-zinc-300 transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
