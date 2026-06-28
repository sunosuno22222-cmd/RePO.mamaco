/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Youtube, SendHorizontal, MessageSquare, Terminal, ShieldAlert, CheckCircle2, AlertCircle, HelpCircle, Loader, MessageCircle, Mail } from 'lucide-react';
import { OWNER_CONTACT_DETAILS } from '../data';
import { ContactMessage } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    discordUsername: '',
    subject: 'Parceria / Dúvida',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [sentMessages, setSentMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('mp_scripts_messages');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const simulateTerminalLogs = async () => {
    const logs = [
      '⚡ Inicializando protocolo seguro MP-PROTOCOL...',
      '📡 Resolvendo servidor de recepção scripts-oficial-mp.db...',
      '🔑 Autenticando com SSL SHA-256 e IP de envio...',
      '📦 Empacotando dados de mensagem com criptografia de ponta-a-ponta...',
      '🚀 Enviando pacotes seguros para a equipe MP...',
      '✅ Mensagem recebida! Registro indexado no banco de dados com sucesso.'
    ];

    setTerminalLogs([]);
    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setTerminalLogs((prev) => [...prev, logs[i]]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
      return;
    }

    setFormState('sending');
    await simulateTerminalLogs();
    
    // Success State
    const updatedMessages = [formData, ...sentMessages];
    setSentMessages(updatedMessages);
    localStorage.setItem('mp_scripts_messages', JSON.stringify(updatedMessages));
    setFormState('sent');

    // Reset Form
    setFormData({
      name: '',
      email: '',
      discordUsername: '',
      subject: 'Parceria / Dúvida',
      message: '',
    });
  };

  const deleteSentMessage = (index: number) => {
    const updated = sentMessages.filter((_, idx) => idx !== index);
    setSentMessages(updated);
    localStorage.setItem('mp_scripts_messages', JSON.stringify(updated));
  };

  return (
    <div className="space-y-12">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
          Suporte e <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Contato Oficial</span>
        </h2>
        <p className="text-sm text-zinc-400">
          Precisa de ajuda, quer divulgar seu script, sugerir uma parceria comercial ou tirar dúvidas? Envie uma mensagem ou entre em uma de nossas redes.
        </p>
      </div>

      {/* Grid: Details Left, Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Info Column (Left 5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-6">
            <div className="space-y-2">
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-cyan-400" /> Canais Oficiais
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {OWNER_CONTACT_DETAILS.description}
              </p>
            </div>

            {/* Social Link Grid */}
            <div className="space-y-3">
              <a
                href={OWNER_CONTACT_DETAILS.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/60 hover:bg-[#5865F2]/10 border border-zinc-800 hover:border-[#5865F2]/30 text-zinc-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-[#5865F2] transition-colors">
                  <MessageSquare className="w-5 h-5 text-cyan-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Discord Oficial</h4>
                  <p className="text-xs text-zinc-500 font-mono">Comunidade de scripts ativa</p>
                </div>
              </a>

              <a
                href={OWNER_CONTACT_DETAILS.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/60 hover:bg-[#FF0000]/10 border border-zinc-800 hover:border-[#FF0000]/30 text-zinc-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-[#FF0000] transition-colors">
                  <Youtube className="w-5 h-5 text-rose-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Canal do YouTube</h4>
                  <p className="text-xs text-zinc-500 font-mono">Tutoriais em vídeo e reviews</p>
                </div>
              </a>

              <a
                href={OWNER_CONTACT_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/60 hover:bg-[#25D366]/10 border border-zinc-800 hover:border-[#25D366]/30 text-zinc-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">WhatsApp Privado</h4>
                  <p className="text-xs text-zinc-500 font-mono">Contato direto para parcerias</p>
                </div>
              </a>

              <a
                href={`mailto:${OWNER_CONTACT_DETAILS.email}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/60 hover:bg-cyan-400/10 border border-zinc-800 hover:border-cyan-400/30 text-zinc-300 hover:text-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400 group-hover:text-zinc-950" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">E-mail Comercial</h4>
                  <p className="text-xs text-zinc-500 font-mono">{OWNER_CONTACT_DETAILS.email}</p>
                </div>
              </a>
            </div>

            <div className="text-[11px] p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-500 leading-relaxed space-y-1.5 font-mono">
              <span className="text-zinc-400 font-bold block uppercase tracking-wider mb-1">Aviso de Resposta</span>
              <p>⏰ Tempo médio de resposta: <span className="text-cyan-400">12 a 24 horas</span></p>
              <p>🛑 Evite enviar spams ou mensagens duplicadas para agilizar seu atendimento.</p>
            </div>
          </div>
        </div>

        {/* Form Column (Right 7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
            
            {/* Direct Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-white">Formulário de Mensagem Direta</h3>
                <span className="text-xs text-zinc-500 font-mono">Envio Seguro</span>
              </div>

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs text-zinc-400 font-mono font-bold uppercase">Seu Nome *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: João Silva"
                    className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-zinc-400 font-mono font-bold uppercase">Seu E-mail *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="exemplo@gmail.com"
                    className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Discord and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="discordUsername" className="text-xs text-zinc-400 font-mono font-bold uppercase">Usuário do Discord (Opcional)</label>
                  <input
                    id="contact-discord"
                    type="text"
                    name="discordUsername"
                    value={formData.discordUsername}
                    onChange={handleInputChange}
                    placeholder="Ex: nick_oficial"
                    className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs text-zinc-400 font-mono font-bold uppercase">Assunto *</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-zinc-200 outline-none transition-colors"
                  >
                    <option value="Parceria / Dúvida">Parceria / Divulgação</option>
                    <option value="Denúncia de Script Patched">Denunciar Script Desatualizado</option>
                    <option value="Suporte Técnico">Problema Técnico / Suporte</option>
                    <option value="Outro assunto">Outro Assunto</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="message" className="text-xs text-zinc-400 font-mono font-bold uppercase">Sua Mensagem *</label>
                  <span className="text-[10px] text-zinc-500 font-mono">{formData.message.length} / 1000 caracteres</span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Escreva detalhadamente o que você precisa..."
                  className="w-full bg-zinc-950 border border-zinc-800/80 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors resize-none"
                />
              </div>

              <button
                id="submit-contact-btn"
                type="submit"
                disabled={formState === 'sending'}
                className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-800 text-zinc-950 font-extrabold font-display rounded-xl text-center text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all cursor-pointer"
              >
                {formState === 'sending' ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin text-zinc-950" />
                    Transmitindo Pacote...
                  </>
                ) : (
                  <>
                    <SendHorizontal className="w-4 h-4 text-zinc-950" />
                    Enviar Mensagem Oficial
                  </>
                )}
              </button>
            </form>

            {/* Direct Message sending console overlay */}
            <AnimatePresence>
              {formState === 'sending' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md p-6 flex flex-col justify-between z-10 font-mono"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-cyan-400 border-b border-zinc-800 pb-3">
                      <Terminal className="w-5 h-5" />
                      <span className="text-sm font-bold">TERMINAL DE CRIPTOGRAFIA MP</span>
                    </div>

                    <div className="space-y-2 text-xs text-zinc-300">
                      {terminalLogs.map((log, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-start gap-1"
                        >
                          <span className="text-zinc-600 select-none">&gt;</span>
                          <span>{log}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 text-xs text-zinc-500">
                    <span className="animate-pulse">Aguardando confirmação do servidor...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Direct Message success banner */}
            <AnimatePresence>
              {formState === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-zinc-900 border border-emerald-500/20 p-6 flex flex-col items-center justify-center text-center space-y-4 z-10"
                >
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-display font-bold text-white">Mensagem Enviada com Sucesso!</h4>
                    <p className="text-xs text-zinc-400 max-w-sm">
                      Nossos analistas e moderadores da MP Scripts receberam seu chamado. Responderemos em breve em seu e-mail cadastrado.
                    </p>
                  </div>
                  <button
                    id="dismiss-success-btn"
                    onClick={() => setFormState('idle')}
                    className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-lg transition-colors mt-2"
                  >
                    Escrever Nova Mensagem
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Messages Inbox Mockup */}
          {sentMessages.length > 0 && (
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">Minhas mensagens salvas localmente</h4>
              <div className="space-y-3">
                {sentMessages.map((msg, index) => (
                  <div key={index} className="p-3.5 bg-zinc-950/60 border border-zinc-800 rounded-xl relative group text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-zinc-200">{msg.name}</span>
                      <span className="text-[10px] text-zinc-500 font-mono bg-zinc-900 px-2 py-0.5 rounded">{msg.subject}</span>
                    </div>
                    <p className="text-xs text-zinc-400 break-all">{msg.message}</p>
                    <button
                      id={`delete-msg-btn-${index}`}
                      onClick={() => deleteSentMessage(index)}
                      className="absolute top-2.5 right-2.5 text-xs text-rose-500 hover:text-rose-400 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity p-1"
                    >
                      Excluir
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
