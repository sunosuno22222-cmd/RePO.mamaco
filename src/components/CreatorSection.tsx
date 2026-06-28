/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowUpRight, User } from 'lucide-react';

interface RobloxUserData {
  id: number;
  name: string;
  displayName: string;
}

export const CreatorSection: React.FC = () => {
  const [profile, setProfile] = useState<RobloxUserData>({
    id: 4401278552,
    name: 'MP_Oficial_Youtube',
    displayName: 'MP_Oficial_Youtube'
  });
  const [avatarUrl, setAvatarUrl] = useState<string>('/src/assets/images/owner_avatar_1782674293015.jpg');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchRobloxProfile = async () => {
      // Fetch profile info
      try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
          'https://users.roblox.com/v1/users/4401278552'
        )}`;
        const res = await fetch(proxyUrl);
        if (res.ok) {
          const json = await res.json();
          const data = JSON.parse(json.contents) as RobloxUserData;
          if (data && data.name && isMounted) {
            setProfile(data);
          }
        }
      } catch (err) {
        console.warn('Could not fetch dynamic Roblox profile data, using fallback.', err);
      }

      // Fetch avatar URL via standard thumbnails API which redirects/has CORS
      try {
        const thumbRes = await fetch(
          'https://thumbnails.roblox.com/v1/users/avatar?userIds=4401278552&size=352x352&format=Png&isCircular=false'
        );
        if (thumbRes.ok) {
          const data = await thumbRes.json();
          if (data && data.data && data.data[0] && data.data[0].imageUrl && isMounted) {
            setAvatarUrl(data.data[0].imageUrl);
          }
        } else {
          throw new Error('Direct fetch thumb failed');
        }
      } catch (err) {
        // Fallback to proxy-assisted fetch
        try {
          const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
            'https://thumbnails.roblox.com/v1/users/avatar?userIds=4401278552&size=352x352&format=Png&isCircular=false'
          )}`;
          const res = await fetch(proxyUrl);
          if (res.ok) {
            const json = await res.json();
            const parsed = JSON.parse(json.contents);
            if (parsed && parsed.data && parsed.data[0] && parsed.data[0].imageUrl && isMounted) {
              setAvatarUrl(parsed.data[0].imageUrl);
            }
          }
        } catch (proxyErr) {
          console.warn('Could not fetch avatar with proxy', proxyErr);
          // Standard web fallback that might work or fallback to illustration
          if (isMounted) {
            setAvatarUrl('https://www.roblox.com/avatar-thumbnail/image?userId=4401278552&width=352&height=352&format=png');
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchRobloxProfile();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="creator-section" className="relative max-w-xl mx-auto mt-16 px-4 select-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 rounded-3xl blur-2xl -z-10" />
      
      <div className="glass-panel border border-zinc-900 rounded-3xl p-6 md:p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden shadow-2xl">
        {/* Glow corner elements */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />

        {/* Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800/80 rounded-full text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
          <Shield className="w-3 h-3 text-cyan-400 animate-pulse" />
          Dono do Site
        </div>

        {/* Character Image container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 rounded-2xl blur-xl group-hover:scale-105 transition-transform duration-500" />
          
          <div className="relative w-44 h-44 md:w-48 md:h-48 bg-zinc-950/80 rounded-2xl border border-zinc-800 flex items-center justify-center p-2 shadow-inner overflow-hidden">
            {avatarUrl ? (
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={avatarUrl}
                alt="Roblox Character Avatar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(34,211,238,0.25)] group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback standard URL if anything breaks
                  const target = e.target as HTMLImageElement;
                  target.src = '/src/assets/images/owner_avatar_1782674293015.jpg';
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600">
                <User className="w-12 h-12 animate-pulse" />
                <span className="text-[10px] font-mono mt-2">Carregando Avatar...</span>
              </div>
            )}
            
            {/* Corner tech lines */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-500/40" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-500/40" />
          </div>
        </div>

        {/* Identity block */}
        <div className="space-y-1.5">
          <motion.h3 
            className="font-display font-black text-xl md:text-2xl text-white tracking-tight uppercase select-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isLoading ? (
              <span className="text-zinc-500 animate-pulse">Carregando...</span>
            ) : (
              profile.displayName
            )}
          </motion.h3>
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-500 select-text">
            <span>@{profile.name}</span>
          </div>
        </div>

        {/* Short description */}
        <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-sans">
          Bem-vindo à minha base oficial! Divirta-se jogando com os melhores scripts e executores Roblox do Brasil. Dúvidas ou sugestões? Envie uma mensagem na aba de Contato.
        </p>

        {/* Action Button Links */}
        <div className="flex justify-center w-full sm:w-auto">
          <a
            href="https://www.roblox.com/pt/users/4401278552/profile"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400 font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer group text-xs uppercase tracking-wider"
          >
            Ver Perfil Roblox Oficial
            <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
