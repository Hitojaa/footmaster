export interface MatchGoal {
  player: string;
  minute: number;
  team: 'home' | 'away';
  special?: string;
}

export interface LegendaryMatch {
  id: string;
  name: string;
  competition: string;
  competitionEmoji: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeFlag: string;
  awayFlag: string;
  score: string;
  venue: string;
  attendance: number;
  emoji: string;
  importance: string;
  description: string;
  context: string;
  keyPlayers: string[];
  whyLegendary: string;
  bgGradient: string;
  funFact: string;
}

export const legendaryMatches: LegendaryMatch[] = [
  {
    id: 'finale-1998',
    name: 'La nuit de Saint-Denis',
    competition: 'Coupe du Monde — Finale',
    competitionEmoji: '🌍',
    date: '12 juillet 1998',
    homeTeam: 'France',
    awayTeam: 'Brésil',
    homeFlag: '🇫🇷',
    awayFlag: '🇧🇷',
    score: '3 - 0',
    venue: 'Stade de France, Saint-Denis',
    attendance: 75000,
    emoji: '🇫🇷',
    importance: '⭐⭐⭐⭐⭐',
    description: 'La France remporte sa première Coupe du Monde sur ses terres dans une atmosphère électrique. Zinédine Zidane, héros de la soirée avec deux buts de la tête, offre un titre historique aux Bleus.',
    context: 'Le Brésil, favori avec Ronaldo, arrive en finale affaibli par une crise mystérieuse — Ronaldo fait une crise dans la nuit précédant le match. La France, emmenée par Zidane, est en feu depuis le début du tournoi. C\'est la finale la plus attendue en France depuis… toujours.',
    keyPlayers: ['Zinédine Zidane (2 buts)', 'Emmanuel Petit (3e but)', 'Lilian Thuram', 'Didier Deschamps'],
    whyLegendary: 'Premier titre de la France. Zidane en dieu vivant. La nuit où toute la France a célébré en même temps. L\'image de Zidane projetée sur l\'Arc de Triomphe reste l\'une des plus iconiques du sport français.',
    bgGradient: 'from-blue-900 via-red-800 to-blue-900',
    funFact: 'Après le match, les Champs-Élysées ont accueilli plus de 1,5 million de personnes — la plus grande foule spontanée de l\'histoire de France depuis la Libération.',
  },
  {
    id: 'remontada-liverpool-2005',
    name: 'The Miracle of Istanbul',
    competition: 'Ligue des Champions — Finale',
    competitionEmoji: '⭐',
    date: '25 mai 2005',
    homeTeam: 'AC Milan',
    awayTeam: 'Liverpool',
    homeFlag: '🇮🇹',
    awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    score: '3 - 3 (TAB : 3-2)',
    venue: 'Atatürk Olympic Stadium, Istanbul',
    attendance: 69000,
    emoji: '🔴',
    importance: '⭐⭐⭐⭐⭐',
    description: 'Liverpool, mené 3-0 à la mi-temps face à l\'AC Milan, remonte et gagne aux tirs au but. La plus grande remontée de l\'histoire de la Ligue des Champions. Steven Gerrard galvanise l\'équipe dans le vestiaire.',
    context: 'L\'AC Milan aligne Kaká, Shevchenko, Pirlo, Maldini — une génération dorée. Liverpool est mené 3-0 à la mi-temps et semble condamné. Steven Gerrard demande à ses coéquipiers de jouer pour l\'honneur lors de la mi-temps. Ce qui suit est incroyable.',
    keyPlayers: ['Steven Gerrard (but + capitaine inspirant)', 'Vladimir Šmicer (2e but)', 'Xabi Alonso (3e but)', 'Jerzy Dudek (arrêts décisifs aux TAB)'],
    whyLegendary: 'Remontée de 3-0 en 6 minutes en deuxième mi-temps. Dudek arrête deux tentatives de Shevchenko aux TAB avec ses jambes tremblantes. Surnommée "The Miracle of Istanbul", c\'est la finale de LDC la plus dramatique de l\'histoire.',
    bgGradient: 'from-red-900 via-red-700 to-red-900',
    funFact: 'Jerzy Dudek a imité la "danse de la gigue" de Bruce Grobbelaar (gardien légendaire de Liverpool) sur sa ligne de but pendant les TAB — une tactique psychologique qui a perturbé les tireurs du Milan.',
  },
  {
    id: 'finale-2022',
    name: 'La Finale du Siècle',
    competition: 'Coupe du Monde — Finale',
    competitionEmoji: '🌍',
    date: '18 décembre 2022',
    homeTeam: 'Argentine',
    awayTeam: 'France',
    homeFlag: '🇦🇷',
    awayFlag: '🇫🇷',
    score: '3 - 3 (TAB : 4-2)',
    venue: 'Lusail Iconic Stadium, Qatar',
    attendance: 88966,
    emoji: '🐐',
    importance: '⭐⭐⭐⭐⭐',
    description: 'La finale la plus folle de l\'histoire de la Coupe du Monde. L\'Argentine mène 2-0, la France remonte à 3-3 grâce au hat-trick de Mbappé. L\'Argentine l\'emporte aux tirs au but. Messi sacré champion du monde.',
    context: 'L\'Argentine était menée à 2-0 à la 79e minute. Mbappé marque deux fois en 97 secondes. L\'Argentina ajoute un 3e but en prolongation, Mbappé marque encore pour égaliser. Aux tirs au but, Dibu Martinez arrête Coman et Tchouaméni. Messi soulève enfin la Coupe du Monde après 17 ans de carrière internationale.',
    keyPlayers: ['Lionel Messi (2 buts + penalty)', 'Kylian Mbappé (3 buts, hat-trick)', 'Angel Di María', 'Emiliano "Dibu" Martinez (héros des TAB)'],
    whyLegendary: 'Considérée unanimement comme la plus grande finale de Coupe du Monde de l\'histoire. Le débat Messi vs Ronaldo tranché (symboliquement) pour beaucoup. Mbappé avec un hat-trick en finale sans gagner — performance historique. Messi avec le titre qui complète sa légende.',
    bgGradient: 'from-sky-900 via-indigo-800 to-blue-900',
    funFact: 'C\'est la première fois depuis 1966 qu\'un joueur marque un hat-trick en finale de Coupe du Monde — et la première fois qu\'un joueur de l\'équipe perdante le fait.',
  },
  {
    id: 'main-de-dieu',
    name: 'La Main de Dieu',
    competition: 'Coupe du Monde — Quart de finale',
    competitionEmoji: '🌍',
    date: '22 juin 1986',
    homeTeam: 'Argentine',
    awayTeam: 'Angleterre',
    homeFlag: '🇦🇷',
    awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    score: '2 - 1',
    venue: 'Stade Azteca, Mexico City',
    attendance: 114580,
    emoji: '🤚',
    importance: '⭐⭐⭐⭐⭐',
    description: 'Diego Maradona marque deux buts en 4 minutes : d\'abord de la main (la "Main de Dieu"), puis le "But du Siècle" après avoir dribblé 5 joueurs anglais. Le match le plus emblématique de l\'histoire du football.',
    context: '4 ans après la guerre des Malouines entre l\'Argentine et l\'Angleterre. La tension politique est palpable. Maradona, dieu vivant en Argentine, décide seul de l\'issue du match avec deux des buts les plus célèbres de l\'histoire.',
    keyPlayers: ['Diego Maradona (2 buts iconiques)', 'Peter Shilton (gardien anglais trompé par la main)'],
    whyLegendary: 'Le "But du Siècle" a été élu meilleur but de l\'histoire par les fans FIFA. La "Main de Dieu" est le moment de triche le plus célèbre du football, revendiqué par Maradona comme une revanche politique. Ce match résume à lui seul le génie et le diable qui cohabitaient en Maradona.',
    bgGradient: 'from-sky-900 via-blue-800 to-indigo-800',
    funFact: 'Maradona a déclaré que le premier but (de la main) avait été marqué "un poco con la cabeza de Maradona y otro poco con la mano de Dios" (un peu de la tête de Maradona, un peu de la main de Dieu).',
  },
  {
    id: 'remontada-barcelona-2017',
    name: 'La Remontada',
    competition: 'Ligue des Champions — Huitièmes de finale',
    competitionEmoji: '⭐',
    date: '8 mars 2017',
    homeTeam: 'FC Barcelone',
    awayTeam: 'PSG',
    homeFlag: '🇪🇸',
    awayFlag: '🇫🇷',
    score: '6 - 1',
    venue: 'Camp Nou, Barcelone',
    attendance: 96290,
    emoji: '🔵🔴',
    importance: '⭐⭐⭐⭐⭐',
    description: 'Le Barça, mené 4-0 à l\'aller par le PSG, réalise la plus grande remontada de l\'histoire de la LDC en gagnant 6-1 au Camp Nou. Sergi Roberto marque le but de la qualification à la 95e minute.',
    context: 'Le PSG avait gagné 4-0 à l\'aller avec un Cavani et un Di María éblouissants. Personne ne croyait au miracle. Le Barça commence à remonter, puis un penalty controversé est accordé. À la 90e+5, Neymar dribble, Cavani rate la balle, Sergi Roberto marque... Camp Nou explose.',
    keyPlayers: ['Neymar (but + passes décisives + meneur de la remontada)', 'Sergi Roberto (95e minute)', 'Luis Suárez', 'Gerard Piqué'],
    whyLegendary: 'Impossible devenu possible. La remontada la plus folle de l\'histoire de la LDC. Neymar en grand soir. Le Camp Nou dans un état de délire indescriptible. Le PSG traumatisé pour des années (et investit 222M€ dans Neymar quelques mois plus tard pour éviter ce scénario).',
    bgGradient: 'from-blue-900 via-purple-800 to-red-800',
    funFact: 'Le but de Sergi Roberto à la 95e minute a généré un tel bruit que les sismographes de l\'Institut Géographique de Catalogne ont détecté une secousse dans les environs du Camp Nou.',
  },
];

export const getMatchById = (id: string) => legendaryMatches.find(m => m.id === id);
