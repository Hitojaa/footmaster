export type Era = 'legend' | 'current' | 'talent';

export interface Trophy {
  name: string;
  count: number;
  emoji: string;
}

export interface Player {
  id: string;
  name: string;
  nickname?: string;
  nationality: string;
  flag: string;
  position: string;
  positionEmoji: string;
  era: Era;
  clubs: string[];
  years: string;
  trophies: Trophy[];
  highlights: string[];
  description: string;
  style: string;
  emoji: string;
  bgGradient: string;
  stats?: {
    goals?: number;
    assists?: number;
    appearances?: number;
    balonsOr?: number;
  };
  funFact: string;
}

export const players: Player[] = [
  {
    id: 'messi',
    name: 'Lionel Messi',
    nickname: 'La Pulga',
    nationality: 'Argentine',
    flag: '🇦🇷',
    position: 'Attaquant',
    positionEmoji: '⚡',
    era: 'current',
    clubs: ['FC Barcelone', 'PSG', 'Inter Miami'],
    years: '2004 – présent',
    trophies: [
      { name: 'Ballons d\'Or', count: 8, emoji: '🏅' },
      { name: 'Coupes du Monde', count: 1, emoji: '🌍' },
      { name: 'Ligues des Champions', count: 4, emoji: '🏆' },
      { name: 'Copa América', count: 1, emoji: '🥇' },
    ],
    highlights: [
      '91 buts en 2012 (record mondial absolu)',
      'Champion du Monde 2022 au Qatar',
      '8 Ballons d\'Or, record inégalé',
      'Auteur du plus beau but de l\'histoire du Barça vs Getafe',
      '672 buts avec le FC Barcelone',
    ],
    description: 'Considéré par beaucoup comme le plus grand joueur de l\'histoire du football. Né à Rosario, en Argentine, Messi a débuté au FC Barcelone à l\'âge de 13 ans après avoir été recruté alors qu\'il souffrait d\'un trouble de la croissance que le club a accepté de traiter. Sa vision de jeu, sa dribble et son sens du but en font un être à part. En 2022, il a enfin couronné sa carrière avec le titre mondial, répondant ainsi à ses détracteurs.',
    style: 'Dribbleur instinctif, vision 360°, finisseur froid',
    emoji: '🐐',
    bgGradient: 'from-blue-900 via-indigo-800 to-sky-700',
    stats: { goals: 839, assists: 380, balonsOr: 8 },
    funFact: 'À 13 ans, Messi a signé son premier contrat sur une serviette en papier car il n\'y avait rien d\'autre sous la main.',
  },
  {
    id: 'ronaldo',
    name: 'Cristiano Ronaldo',
    nickname: 'CR7',
    nationality: 'Portugais',
    flag: '🇵🇹',
    position: 'Attaquant',
    positionEmoji: '🚀',
    era: 'current',
    clubs: ['Sporting CP', 'Manchester United', 'Real Madrid', 'Juventus', 'Al Nassr'],
    years: '2002 – présent',
    trophies: [
      { name: 'Ballons d\'Or', count: 5, emoji: '🏅' },
      { name: 'Euros', count: 1, emoji: '🇪🇺' },
      { name: 'Ligues des Champions', count: 5, emoji: '🏆' },
      { name: 'Championnats', count: 7, emoji: '🥇' },
    ],
    highlights: [
      '900+ buts en carrière professionnelle',
      'Champion d\'Europe 2016 avec le Portugal',
      '5 Ligues des Champions (avec 3 clubs différents)',
      'Meilleur buteur de l\'histoire de la LDC (140 buts)',
      'Triple vainqueur du Soulier d\'Or européen',
    ],
    description: 'Issu d\'une famille modeste de l\'île de Madère, Cristiano Ronaldo est l\'incarnation du travail acharné. Détesté ou adulé, jamais indifférent, CR7 a redéfini les standards athlétiques du football moderne. Sa capacité à performer dans tous les grands clubs européens témoigne d\'une adaptabilité et d\'une détermination sans pareilles. Rival éternel de Messi, le débat CR7 vs Messi a transcendé le football.',
    style: 'Athlète complet, frappe surpuissante, jeu de tête',
    emoji: '👑',
    bgGradient: 'from-red-900 via-red-800 to-rose-700',
    stats: { goals: 906, assists: 250, balonsOr: 5 },
    funFact: 'CR7 dort 5 fois 90 minutes par jour (siestes incluses) selon une méthode scientifique de récupération.',
  },
  {
    id: 'zidane',
    name: 'Zinédine Zidane',
    nickname: 'Zizou',
    nationality: 'Français',
    flag: '🇫🇷',
    position: 'Milieu offensif',
    positionEmoji: '🎨',
    era: 'legend',
    clubs: ['Cannes', 'Bordeaux', 'Juventus', 'Real Madrid'],
    years: '1989 – 2006',
    trophies: [
      { name: 'Ballons d\'Or', count: 1, emoji: '🏅' },
      { name: 'Coupes du Monde', count: 1, emoji: '🌍' },
      { name: 'Euros', count: 1, emoji: '🇪🇺' },
      { name: 'Ligues des Champions', count: 1, emoji: '🏆' },
    ],
    highlights: [
      'Champion du Monde 1998 sur le sol français',
      'Double but de la tête en finale de Coupe du Monde vs Brésil',
      'Volée iconique en finale de LDC 2002 vs Leverkusen',
      'Meilleur joueur du Mondial 2006 malgré l\'expulsion',
      'Triple entraîneur vainqueur de la LDC au Real Madrid',
    ],
    description: 'Fils d\'immigrés algériens, né dans les quartiers nord de Marseille, Zidane a transcendé les frontières du sport pour devenir un symbole national français. Sur le terrain, son toucher de balle, sa roulette (la "Zidane") et sa vision du jeu en faisaient un artiste. Sa finale tragique vs l\'Italie en 2006 — marquée par le coup de tête sur Materazzi — est l\'une des images les plus iconiques du football mondial.',
    style: 'Technique suprême, roulette, contrôle oriental',
    emoji: '🎭',
    bgGradient: 'from-blue-900 via-blue-800 to-indigo-700',
    stats: { goals: 125, assists: 92, balonsOr: 1 },
    funFact: 'La "Zidane Roulette" est désormais enseignée dans les académies de football du monde entier. Elle porte officiellement son nom.',
  },
  {
    id: 'pele',
    name: 'Pelé',
    nickname: 'O Rei',
    nationality: 'Brésilien',
    flag: '🇧🇷',
    position: 'Attaquant',
    positionEmoji: '👑',
    era: 'legend',
    clubs: ['Santos FC', 'New York Cosmos'],
    years: '1956 – 1977',
    trophies: [
      { name: 'Coupes du Monde', count: 3, emoji: '🌍' },
      { name: 'Championnats du Brésil', count: 6, emoji: '🥇' },
      { name: 'Copa Libertadores', count: 2, emoji: '🏆' },
    ],
    highlights: [
      'Triple champion du monde (1958, 1962, 1970)',
      '1281 buts officiels en carrière',
      'Premier but en Coupe du Monde à 17 ans',
      'Sa virtuosité a stoppé une guerre civile au Nigéria en 1967',
      'Seul joueur à avoir remporté 3 Coupes du Monde',
    ],
    description: 'Edson Arantes do Nascimento, dit Pelé, est le "Roi du Football". Né dans la misère à Três Corações, il a commencé à jouer avec des balles de chiffon. À 17 ans, il remporte la Coupe du Monde 1958 et fait pleurer la planète entière. Son style — dribble instinctif, acrobaties, vitesse et sens du but — a défini le football brésilien pour l\'éternité. Décédé le 29 décembre 2022, il reste une légende universelle.',
    style: 'Improvisation, acrobaties, vitesse pure',
    emoji: '⭐',
    bgGradient: 'from-yellow-900 via-yellow-800 to-green-700',
    stats: { goals: 1281, appearances: 1363 },
    funFact: 'En 1967, lors de la guerre civile au Nigéria, les deux camps ont décrété un cessez-le-feu de 48h pour que Pelé puisse jouer un match d\'exhibition à Lagos.',
  },
  {
    id: 'ronaldo-r9',
    name: 'Ronaldo Nazário',
    nickname: 'R9 / O Fenômeno',
    nationality: 'Brésilien',
    flag: '🇧🇷',
    position: 'Attaquant',
    positionEmoji: '🌪️',
    era: 'legend',
    clubs: ['Cruzeiro', 'PSV', 'Barcelone', 'Inter Milan', 'Real Madrid', 'AC Milan'],
    years: '1993 – 2011',
    trophies: [
      { name: 'Ballons d\'Or', count: 2, emoji: '🏅' },
      { name: 'Coupes du Monde', count: 2, emoji: '🌍' },
      { name: 'Coupes UEFA', count: 1, emoji: '🏆' },
    ],
    highlights: [
      'Double champion du monde (1994, 2002)',
      '8 buts en phase finale du Mondial 2002 (record)',
      'Premier joueur à remporter 2 fois la FIFA World Player',
      'Revenu d\'une blessure au genou jugée irréparable',
      'Frappe surpuissante et vitesse de ballon inégalée',
    ],
    description: 'Le "Phénomène" brésilien est peut-être l\'attaquant le plus complet de l\'histoire. Sa puissance physique combinée à une technique brésilienne et une vitesse de ballon phénoménale en faisaient un monstre offensif. Ses blessures au genou répétées l\'ont privé de plusieurs années au sommet, mais à chaque retour, R9 a prouvé qu\'il était au-dessus de tout. Sa finale de 2002 (2 buts vs Allemagne) reste une masterclass absolue.',
    style: 'Vitesse fulgurante, dribble brésilienne, finition froide',
    emoji: '🌪️',
    bgGradient: 'from-green-900 via-green-800 to-yellow-700',
    stats: { goals: 415, balonsOr: 2 },
    funFact: 'La nuit avant la finale de la Coupe du Monde 1998, Ronaldo a fait une crise d\'épilepsie mystérieuse. Il a quand même joué, mais n\'était pas lui-même.',
  },
  {
    id: 'mbappe',
    name: 'Kylian Mbappé',
    nickname: 'KM7 / Donatello',
    nationality: 'Français',
    flag: '🇫🇷',
    position: 'Attaquant',
    positionEmoji: '⚡',
    era: 'current',
    clubs: ['Monaco', 'PSG', 'Real Madrid'],
    years: '2015 – présent',
    trophies: [
      { name: 'Coupes du Monde', count: 1, emoji: '🌍' },
      { name: 'Ligues 1', count: 6, emoji: '🥇' },
      { name: 'Ligues des Champions', count: 1, emoji: '🏆' },
    ],
    highlights: [
      'Champion du Monde à 19 ans (2018)',
      'Hat-trick en finale de Coupe du Monde 2022',
      '200+ buts avec le PSG',
      'Plus rapide que Usain Bolt dans certains sprints',
      'Signe au Real Madrid en 2024 (rêve d\'enfance)',
    ],
    description: 'Né à Bondy en Seine-Saint-Denis, Kylian Mbappé est le prodige de sa génération. Supporter du Real Madrid depuis l\'enfance, il a suivi un chemin fulgurant : Monaco, PSG, puis enfin le Real en 2024. Sa vitesse de pointe (36 km/h) et sa capacité à éliminer des défenseurs en font l\'un des joueurs les plus dangereux du monde. À seulement 25 ans, il vise déjà les sommets de l\'histoire du football.',
    style: 'Vitesse extrême, dribble en 1v1, finition technique',
    emoji: '⚡',
    bgGradient: 'from-blue-900 via-indigo-800 to-red-700',
    stats: { goals: 380, balonsOr: 0 },
    funFact: 'Mbappé reverse l\'intégralité de sa prime de Coupe du Monde 2018 (300 000€) à une association caritative pour enfants.',
  },
  {
    id: 'haaland',
    name: 'Erling Haaland',
    nickname: 'La Machine',
    nationality: 'Norvégien',
    flag: '🇳🇴',
    position: 'Avant-centre',
    positionEmoji: '💥',
    era: 'talent',
    clubs: ['Molde', 'RB Salzbourg', 'Borussia Dortmund', 'Manchester City'],
    years: '2016 – présent',
    trophies: [
      { name: 'Premier Leagues', count: 1, emoji: '🏆' },
      { name: 'FA Cups', count: 1, emoji: '🥇' },
      { name: 'Souliers d\'Or', count: 2, emoji: '👟' },
    ],
    highlights: [
      '52 buts en une saison de Premier League (record absolu)',
      'Triple buteur à ses débuts en LDC à 19 ans',
      '5 buts en 21 minutes pour Dortmund vs Séville',
      'Meilleur buteur de l\'histoire de la LDC par ratio buts/matchs',
      'Soulier d\'Or européen 2023',
    ],
    description: 'Fils du milieu Alfie Haaland, Erling est une anomalie physique : 1m95, 88 kg de muscles, et pourtant une technique et une vitesse dignes d\'un joueur léger. Ses 52 buts en Premier League en 2022/2023 ont pulvérisé le record vieux de 29 ans d\'Andy Cole. Il redéfinit ce que doit être un avant-centre moderne. À 24 ans, sa trajectoire vers les sommets de l\'histoire semble inexorable.',
    style: 'Physique surhumain, finition instinctive, vitesse de pointe',
    emoji: '🤖',
    bgGradient: 'from-sky-900 via-blue-800 to-cyan-700',
    stats: { goals: 310, balonsOr: 0 },
    funFact: 'Haaland mange du pudding bouilli de bœuf et de carottes à 14h précises chaque jour. Il ne déroge jamais à cette routine.',
  },
];

export const getPlayerById = (id: string) => players.find(p => p.id === id);
export const getLegends = () => players.filter(p => p.era === 'legend');
export const getCurrentPlayers = () => players.filter(p => p.era === 'current');
export const getTalents = () => players.filter(p => p.era === 'talent');
