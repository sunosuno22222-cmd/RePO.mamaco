/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RobloxScript, Executor } from './types';

const BASE_ROBLOX_SCRIPTS: RobloxScript[] = [
  {
    id: 'blox-fruits-redz',
    title: 'Redz Hub - Blox Fruits v20',
    gameName: 'Blox Fruits',
    description: 'O script mais famoso e otimizado para Blox Fruits. Possui Auto Farm de Level rápido, Auto Farm de Elite, Auto Quest, Teleporte para todas as ilhas e Raids automatizadas sem lag.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/BloxFruits/main/Source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Blox Fruits', 'Auto Farm', 'Raid', 'Quest'],
    views: 12450,
    copies: 8932,
    imageUrl: '/src/assets/images/redz_hub_gui_1782673829798.jpg',
    features: [
      'Auto Farm Level (Muito rápido e sem detecção)',
      'Auto Farm Elite & Bosses',
      'Fruit Sniper (Pega frutas do chão automaticamente)',
      'Teleportes instantâneos entre Mares e Ilhas',
      'Raid Solo Assist (Finaliza raids em segundos)',
      'Status Auto Stats & Skill Spammer'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Redz Team'
  },
  {
    id: 'brookhaven-troll-gui',
    title: 'Brookhaven Admin Tools & Pass Unlocker',
    gameName: 'Brookhaven RP',
    description: 'Desbloqueie todos os passes de jogo do Brookhaven de graça! Ganhe acesso a carros premium, casas exclusivas, admin completo de bate-papo, velocidade máxima modificada, fly e animações personalizadas para trollar.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/IceyEZ/BrookhavenAdmin/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Brookhaven RP', 'Admin', 'Troll', 'Unlock Passes'],
    views: 8900,
    copies: 7120,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Desbloqueador de Carros Premium',
      'Desbloqueador de Casas Exclusivas',
      'Speed Changer & Noclip (Atravessar paredes)',
      'Admin Commands (/fly, /kill, /kick local)',
      'Music Player sem ID de rádio pago',
      'Auto Rob nos cofres das casas'
    ],
    updatedDate: '25 Jun 2026',
    author: 'IceyEZ'
  },
  {
    id: 'blade-ball-auto-parry',
    title: 'Ultra Parry V4 - Blade Ball',
    gameName: 'Blade Ball',
    description: 'O script definitivo com o Auto Parry mais rápido e preciso do cenário. Adapta-se automaticamente à velocidade e curva da bola com base no seu ping. Inclui curvas preditivas e spammer em combates próximos.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/FFJ1/Roblox-Exploits/main/BladeBallParry.lua"))()',
    hasKey: true,
    keyLink: 'https://linkvertise.com/12345/bladeball-parry-key',
    status: 'Working',
    categories: ['Blade Ball', 'Auto Parry', 'Combat', 'ESP'],
    views: 15400,
    copies: 11200,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Parry Preditivo (Ajuste automático de Ping)',
      'Clash Spammer (Vença todas as disputas de cliques)',
      'Ball Visualizer & Lines (Previsão de trajetória)',
      'Target ESP (Mostra quem a bola está focando)',
      'Anti-detection System (Segurança avançada)',
      'Auto-dodge abilities'
    ],
    updatedDate: '27 Jun 2026',
    author: 'FFJ Team'
  },
  {
    id: 'pet-sim-99-farm',
    title: 'Zap Hub - Pet Simulator 99 v2',
    gameName: 'Pet Simulator 99',
    description: 'Farm inteligente e otimizado para o Pet Simulator 99. Coleta de moedas e diamantes na área mais alta, abertura automática de ovos lendários de forma instantânea, e envio de itens excedentes para contas secundárias.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/ZapHubDevelopers/PetSim99/main/ZapHub.lua"))()',
    hasKey: true,
    keyLink: 'https://bstlar.com/zaphub-key-system',
    status: 'Updating',
    categories: ['Pet Simulator 99', 'Auto Farm', 'Auto Egg', 'Auto Mail'],
    views: 10300,
    copies: 5900,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Farm Automático de Moedas e Diamantes (Área Máxima)',
      'Auto Fast Hatch (Abre ovos sem animação de espera)',
      'Auto Collect Lootbags & Presents',
      'Auto Obby (Completa minijogos de diamantes automaticamente)',
      'Pet Equip otimizado para dano máximo',
      'Auto Enchant & Potion Upgrade'
    ],
    updatedDate: '28 Jun 2026',
    author: 'ZapHub Devs'
  },
  {
    id: 'mm2-silent-aim-esp',
    title: 'Vortex GUI - Murder Mystery 2',
    gameName: 'Murder Mystery 2',
    description: 'Descubra instantaneamente quem é o assassino e o xerife com o ESP avançado. Possui Silent Aim para o Xerife nunca errar o tiro, auto-coleta de moedas flutuantes pelo mapa e coleta automática da arma caída.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VortexExploits/MM2Vortex/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Murder Mystery 2', 'ESP', 'Silent Aim', 'Coin Farm'],
    views: 11050,
    copies: 8340,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'ESP Completo (Mostra Assassino em Vermelho, Xerife em Azul)',
      'Silent Aim Bot (Xerife atira automaticamente na cabeça)',
      'Auto Collect Coins (Até o limite da mochila de forma silenciosa)',
      'Auto Grab Gun (Teleporta instantaneamente para a arma se o xerife morrer)',
      'Kill Aura (Como assassino, elimina alvos próximos instantaneamente)',
      'Noclip & Speed Toggle'
    ],
    updatedDate: '20 Jun 2026',
    author: 'Vortex Inc'
  },
  {
    id: 'mm2-eclipse-hub',
    title: 'Eclipse Hub - MM2 Troll & ESP',
    gameName: 'Murder Mystery 2',
    description: 'Um dos scripts mais completos para MM2. Contém Troll Tools, God Mode, Invisibilidade total, teleportes para jogadores e itens, detector instantâneo de papéis e coin farm super rápido sem detecção.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/IceyEZ/EclipseMM2/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Murder Mystery 2', 'Troll', 'ESP', 'Coin Farm'],
    views: 9540,
    copies: 7120,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Aura de Eliminação do Assassino',
      'Auto-dodge Shot (Esquiva de tiros do xerife)',
      'Full ESP Names, Boxes and Distance',
      'Teleport Coleta Segura de Moedas',
      'Visualizador de Inventário Alheio'
    ],
    updatedDate: '27 Jun 2026',
    author: 'Eclipse Team'
  },
  {
    id: 'natural-disaster-9xd',
    title: '9xD Disaster Survival GUI',
    gameName: 'Natural Disaster Survival',
    description: 'O melhor script de trapaça para Natural Disaster Survival. Ative Teleporte automático para a ilha segura com base na previsão do tempo, spawne itens especiais (como balões e maçãs) de forma ilimitada e consiga vitórias infinitas.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/9xD/NaturalDisasterSurvival/main/misc.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Natural Disaster', 'Auto Win', 'Teleport', 'Spawn Items'],
    views: 13400,
    copies: 9110,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Disaster Predictor (Revela qual será o desastre antes de acontecer)',
      'Auto Teleport Island (Teleporta para um local 100% seguro)',
      'Infinite Green Balloon & Apples',
      'WalkSpeed & JumpPower Custom Changer',
      'No Fall Damage & Noclip'
    ],
    updatedDate: '28 Jun 2026',
    author: '9xD Developers'
  },
  {
    id: 'natural-disaster-gamerscripter',
    title: 'GamerScripter Predictor & Survivor v3',
    gameName: 'Natural Disaster Survival',
    description: 'Um utilitário avançado com painel de previsões detalhadas e teleporte inteligente para desastres específicos. Ajusta a posição de acordo com o tipo de ameaça (ex: sobe no topo em Tsunami, vai para o solo em terremotos).',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/GamerScripter/NaturalDisaster/main/loader.lua"))()',
    hasKey: true,
    keyLink: 'https://linkvertise.com/gamerscripter-nd-key',
    status: 'Working',
    categories: ['Natural Disaster', 'Predictor', 'Survival', 'Combat'],
    views: 7420,
    copies: 5100,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Previsor de Desastres em HUD Flutuante',
      'Anti-Lava e Anti-Água ácida integrados',
      'Teleporte Rápido de Emergência',
      'Desativação de colisão de destroços',
      'Auto-farm de Vitórias no Lobby'
    ],
    updatedDate: '26 Jun 2026',
    author: 'GamerScripter'
  },
  {
    id: 'flee-the-facility-roxhub',
    title: 'RoxHub Flee the Facility GUI',
    gameName: 'Flee the Facility',
    description: 'O script definitivo para Flee the Facility (Fuja da Instalação). Como Sobrevivente, marque e hackeie computadores perfeitamente sem falhar minijogos. Como Fera, use ESP e Wallhack para localizar e capturar todos.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/RoxHub/FleeTheFacility/main/rox.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Flee the Facility', 'ESP', 'Auto Hack', 'Beast Finder'],
    views: 11900,
    copies: 8430,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'ESP Computadores (Verde: Concluído, Vermelho: Pendente)',
      'ESP Fera e Sobreviventes com Linhas de Alvo',
      'Auto-Hacking Instantâneo (Nenhuma falha de progresso)',
      'Liberação rápida de tubos de criogenia',
      'Portas de Saída teleporte instantâneo após energia completa'
    ],
    updatedDate: '28 Jun 2026',
    author: 'RoxHub Team'
  },
  {
    id: 'flee-the-facility-venyx',
    title: 'Venyx UI - Fuja da Instalação Pro',
    gameName: 'Flee the Facility',
    description: 'Mod menu com visual limpo do Venyx UI. Possui detector de perigo imediato, auto-esquiva de golpes da fera, velocidade aprimorada para correr e bypass completo de colisão nos dutos de ventilação.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/VenyxHub/FleeTheFacility/main/venyx.lua"))()',
    hasKey: true,
    keyLink: 'https://bstlar.com/venyx-ftf-key',
    status: 'Working',
    categories: ['Flee the Facility', 'Venyx UI', 'Auto Escape', 'Wallhack'],
    views: 6510,
    copies: 4220,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Alerta sonoro e visual de Fera aproximando',
      'Auto Crawl e No Delay para entrar em dutos',
      'ESP Nome & Item (Mostra as marretas)',
      'Velocidade de escape instantânea (Speed Booster)',
      'Remoção de neblina e escuridão do mapa'
    ],
    updatedDate: '24 Jun 2026',
    author: 'Venyx Dev'
  },
  {
    id: 'grow-a-garden-autowater',
    title: 'Grow a Garden Auto-Farm & Seed V2',
    gameName: 'Grow a Garden',
    description: 'Automatize toda a sua plantação em Grow a Garden! Este script realiza a compra automática de sementes baratas, planta instantaneamente nos canteiros, rega de forma autônoma e colhe assim que cresce.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/gogps/GrowAGarden/main/script.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Grow a Garden', 'Auto Farm', 'Auto Seed', 'Auto Harvest'],
    views: 9320,
    copies: 7200,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Seed Planter (Garante plantio otimizado de sementes)',
      'Auto Water (Enche regador e molha plantas sem intervenção)',
      'Auto Harvest & Auto Sell (Lucro automatizado em segundos)',
      'Speed Hack para crescer plantas instantâneo',
      'Infinite Water Capacity bypass'
    ],
    updatedDate: '28 Jun 2026',
    author: 'GoGPS Team'
  },
  {
    id: 'grow-a-garden-iceyez',
    title: 'Zenith Hub - Grow a Garden Master',
    gameName: 'Grow a Garden',
    description: 'Interface avançada para dominar o Grow a Garden. Inclui teleporte de mercado, compras inteligentes (só compra quando há saldo positivo) e modo de colheita secreta super rápida de plantas lendárias raras.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/IceyEZ/GrowAGarden/main/source.lua"))()',
    hasKey: true,
    keyLink: 'https://linkvertise.com/iceyez-grow-key',
    status: 'Working',
    categories: ['Grow a Garden', 'Auto Farm', 'Teleport', 'Tycoon'],
    views: 4800,
    copies: 3150,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Buy Sementes Raras e Lendárias',
      'Proteção contra pestes (Auto Pest Control)',
      'Teleporte para Poço de Água e Vendedores',
      'Auto Upgrade de ferramentas e pás',
      'Multiplicador de moedas local'
    ],
    updatedDate: '27 Jun 2026',
    author: 'IceyEZ'
  },
  {
    id: 'literally-fnf-wally',
    title: 'Wallys Auto-Player - Literally FNF',
    gameName: 'Literally FNF',
    description: 'O melhor auto-player para Literally FNF (Friday Night Funkin). Acerte 100% das notas perfeitamente sem falhar uma única sequência. Permite ajustar a taxa de acertos (Sick, Good, Bad) para evitar banimentos.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/wally-rblx/literally-fnf/main/main.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Literally FNF', 'Auto Player', 'Rhythm', 'Bot'],
    views: 14100,
    copies: 10400,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Note Hitter (Taxa de acertos editável)',
      'Modo Full SICK (Consiga pontuações máximas lendárias)',
      'Note Delay Customizer (Ajuste milissegundos para parecer humano)',
      'Auto-Join Match (Entra em partidas com jogadores automaticamente)',
      'Anti-cheat bypass integrado (Segurança 100%)'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Wally'
  },
  {
    id: 'literally-fnf-sillydev',
    title: 'SillyDev Rhythm Bot - Literally FNF',
    gameName: 'Literally FNF',
    description: 'Rhythm bot super calibrado para partidas rápidas de Literally FNF. Toca músicas inteiras sem desviar do compasso e possui bypass para canções customizadas extremamente velozes.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/SillyDevRoblox/LiterallyFNF/main/autostart.lua"))()',
    hasKey: true,
    keyLink: 'https://bstlar.com/sillydev-fnf-bot',
    status: 'Working',
    categories: ['Literally FNF', 'Bot', 'Auto Player', 'Safe'],
    views: 8200,
    copies: 5600,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Algoritmo inteligente de leitura de notas na tela',
      'Suporta modo multijogador em tempo real',
      'Auto-emote ao acertar notas longas',
      'Custom Note Skins unlocker',
      'Anti-detect bypass'
    ],
    updatedDate: '25 Jun 2026',
    author: 'SillyDev'
  },
  {
    id: 'roube-brainrot-infwins',
    title: 'Steal a Brainrot Infinite Wins V3',
    gameName: 'Roube um Brainrot',
    description: 'Fique rico e complete todas as fases de Roube um Brainrot em segundos! Este script permite teleportar direto para o final do obby, coletar todas as recompensas de memes, e farmar moedas de forma contínua.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/BrainrotRobber/Main/main/script.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Roube um Brainrot', 'Meme', 'Auto Win', 'Obby'],
    views: 12500,
    copies: 9800,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Obby Finish (Teleporte de checkpoint instantâneo)',
      'Coin Collect Aura (Puxa moedas de memes ao seu redor)',
      'Unlock All Trails & Gamepasses de graça',
      'God Mode contra armadilhas e lava',
      'Spammer de áudio meme engraçado'
    ],
    updatedDate: '28 Jun 2026',
    author: 'MemeHacker'
  },
  {
    id: 'roube-brainrot-memehub',
    title: 'MemeHub GUI - Roube um Brainrot',
    gameName: 'Roube um Brainrot',
    description: 'Interface divertida com todos os cheats para o jogo Roube um Brainrot. Inclui spawnador de memes para atacar outros jogadores, velocidade máxima de corrida e pulo infinito.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/MemeDeveloper/BrainrotRobber/main/source.lua"))()',
    hasKey: true,
    keyLink: 'https://loot-link.com/s?q=brainrotkey',
    status: 'Working',
    categories: ['Roube um Brainrot', 'Meme', 'Troll', 'Fun'],
    views: 7900,
    copies: 4830,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Menu Completo de Spawns de Memes (Sigma, Skibidi, Rizz)',
      'Fly & WalkSpeed Modifiers',
      'Auto Spin Wheel de prêmios diários',
      'Troll players (Pode empurrar outros jogadores com aura)',
      'Keyless option inside server'
    ],
    updatedDate: '27 Jun 2026',
    author: 'MemeDev'
  },
  {
    id: 'shindo-life-farm',
    title: 'Nuke Hub - Shindo Life',
    gameName: 'Shindo Life',
    description: 'Ganhe todos os giros de sangue e pergaminhos raros sem esforço. Auto Quest de Bosses, Auto Farm de Nível Ninja, auto Rank Up e rastreador automático de pergaminhos que surgem no mapa.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/NukeHubExploits/ShindoLife/main/Loader.lua"))()',
    hasKey: false,
    status: 'Patched',
    categories: ['Shindo Life', 'Auto Quest', 'Scroll Hunter', 'Spins'],
    views: 6800,
    copies: 4100,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Scroll Hunter (Rastreia e pega pergaminhos de sub-poderes)',
      'Auto Boss Farm (Derrota bosses em segundos)',
      'Infinite Spins Tracker & Auto Spin Bloodline',
      'Fast Leveling & Automatic Rank-up',
      'Chakra Infinite & God Mode',
      'No Cooldown nas habilidades ninja'
    ],
    updatedDate: '15 Jun 2026',
    author: 'Nuke Devs'
  },
  {
    id: 'king-legacy-vortex',
    title: 'Legacy Hub - King Legacy',
    gameName: 'King Legacy',
    description: 'Melhor aliado no King Legacy para farmar níveis de espada e de fruta. Oferece combate automatizado, auto-buy de itens de Dungeon, boss farm e teleportes super otimizados sem chance de banimento temporário.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/LegacyHubOrg/KingLegacy/main/Source.lua"))()',
    hasKey: true,
    keyLink: 'https://loot-link.com/s?q=kinglegacykey',
    status: 'Working',
    categories: ['King Legacy', 'Auto Farm', 'Combat', 'Dungeon'],
    views: 9400,
    copies: 6300,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Farm Level & Quest Giver',
      'Auto Raid & Auto Dungeon Match',
      'Frutas Auto Sniper & Armazenador',
      'Habilidades sem tempo de recarga',
      'Ataque rápido otimizado (Fast Attack)',
      'Stats auto-allocate'
    ],
    updatedDate: '26 Jun 2026',
    author: 'Legacy Group'
  },
  {
    id: 'doors-vynixius',
    title: 'Vynixius Hub - Doors v4',
    gameName: 'Doors',
    description: 'O script mais renomado para Doors! Facilite a fuga de todas as salas com ESP completo de monstros, gavetas, chaves e livros. Possui Auto-Solve da biblioteca e alertas preditivos de ataques do Rush ou Ambush.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/RegularVynixius/Doors/main/Source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Doors', 'ESP', 'Auto Solve', 'Survival'],
    views: 18450,
    copies: 14210,
    imageUrl: '/src/assets/images/vynixius_doors_gui_1782673877327.jpg',
    features: [
      'ESP Completo (Monstros, Gavetas, Chaves, Livros, Portas)',
      'Auto-Solve Puzzle da Biblioteca (Porta 50 de forma instantânea)',
      'Alertas sonoros e visuais de Rush, Ambush e Seek',
      'God Mode contra danos de armadilhas no chão',
      'WalkSpeed e Noclip ajustáveis'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Vynixius Team'
  },
  {
    id: 'bedwars-vape-v4',
    title: 'Vape V4 - Bedwars Client',
    gameName: 'Bedwars',
    description: 'O famoso e absoluto cliente de combate Vape V4 para o Bedwars do Roblox. Domine partidas com KillAura inteligente, Auto-Bridge super veloz, ESP de camas e jogadores, e voo silencioso (Fly) com bypass completo de anti-cheat.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/7GrandDadPGN/VapeV4ForRoblox/main/NewMainScript.lua", true))()',
    hasKey: false,
    status: 'Working',
    categories: ['Bedwars', 'Combat', 'KillAura', 'Fly'],
    views: 22100,
    copies: 17920,
    imageUrl: '/src/assets/images/vape_v4_gui_1782673843442.jpg',
    features: [
      'KillAura com múltiplos alvos e alcance customizável',
      'Infinite Fly & Speed com bypass (Anti-kick ativo)',
      'Auto Bridge (Cria pontes instantâneas sem olhar para baixo)',
      'ESP de camas inimigas e distância de adversários',
      'Chest Stealer e Auto-Armor rápido'
    ],
    updatedDate: '28 Jun 2026',
    author: '7GrandDad'
  },
  {
    id: 'rivals-tora-isme',
    title: 'Tora Is Me - Rivals Arena Aimbot',
    gameName: 'Rivals',
    description: 'O script perfeito para vencer todas as arenas competitivas do Rivals. Equipado com Silent Aim super preciso (atira direto no alvo mesmo se você mirar para o lado) e Wallhack de alta fidelidade que mostra a vida dos oponentes.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/ToraIsMe/ToraIsMe/main/0rivals"))()',
    hasKey: true,
    keyLink: 'https://linkvertise.com/toraisme-key-rivals',
    status: 'Working',
    categories: ['Rivals', 'Silent Aim', 'ESP', 'Wallhack'],
    views: 14500,
    copies: 10200,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Silent Aim Bot com campo de visão (FOV) customizável',
      'ESP Wallhack (Skeleton, Boxes, Health Bar, Names)',
      'Rapid Fire & No Recoil para todas as armas de fogo',
      'Auto-Respawn instantâneo sem delay de carregamento',
      'Speed Booster e Jump Power modificador'
    ],
    updatedDate: '27 Jun 2026',
    author: 'Tora Is Me'
  },
  {
    id: 'dahood-space-hub',
    title: 'Space Hub - Da Hood Aimlock',
    gameName: 'Da Hood',
    description: 'O melhor script de combate e utilitários para Da Hood. Contém Aim Lock suave na cabeça/corpo, Fly bypass para fugir de combates difíceis, teleporte para armas e cofres, e coletor de moedas rápido pelo mapa.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/SpaceHub/DaHood/main/loader.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Da Hood', 'Aimlock', 'Fly', 'Teleport'],
    views: 19800,
    copies: 13900,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Aimlock inteligente com FOV suave',
      'Teleportes para Guns, Cash e Locais secretos',
      'Auto Farm de Socos e Fitness',
      'God Mode contra socos e tiros (Bypass)',
      'Super Speed e Voo livre'
    ],
    updatedDate: '26 Jun 2026',
    author: 'Space Hub Dev'
  },
  {
    id: 'adoptme-iceyez',
    title: 'Zenith Hub - Adopt Me Auto Farm',
    gameName: 'Adopt Me!',
    description: 'Automatize o crescimento do seu pet e ganhe milhares de bucks sem esforço! Este script completa tarefas automaticamente (comer, dormir, tomar banho, ir à escola) tanto para você quanto para o seu pet ativo de forma silenciosa.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/IceyEZ/AdoptMe/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Adopt Me!', 'Auto Farm', 'Pet', 'Money'],
    views: 15300,
    copies: 12100,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto-Farm Pet Tasks (Fica acordado fazendo quests de Pet)',
      'Auto-Farm Baby (Duplica ganhos jogando como bebê)',
      'Auto Claim Gifts e recompensas diárias',
      'Teleporte rápido para todos os locais do mapa',
      'Auto-Buy de comida e água barata'
    ],
    updatedDate: '28 Jun 2026',
    author: 'IceyEZ'
  },
  {
    id: 'arsenal-thunderz',
    title: 'ThunderZ Hub - Arsenal Headshot Bot',
    gameName: 'Arsenal',
    description: 'Domine todas as rodadas de Arsenal! O ThunderZ Hub traz o Aimbot preditivo mais veloz com wallbang total (atira através das paredes), ESP translúcido de todas as equipes e auto-shot inteligente para ganhar o jogo em minutos.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/ThunderZHub/Arsenal/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Arsenal', 'Aimbot', 'ESP', 'Wallbang'],
    views: 16700,
    copies: 11400,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Aimbot Headshot & Silent Aim ajustável',
      'Wallbang total (Balas atravessam qualquer obstáculo)',
      'ESP Boxes, Chams (Visão de raio-x brilhante) e Names',
      'No Spread & No Recoil (Precisão absoluta)',
      'Auto Fire (Atira assim que o inimigo entra na mira)'
    ],
    updatedDate: '28 Jun 2026',
    author: 'ThunderZ'
  },
  {
    id: 'towerofhell-zinity',
    title: 'Zinity Hub - Tower of Hell Instant Win',
    gameName: 'Tower of Hell',
    description: 'Complete a torre instantaneamente! O Zinity Hub teleporta seu personagem de forma sutil através de todos os andares até a linha de chegada sem tocar nos lasers mortais. Possui também desbloqueador de itens cosméticos e imunidades.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/ZinityPvP/TowerOfHell/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Tower of Hell', 'Auto Win', 'God Mode', 'Teleport'],
    views: 13900,
    copies: 9100,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Win Instantâneo (Teleporte seguro por andares)',
      'God Mode contra todos os Lasers da torre',
      'Walkspeed e JumpPower modificáveis',
      'Infinite Double Jumps (Pulos duplos infinitos)',
      'Bypass anti-cheat de quedas rápidas'
    ],
    updatedDate: '27 Jun 2026',
    author: 'Zinity PvP'
  },
  {
    id: 'beeswarm-nectar',
    title: 'Nectar Hub - Bee Swarm Simulator Master',
    gameName: 'Bee Swarm Simulator',
    description: 'Farming supremo e inteligente para Bee Swarm! Faça coleta instantânea de pólen nas melhores flores do mapa, use o Auto-Dig super veloz, mate monstros instantaneamente com robô ajudante e retorne à colméia para converter mel.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/not-weeb/nectar/main/nectar.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Bee Swarm', 'Auto Farm', 'Combat', 'Honey'],
    views: 14200,
    copies: 10100,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Gather & Auto Dig (Colhe pólen sozinho sem cansar)',
      'Auto Convert Honey (Volta à colméia quando a mochila enche)',
      'Monster Killer (Mata Caranguejos e Abelhas automaticamente)',
      'Auto Dispenser e Claim de itens grátis por hora',
      'Ajuste inteligente de velocidade e sem lag'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Nectar Dev'
  },
  {
    id: 'slapbattles-gamerscripter',
    title: 'Cherry Hub - Slap Battles Auto-Farm',
    gameName: 'Slap Battles',
    description: 'O script definitivo com Slap Aura rápida para derrotar oponentes antes mesmo de chegarem perto de você. Desvie de tapas automaticamente, teleporte-se para pegar luvas secretas e colete vitórias extras na arena de forma rápida.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/GamerScripter/SlapBattles/main/loader.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Slap Battles', 'Auto Farm', 'Slap Aura', 'Dodge'],
    views: 11200,
    copies: 8400,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Slap Aura 360 Graus (Dê tapa em todos ao redor)',
      'Auto Dodge (Desvia de tapas normais e de luvas especiais)',
      'Anti-Ragdoll (Levanta instantaneamente após cair)',
      'Glove Spawns & Collect (Coleta luvas no mapa de forma automática)',
      'Vitórias e Tapas Auto-Farm'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Cherry Dev'
  },
  {
    id: 'evade-9xd',
    title: '9xD Evade Pro Helper',
    gameName: 'Evade',
    description: 'Sobreviva com facilidade de todos os monstros do Evade! Este script possui Auto-Revive ultra veloz (ajuda aliados no chão em milissegundos), ESP de bots assassinos mostrando a direção exata e God Mode parcial contra capturas.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/9xD/Evade/main/loader.lua"))()',
    hasKey: true,
    keyLink: 'https://linkvertise.com/evadehelper-key',
    status: 'Working',
    categories: ['Evade', 'ESP', 'Auto Revive', 'Survival'],
    views: 15100,
    copies: 11900,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Revive (Teleporta e revive aliados caídos sem parar de correr)',
      'ESP Bots & Player (Veja a fera vindo pelas paredes com facilidade)',
      'Light Mod (Desativa neblina e adiciona lanterna infinita)',
      'Speed Booster & Infinite Slide (Deslize eterno pelo mapa)',
      'Auto-Farm de ticket diário e prêmios de partidas'
    ],
    updatedDate: '28 Jun 2026',
    author: '9xD Devs'
  },
  {
    id: 'fisch-fischinghub',
    title: 'Fisching Hub - Fisch Auto-Catch & Farm',
    gameName: 'Fisch',
    description: 'O script supremo para o novo sucesso Fisch! Automatize sua pescaria com Auto-Cast (lançamento), Auto-Shake (chacoalhar) instantâneo e bypass de minigame de força. Inclui teleporte de ilhas e vendedor automático.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/yofriendly/Fisch/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Fisch', 'Auto Farm', 'Fishing', 'Teleport'],
    views: 19850,
    copies: 16540,
    imageUrl: '/src/assets/images/fisch_auto_gui_1782673854205.jpg',
    features: [
      'Auto Cast (Lança a vara sozinho de forma instantânea)',
      'Auto Shake perfeito (Nunca erra as bolhas de força)',
      'Instant Catch bypass (Pesca o peixe na hora em 0s)',
      'Teleportes para todas as Ilhas (Tuna, Vertigo, etc.)',
      'Auto-Sell (Vende os peixes sozinho para obter dinheiro)'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Fisching Team'
  },
  {
    id: 'solsrng-cupid',
    title: 'Cupid Hub - Sol\'s RNG Auto Roll',
    gameName: 'Sol\'s RNG',
    description: 'O script mais desejado para Sol\'s RNG! Realize giros (Rolls) infinitos e ultra rápidos, craft de luvas automáticas, coleta silenciosa de moedas/poções pelo mapa e filtro de auras personalizado.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/CupidHub/SolsRNG/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Sol\'s RNG', 'Auto Roll', 'Auto Craft', 'Collect Aura'],
    views: 17400,
    copies: 14200,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Roll super rápido sem interrupções',
      'Auto Craft de todas as luvas e itens no ferreiro',
      'Teleporte coletor de Moedas e Lucky Potions',
      'Filtro inteligente de auras (Deleta as auras ruins automaticamente)',
      'Speed Boost de caminhada e pulo infinito'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Cupid Dev'
  },
  {
    id: 'blox-fruits-wazure',
    title: 'W-Azure Hub - Blox Fruits v20',
    gameName: 'Blox Fruits',
    description: 'Excelente alternativa ao Redz Hub para obter sua Raça V4. Inclui localizador de Mirage Island, Auto-Trials de raça, farm de maestria de frutas, auto-farm de ossos e raid solo sem lag.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/WAzureHub/BloxFruits/main/Loader.lua"))()',
    hasKey: true,
    keyLink: 'https://linkvertise.com/wazurehub-key-blox',
    status: 'Working',
    categories: ['Blox Fruits', 'Race V4', 'Auto Farm', 'Mirage Finder'],
    views: 21300,
    copies: 16400,
    imageUrl: '/src/assets/images/wazure_hub_gui_1782673863639.jpg',
    features: [
      'Auto Mirage Island Finder (Avisa quando a ilha secreta surgir)',
      'Race V4 Auto Trials helper (Vença os testes de raça sozinho)',
      'Farm de Maestria de Frutas e Espadas rápido',
      'Fruit Rain Sniper (Coleta frutas lendárias que caem no mapa)',
      'Bypass de anti-cheat avançado para evitar banimentos'
    ],
    updatedDate: '27 Jun 2026',
    author: 'W-Azure Team'
  },
  {
    id: 'brookhaven-redz',
    title: 'Redz Hub - Brookhaven RP Premium',
    gameName: 'Brookhaven RP',
    description: 'Aproveite as ferramentas exclusivas da Redz Hub no Brookhaven! Libere carros e jatos gigantes vip, controle semáforos, controle casas dos outros, trolle com animações engraçadas e teleporte players.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/realredz/Brookhaven/main/Source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Brookhaven RP', 'Admin', 'Troll', 'Premium Unlock'],
    views: 15900,
    copies: 12850,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Desbloqueio instantâneo do Gamepass Premium do jogo',
      'Spawn de veículos customizados (Até jatos militares)',
      'Troll Aura (Empurra e derruba outros jogadores ao tocar neles)',
      'Controle remoto da luz e portas das casas da vizinhança',
      'Speed Hack de veículo e de corrida humana'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Redz Team'
  },
  {
    id: 'mm2-nexushub',
    title: 'Nexus Hub - MM2 ESP & Skin Changer',
    gameName: 'Murder Mystery 2',
    description: 'Outro script fantástico para MM2. Além do ESP completo de papéis e Silent Aim, vem equipado com um maravilhoso Skin Changer local para usar qualquer faca ou arma lendária do jogo de graça.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/NexusHubExploits/MM2/main/Nexus.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Murder Mystery 2', 'Skin Changer', 'ESP', 'Silent Aim'],
    views: 14200,
    copies: 11500,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Local Skin Changer (Desbloqueie todas as facas, armas e efeitos do jogo)',
      'Silent Aim Bot preciso para o Xerife eliminar o assassino',
      'ESP Skeleton e Box coloridos de papéis em tempo real',
      'Auto Claim de recompensas de eventos ativos',
      'Fly e Noclip com velocidade customizável'
    ],
    updatedDate: '26 Jun 2026',
    author: 'Nexus Team'
  },
  {
    id: 'adoptme-milkhub',
    title: 'Milk Hub - Adopt Me Auto Farm & Trade',
    gameName: 'Adopt Me!',
    description: 'Mod menu de ponta para automatizar tudo no Adopt Me. Farm de moedas em dobro jogando como bebê e cuidando de pet ativo, abertura rápida de ovos na creche e auto-trade seguro.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/MilkHub/AdoptMe/main/MilkHub.lua"))()',
    hasKey: true,
    keyLink: 'https://bstlar.com/milkhub-key-adoptme',
    status: 'Working',
    categories: ['Adopt Me!', 'Auto Farm', 'Baby Mode', 'Trade Helper'],
    views: 11900,
    copies: 8900,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto Farm de Pets e Bebê de forma conjunta (Double Cash)',
      'Auto Open Eggs sem telas de espera irritantes',
      'Auto Feed e Shower para satisfazer necessidades dos pets',
      'Teleporte instantâneo para locais chaves da cidade',
      'Segurança total com anti-ban bypass integrado'
    ],
    updatedDate: '27 Jun 2026',
    author: 'Milk Hub Dev'
  },
  {
    id: 'blox-fruits-speed-hub',
    title: 'Speed Hub - Blox Fruits v20',
    gameName: 'Blox Fruits',
    description: 'Um dos scripts de farm de Blox Fruits mais rápidos do mercado. Focado em auto-farm ultra acelerado de level, maestria de frutas e teleporte de ilhas sem detecção.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/AikoGamerYT/SpeedHub/main/Loader.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Blox Fruits', 'Auto Farm', 'Level', 'Speed'],
    views: 18900,
    copies: 15400,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Ultra Fast Auto Farm (Mais rápido e otimizado para celulares fracos)',
      'Auto Quest, Elite Bosses e Sea Events',
      'Dungeon Solo com bypass de barreira completo',
      'Fruit Snatcher instantâneo (Garante as melhores frutas)',
      'Ataque veloz editável (Custom Click Speed)'
    ],
    updatedDate: '28 Jun 2026',
    author: 'AikoDev'
  },
  {
    id: 'brookhaven-pluto-hub',
    title: 'Pluto Hub - Brookhaven RP Troll',
    gameName: 'Brookhaven RP',
    description: 'O melhor script de troll e utilitários para Brookhaven RP. Libere todas as casas, spawne veículos customizados gigantes, voe pelo mapa e faça piadas com outros jogadores.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/PlutoDevelopers/Brookhaven/main/source.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Brookhaven RP', 'Troll', 'Unlock All', 'Admin'],
    views: 14500,
    copies: 11200,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Spawn de veículos premium gigantes de graça',
      'Auto Rob de cofres de casas próximas instantâneo',
      'Chat Spammer e comandos de administrador completos',
      'Invisibilidade e Ghost Mode contra banimento local',
      'Animações engraçadas de trollagem para usar com amigos'
    ],
    updatedDate: '28 Jun 2026',
    author: 'Pluto Team'
  },
  {
    id: 'mm2-ghost-hub',
    title: 'Ghost Hub - Murder Mystery 2 ESP',
    gameName: 'Murder Mystery 2',
    description: 'A central de trapaças mais leve para MM2. Contém ESP de alta precisão que pisca vermelho para o assassino e azul para o xerife, silent aimbot de xerife e velocidade ajustável para fuga.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/GhostHubExploits/MM2/main/Ghost.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Murder Mystery 2', 'ESP', 'Silent Aim', 'Speed'],
    views: 11300,
    copies: 9100,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'ESP de caixas de texto com cores de papéis (X-Ray)',
      'Auto Aim para derrubar o assassino de longe',
      'Modificador de velocidade de corrida (Walkspeed)',
      'Bypass completo de anti-cheat do MM2 ativo',
      'Auto-coleta de moedas silenciosa com limite seguro'
    ],
    updatedDate: '27 Jun 2026',
    author: 'Ghost Exploiters'
  },
  {
    id: 'slap-battles-project-wd',
    title: 'Project WD - Slap Battles Multi-Tool',
    gameName: 'Slap Battles',
    description: 'Script de alto desempenho para Slap Battles. Inclui Slap Aura de 360 graus que bate em qualquer jogador que chegar perto de você e teleporte automático de luvas raras.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/ProjectWD/SlapBattles/main/main.lua"))()',
    hasKey: false,
    status: 'Working',
    categories: ['Slap Battles', 'Auto Farm', 'Slap Aura', 'Teleport'],
    views: 9800,
    copies: 7900,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Slap Aura 360 Graus com alcance de toque ajustável',
      'Auto-evade de luvas mortais (Overkill, Link, etc.)',
      'Auto-farm de vitórias de forma silenciosa e estável',
      'Desbloqueador de badges e conquistas secretas na hora',
      'Anti-ragdoll instantâneo (Levanta na hora)'
    ],
    updatedDate: '28 Jun 2026',
    author: 'ProjectWD Team'
  },
  {
    id: 'anime-fighters-autofarm',
    title: 'AF Bot - Anime Fighters Simulator',
    gameName: 'Anime Fighters',
    description: 'O melhor bot automatizado para Anime Fighters Simulator. Auto-farm de moedas, abertura instantânea de estrelas, auto-craft de personagens brilhantes e fusão automática de excedentes.',
    code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/AnimeFightersExploits/AFS/main/AFS.lua"))()',
    hasKey: true,
    keyLink: 'https://linkvertise.com/animefighters-bot-key',
    status: 'Working',
    categories: ['Anime Fighters', 'Auto Farm', 'Auto Open', 'Auto Merge'],
    views: 12100,
    copies: 8700,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Auto-farm de NPCs e Bosses com multiplicador de dano local',
      'Auto Open Stars super rápido sem delay de animação',
      'Auto Craft de guerreiros Shiny e Fusão automática de duplicadas',
      'Modo anti-lag total para servidores públicos populosos',
      'Auto Equip de melhores lutadores para o farm atual'
    ],
    updatedDate: '28 Jun 2026',
    author: 'AF Developers'
  }
];

// Gerador dinâmico de mais 80 scripts de altíssima qualidade
const dynamicScripts: RobloxScript[] = [];

const gamesList = [
  { name: 'Blox Fruits', categories: ['Blox Fruits', 'Auto Farm', 'Raid', 'Sea Events'] },
  { name: 'Brookhaven RP', categories: ['Brookhaven RP', 'Admin', 'Troll', 'Unlock All'] },
  { name: 'Pet Simulator 99', categories: ['Pet Simulator 99', 'Auto Farm', 'Auto Egg', 'Auto Hatch'] },
  { name: 'Murder Mystery 2', categories: ['Murder Mystery 2', 'ESP', 'Silent Aim', 'Coin Farm'] },
  { name: 'Blade Ball', categories: ['Blade Ball', 'Auto Parry', 'Combat', 'Combat Assist'] },
  { name: 'Fisch', categories: ['Fisch', 'Auto Farm', 'Auto Shake', 'Fishing'] },
  { name: 'Sol\'s RNG', categories: ['Sol\'s RNG', 'Auto Roll', 'Auto Craft', 'Collect Aura'] },
  { name: 'Slap Battles', categories: ['Slap Battles', 'Auto Farm', 'Slap Aura', 'Dodge'] },
  { name: 'Doors', categories: ['Doors', 'ESP', 'Auto Solve', 'Survival'] },
  { name: 'Bedwars', categories: ['Bedwars', 'Combat', 'KillAura', 'Fly'] },
  { name: 'Rivals', categories: ['Rivals', 'Silent Aim', 'ESP', 'Wallhack'] },
  { name: 'Adopt Me!', categories: ['Adopt Me!', 'Auto Farm', 'Pet Farm', 'Money'] },
  { name: 'Arsenal', categories: ['Arsenal', 'Aimbot', 'ESP', 'Silent Aim'] },
  { name: 'King Legacy', categories: ['King Legacy', 'Auto Farm', 'Raid', 'Quest'] },
  { name: 'Shindo Life', categories: ['Shindo Life', 'Auto Quest', 'Scroll Hunter', 'Spins'] },
  { name: 'Evade', categories: ['Evade', 'ESP', 'Auto Revive', 'Survival'] },
  { name: 'Jailbreak', categories: ['Jailbreak', 'Auto Rob', 'Aimbot', 'Teleport'] },
  { name: 'Toilet Tower Defense', categories: ['Toilet Tower Defense', 'Auto Farm', 'Auto Place', 'Auto Play'] },
  { name: 'Strongest Battlegrounds', categories: ['Strongest Battlegrounds', 'Combat', 'Auto Combo', 'KillAura'] },
  { name: 'Fruit Battlegrounds', categories: ['Fruit Battlegrounds', 'Auto Farm', 'Auto Level', 'Combat'] }
];

const hubsList = [
  'Venyx Hub', 'Mukuro Hub', 'Hoho Hub', 'Thunder Z', 'Ghost Hub', 'Fluxus Mobile', 'Aether Hub',
  'Solaris Hub', 'Nebula Hub', 'Gamer Robot', 'Pluto Hub', 'Xenon Hub', 'Quantum Hub', 'Phantom Hub',
  'Void Hub', 'EZ Hub', 'Kiwi Hub', 'Zenix Hub', 'Vape v5 Client', 'Apex Hub', 'Overdrive GUI',
  'Prime Hub', 'Redux GUI', 'Spectre Hub', 'Rage Client', 'Zenith Hub', 'Nova Hub', 'Lunar Hub',
  'Spectral Hub', 'BlackTrap Hub', 'Cupid Hub', 'Milk Hub', 'Project WD', 'Aiko Hub', 'String Hub',
  'Vector Hub', 'Shadow Hub', 'Chaos Hub', 'Ice Hub', 'Zinity Hub'
];

const featuresPool = [
  'Auto Farm de moedas e itens de forma ultra veloz',
  'ESP completo com caixas e linhas 3D em tempo real',
  'Silent Aim de alta precisão com filtro de alvos',
  'Bypass completo do sistema Anti-Cheat do jogo',
  'Teleporte inteligente para todos os checkpoints e ilhas',
  'Ajuste fino de velocidade de caminhada e pulo infinito',
  'Modo anti-lag perfeito para dispositivos móveis fracos',
  'Farm automático de bosses e missões diárias',
  'Coleta silenciosa de drops e baús do mapa',
  'Desbloqueador de todas as skins e cosméticos premium locais',
  'Auto Buy e Auto Craft de equipamentos raros',
  'Auto Reconnect ativo para evitar quedas de servidor',
  'Ataque rápido otimizado (Fast Attack Fast Speed)',
  'Filtro de lixo que descarta itens inúteis automaticamente',
  'Aura de dano e combate automático'
];

const authorsList = [
  'RobloxCoder', 'ZeroDev', 'Alpha Exploiter', 'Specter Team', 'Aero Studios',
  'Hyperion Bypassers', 'Zenith Group', 'ByteCraft', 'MP Team', 'Delta Developers'
];

// Gera exatamente 240 scripts novos adicionais
for (let i = 1; i <= 240; i++) {
  const game = gamesList[i % gamesList.length];
  const hub = hubsList[(i * 3) % hubsList.length];
  const author = authorsList[(i * 7) % authorsList.length];
  
  const id = `dynamic-${game.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${hub.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${i}`;
  const title = `${hub} - ${game.name} Premium Pro v${(i % 5) + 1}.${i % 10}`;
  const description = `Experimente o poder máximo de ${hub} no jogo ${game.name}! Desenvolvido com tecnologia de ponta para automatizar completamente sua gameplay com segurança e performance profissional.`;
  const githubUser = hub.replace(/\s+/g, '');
  const repoName = game.name.replace(/\s+/g, '');
  const code = `loadstring(game:HttpGet("https://raw.githubusercontent.com/${githubUser}/${repoName}/main/script_${i}.lua"))()`;
  
  const hasKey = i % 4 === 0; // 25% dos scripts possuem key
  const keyLink = hasKey ? `https://linkvertise.com/key-system-${i}/${id}` : undefined;
  
  const views = 5000 + (i * 240) + (i % 3) * 1200;
  const copies = Math.floor(views * (0.6 + (i % 10) * 0.03));
  
  const features: string[] = [];
  const featureIndices = new Set<number>();
  while (featureIndices.size < 5) {
    featureIndices.add((i + featureIndices.size * 3) % featuresPool.length);
  }
  featureIndices.forEach(idx => features.push(featuresPool[idx]));

  dynamicScripts.push({
    id,
    title,
    gameName: game.name,
    description,
    code,
    hasKey,
    keyLink,
    status: i % 15 === 0 ? 'Updating' : i % 25 === 0 ? 'Patched' : 'Working',
    categories: [...game.categories, hub],
    views,
    copies,
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features,
    updatedDate: `${28 - (i % 5)} Jun 2026`,
    author
  });
}

export const ROBLOX_SCRIPTS: RobloxScript[] = [
  ...BASE_ROBLOX_SCRIPTS,
  ...dynamicScripts
];

export const EXECUTORS: Executor[] = [
  {
    id: 'delta-android',
    name: 'Delta Executor (Android / PC)',
    platform: 'Multiplatform',
    isFree: true,
    hasKey: true,
    status: 'Working',
    rating: 4.8,
    version: 'v2.645',
    downloadUrl: 'https://delta-executor.com/download',
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Excelente taxa de injeção (UNC 92%+)',
      'Interface limpa com abas de favoritos',
      'Suporta scripts pesados como Redz e Hoho Hub',
      'Suporte multiplataforma (Android e Windows PC)',
      'Atualizações semanais rápidas após updates do Roblox'
    ],
    size: '142 MB'
  },
  {
    id: 'arceus-x-neo',
    name: 'Arceus X NEO (Android / iOS)',
    platform: 'Android/iOS',
    isFree: true,
    hasKey: true,
    status: 'Working',
    rating: 4.6,
    version: 'v3.1.2',
    downloadUrl: 'https://spdmteam.com/arceusx',
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'O executor mobile pioneiro com enorme comunidade',
      'Hub de scripts interno pré-instalado',
      'Mod Menu embutido (Fly, Speed, Teleporte, Zoom)',
      'Injetor seguro com Anti-Ban aprimorado',
      'Suporta Android Emulator e iOS nativo via Sideload'
    ],
    size: '138 MB'
  },
  {
    id: 'codex-exec',
    name: 'Codex Client (Android / iOS / PC)',
    platform: 'Multiplatform',
    isFree: true,
    hasKey: true,
    status: 'Working',
    rating: 4.7,
    version: 'v2.644.2',
    downloadUrl: 'https://codex.lol',
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Injeção extremamente leve sem lag',
      'Incrível compatibilidade UNC (96% de scripts compatíveis)',
      'Sem anúncios invasivos de terceiros no app',
      'Sistema de chave rápido de apenas 2 etapas',
      'Fácil configuração em dispositivos root e não-root'
    ],
    size: '125 MB'
  },
  {
    id: 'wave-pc',
    name: 'Wave Executor (PC Windows)',
    platform: 'PC',
    isFree: true,
    hasKey: true,
    status: 'Working',
    rating: 4.5,
    version: 'v1.4a',
    downloadUrl: 'https://getwave.gg',
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Executor de PC vindo para substituir antigos injetores',
      'Taxa UNC incrível de 99% (Suporta todos os scripts existentes)',
      'Painel em estilo profissional com editor com auto-complete',
      'Versão gratuita com chave e versão Premium paga sem chave',
      'Suporta injeção em instâncias múltiplas do Roblox'
    ],
    size: '78 MB'
  },
  {
    id: 'synapse-z-pc',
    name: 'Synapse Z (PC)',
    platform: 'PC',
    isFree: false,
    hasKey: false,
    status: 'Working',
    rating: 4.9,
    version: 'v1.0.8',
    downloadUrl: 'https://synapsez.gg',
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Totalmente livre de chave (Keyless)',
      'O executor de PC mais estável do mercado atual',
      'Desenvolvedores renomados e atualizações imediatas',
      'Bypass total do Roblox Hyperion Anti-Cheat',
      'Biblioteca de desenhos e visualização 3D perfeita (ESP suave)'
    ],
    size: '52 MB'
  },
  {
    id: 'hydrogen-mobile',
    name: 'Hydrogen Executor (Android / macOS)',
    platform: 'Multiplatform',
    isFree: true,
    hasKey: true,
    status: 'Updating',
    rating: 4.4,
    version: 'v2.1',
    downloadUrl: 'https://hydrogen.sh',
    imageUrl: '/src/assets/images/generic_cheat_gui_1782673887172.jpg',
    features: [
      'Muito leve, otimizado para celulares fracos',
      'Injetor oficial com suporte para macOS (Intel/M1/M2)',
      'Suporte amigável por Discord 24/7',
      'Interface simples e minimalista',
      'Opção de salvar scripts favoritos na nuvem do Hydrogen'
    ],
    size: '95 MB'
  }
];

export const OWNER_CONTACT_DETAILS = {
  name: 'Equipe SCRIPTS OFICIAL MP',
  description: 'Tem alguma dúvida, quer enviar seu próprio script ou fazer uma parceria? Entre em contato pelos canais oficiais abaixo ou envie uma mensagem diretamente pelo formulário!',
  discordUrl: 'https://discord.gg/scripts-oficial-mp',
  youtubeUrl: 'https://youtube.com/@scripts-oficial-mp',
  telegramUrl: 'https://t.me/scripts_oficial_mp',
  whatsappUrl: 'https://wa.me/5599999999999',
  email: 'contato.scripts.mp@gmail.com'
};
