export interface ClubTitle {
  competition: string;
  count: number;
  emoji: string;
}

export interface Club {
  id: string;
  name: string;
  shortName: string;
  country: string;
  flag: string;
  founded: number;
  stadium: string;
  capacity: number;
  colors: { primary: string; secondary: string; gradient: string };
  titles: ClubTitle[];
  legends: string[];
  currentStars: string[];
  description: string;
  history: string;
  style: string;
  rivalry: string;
  emoji: string;
  badge: string;
  funFact: string;
  totalTrophies: number;
}

export const clubs: Club[] = [
  {
    id: 'real-madrid',
    name: 'Real Madrid CF',
    shortName: 'Real Madrid',
    country: 'Espagne',
    flag: '🇪🇸',
    founded: 1902,
    stadium: 'Santiago Bernabéu',
    capacity: 81044,
    colors: { primary: '#FFFFFF', secondary: '#FFD700', gradient: 'from-white to-yellow-100' },
    titles: [
      { competition: 'Ligue des Champions / C1', count: 15, emoji: '🏆' },
      { competition: 'La Liga', count: 36, emoji: '🥇' },
      { competition: 'Copa del Rey', count: 20, emoji: '🏅' },
      { competition: 'Coupe Intercontinentale / Mondial des Clubs', count: 8, emoji: '🌍' },
    ],
    legends: ['Alfredo Di Stéfano', 'Ferenc Puskás', 'Zinédine Zidane', 'Ronaldo Nazário', 'Cristiano Ronaldo', 'Raúl', 'Iker Casillas'],
    currentStars: ['Vinicius Jr', 'Jude Bellingham', 'Kylian Mbappé', 'Rodrygo', 'Luka Modric'],
    description: 'Le club le plus titré de l\'histoire du football mondial. Fondé en 1902 à Madrid, le Real est synonyme de grandeur, de galactiques et de remontadas impossibles. Surnommé "La Casa Blanca" (La Maison Blanche), il attire les meilleurs joueurs du monde depuis un siècle.',
    history: 'Fondé en 1902, le Real Madrid domine la première Coupe d\'Europe en remportant les 5 premières éditions de la Coupe des clubs champions (1956-1960). L\'ère des "Galactiques" (2000-2006) avec Zidane, Ronaldo, Beckham, Figo redéfinit le "marketing football". L\'ère Cristiano Ronaldo (2009-2018) et les 4 LDC en 5 ans confirment le statut hors norme du club.',
    style: 'Jeu offensif, remontadas épiques, mentalité "Hala Madrid"',
    rivalry: 'El Clásico vs FC Barcelone (rivalité historique la plus suivie au monde)',
    emoji: '👑',
    badge: '⚪',
    funFact: 'Le Real Madrid est le seul club à avoir remporté la Ligue des Champions avec 3 équipes différentes de joueurs (1956, 1998, 2002, 2014-2018).',
    totalTrophies: 97,
  },
  {
    id: 'fc-barcelona',
    name: 'FC Barcelona',
    shortName: 'Barça',
    country: 'Espagne',
    flag: '🇪🇸',
    founded: 1899,
    stadium: 'Estadi Olímpic Lluís Companys (Spotify Camp Nou en rénovation)',
    capacity: 99354,
    colors: { primary: '#A50044', secondary: '#004D98', gradient: 'from-blue-800 to-red-700' },
    titles: [
      { competition: 'Ligue des Champions', count: 5, emoji: '🏆' },
      { competition: 'La Liga', count: 27, emoji: '🥇' },
      { competition: 'Copa del Rey', count: 31, emoji: '🏅' },
      { competition: 'Coupe UEFA / Europa League', count: 1, emoji: '🥈' },
    ],
    legends: ['Johan Cruyff', 'Ronaldinho', 'Lionel Messi', 'Xavi Hernández', 'Andrés Iniesta', 'Carles Puyol', 'Victor Valdés'],
    currentStars: ['Robert Lewandowski', 'Pedri', 'Gavi', 'Lamine Yamal', 'Raphinha'],
    description: '"Més que un club" (Plus qu\'un club) : le Barça est l\'identité catalane, une philosophie de jeu (le tiki-taka) et une école de football (La Masia). Sous Johan Cruyff puis Pep Guardiola, le club a révolutionné le football mondial.',
    history: 'Fondé en 1899 par des expatriés suisses à Barcelone. La philosophie du jeu positionnel est introduite par Johan Cruyff comme joueur puis comme entraîneur. La génération Guardiola (2008-2012) remporte tout et est considérée comme la meilleure équipe de club de l\'histoire. L\'ère Messi (2004-2021) produit 4 LDC, 10 La Liga et des dizaines de records.',
    style: 'Tiki-taka, possession, La Masia, pressing haut',
    rivalry: 'El Clásico vs Real Madrid + Derby catalan vs Espanyol',
    emoji: '🔵🔴',
    badge: '🔴',
    funFact: 'La Masia, le centre de formation du Barça, a produit simultanément les 3 finalistes du Ballon d\'Or 2010 : Messi, Xavi et Iniesta.',
    totalTrophies: 78,
  },
  {
    id: 'bayern-munich',
    name: 'FC Bayern Munich',
    shortName: 'Bayern',
    country: 'Allemagne',
    flag: '🇩🇪',
    founded: 1900,
    stadium: 'Allianz Arena',
    capacity: 75024,
    colors: { primary: '#DC052D', secondary: '#0066B2', gradient: 'from-red-800 to-red-600' },
    titles: [
      { competition: 'Bundesliga', count: 32, emoji: '🥇' },
      { competition: 'Ligue des Champions', count: 6, emoji: '🏆' },
      { competition: 'DFB-Pokal', count: 20, emoji: '🏅' },
      { competition: 'Supercoupe d\'Europe', count: 2, emoji: '⭐' },
    ],
    legends: ['Franz Beckenbauer', 'Gerd Müller', 'Sepp Maier', 'Karl-Heinz Rummenigge', 'Oliver Kahn', 'Franck Ribéry', 'Robert Lewandowski'],
    currentStars: ['Harry Kane', 'Jamal Musiala', 'Thomas Müller', 'Manuel Neuer'],
    description: 'Le géant allemand, connu pour sa domination domestique implacable (32 Bundesliga) et ses triomphes européens. Le Bayern est le club le plus riche et le plus puissant d\'Allemagne, attirant les meilleures recrues mondiales et formant des génies comme Thomas Müller.',
    history: 'Fondé en 1900, le Bayern connaît son âge d\'or dans les années 70 avec Beckenbauer et Gerd Müller (3 C1 d\'affilée). La décennie Jupp Heynckes/Pep Guardiola (2012-2016) produit le Triplé historique 2013. Leurs méthodes de gestion financière prudente en font un modèle de stabilité en Europe.',
    style: 'Gegenpress, physique, discipline tactique germanique',
    rivalry: 'Klassiker vs Borussia Dortmund (le plus grand derby d\'Allemagne)',
    emoji: '🔴⚽',
    badge: '🔴',
    funFact: 'Le Bayern est l\'un des rares clubs au monde à être détenu à 75% par ses membres-supporters, refusant tout fonds souverain ou investisseur externe.',
    totalTrophies: 82,
  },
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    shortName: 'PSG',
    country: 'France',
    flag: '🇫🇷',
    founded: 1970,
    stadium: 'Parc des Princes',
    capacity: 47929,
    colors: { primary: '#003F7F', secondary: '#DA291C', gradient: 'from-blue-900 to-red-700' },
    titles: [
      { competition: 'Ligue 1', count: 12, emoji: '🥇' },
      { competition: 'Coupe de France', count: 15, emoji: '🏅' },
      { competition: 'Coupe UEFA (1996)', count: 1, emoji: '🏆' },
    ],
    legends: ['Ronaldinho', 'George Weah', 'Raí', 'Safet Sušić', 'Zlatan Ibrahimovic'],
    currentStars: ['Ousmane Dembélé', 'Fabian Ruiz', 'Gianluigi Donnarumma', 'Marquinhos', 'Achraf Hakimi'],
    description: 'Depuis le rachat par QSI (Qatar Sports Investments) en 2011, le PSG est devenu une superpuissance mondiale. Le club a accueilli les plus grandes stars mondiales — Ibrahimovic, Neymar, Messi, Mbappé — mais cherche encore sa première Ligue des Champions.',
    history: 'Fondé en 1970 par fusion de deux clubs parisiens. Longtemps club de supporters populaires avant le rachat qatari en 2011. Les "années galactiques" (2012-2024) avec des dépenses massives (Neymar 222M€ en 2017, record mondial). La finale de LDC 2020 contre le Bayern reste la plus belle épopée du club en Europe.',
    style: 'Possession, individualités, contre-attaque rapide',
    rivalry: 'Classique vs Olympique de Marseille (le plus vieux derby de France)',
    emoji: '🔵🔴',
    badge: '🗼',
    funFact: 'Le transfert de Neymar au PSG en 2017 (222M€) a coûté plus que le PIB annuel de certains pays, et a changé pour toujours l\'économie du football mondial.',
    totalTrophies: 52,
  },
  {
    id: 'manchester-united',
    name: 'Manchester United FC',
    shortName: 'Man United',
    country: 'Angleterre',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    founded: 1878,
    stadium: 'Old Trafford',
    capacity: 74140,
    colors: { primary: '#DA291C', secondary: '#FFE500', gradient: 'from-red-900 to-red-600' },
    titles: [
      { competition: 'Premier League', count: 20, emoji: '🥇' },
      { competition: 'Ligue des Champions / C1', count: 3, emoji: '🏆' },
      { competition: 'FA Cup', count: 13, emoji: '🏅' },
      { competition: 'League Cup', count: 6, emoji: '🥈' },
    ],
    legends: ['George Best', 'Bobby Charlton', 'Denis Law', 'Eric Cantona', 'Ryan Giggs', 'Roy Keane', 'Peter Schmeichel', 'Wayne Rooney', 'Cristiano Ronaldo'],
    currentStars: ['Bruno Fernandes', 'Marcus Rashford', 'Rasmus Hojlund', 'Kobbie Mainoo'],
    description: 'Le club le plus populaire d\'Angleterre et l\'un des plus reconnus au monde. Sous Sir Alex Ferguson (1986-2013), Man United a dominé la Premier League et remporté 3 Coupes d\'Europe. "Old Trafford" est surnommé "The Theatre of Dreams" (Le Théâtre des Rêves).',
    history: 'Fondé en 1878 sous le nom de Newton Heath. La tragédie aérienne de Munich (1958) emporte 8 joueurs des "Busby Babes". En 1968, United devient le premier club anglais à remporter la Coupe d\'Europe. L\'ère Ferguson (26 ans, 13 titres de Premier League, 2 Triplés) est sans égale dans l\'histoire du football anglais.',
    style: 'Jeu offensif, ailes rapides, mentalité never-give-up',
    rivalry: 'Manchester Derby vs City + North-West Derby vs Liverpool',
    emoji: '🔴😈',
    badge: '😈',
    funFact: 'Sir Alex Ferguson a géré Man United pendant 26 ans et 8 mois, remportant 38 trophées. Il est considéré comme le meilleur entraîneur de l\'histoire du football britannique.',
    totalTrophies: 66,
  },
];

export const getClubById = (id: string) => clubs.find(c => c.id === id);
