/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, AlertTriangle } from 'lucide-react';

export interface ToastMessage {
  id: string;
  text: string;
  type: 'success' | 'info' | 'error';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => {
          // Auto dismiss after 3 seconds
          return (
            <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const colors = {
    success: {
      bg: 'bg-zinc-900/95 border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]',
      icon: <Check className="w-4 h-4 text-emerald-400" />,
      text: 'text-zinc-200',
    },
    info: {
      bg: 'bg-zinc-900/95 border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.15)]',
      icon: <Info className="w-4 h-4 text-cyan-400" />,
      text: 'text-zinc-200',
    },
    error: {
      bg: 'bg-zinc-900/95 border-rose-500/20 shadow-[0_0_20px_rgba(239,68,68,0.15)]',
      icon: <AlertTriangle className="w-4 h-4 text-rose-400" />,
      text: 'text-zinc-200',
    },
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md ${colors[toast.type].bg}`}
    >
      <div className="p-1.5 bg-zinc-950 rounded-lg flex-shrink-0">
        {colors[toast.type].icon}
      </div>
      <div className="flex-grow pt-0.5">
        <p className={`text-xs font-sans leading-relaxed ${colors[toast.type].text}`}>
          {toast.text}
        </p>
      </div>
      <button
        id={`toast-close-${toast.id}`}
        onClick={() => onDismiss(toast.id)}
        className="text-zinc-500 hover:text-zinc-300 text-xs font-semibold p-1 self-start"
      >
        &times;
      </button>
    </motion.div>
  );
};
