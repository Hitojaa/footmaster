export interface IconicMoment {
  year: number;
  description: string;
  emoji: string;
}

export interface Competition {
  id: string;
  name: string;
  shortName: string;
  organizer: string;
  continent: string;
  emoji: string;
  frequency: string;
  participants: number;
  description: string;
  format: string;
  history: string;
  currentChampion: string;
  mostTitles: { team: string; count: number };
  topScorer: { name: string; goals: number; year?: string };
  iconicMoments: IconicMoment[];
  bgGradient: string;
  records: string[];
}

export const competitions: Competition[] = [
  {
    id: 'coupe-du-monde',
    name: 'Coupe du Monde FIFA',
    shortName: 'Mondial',
    organizer: 'FIFA',
    continent: 'Monde',
    emoji: '🌍',
    frequency: 'Tous les 4 ans',
    participants: 32,
    description: 'La compétition la plus regardée de la planète. Un mois de football intense qui unit 3,5 milliards de téléspectateurs. La Coupe du Monde est le tournoi sportif individuel le plus suivi de l\'histoire.',
    format: 'Phase de groupes (8 groupes de 4) → Huitièmes → Quarts → Demi-finales → Finale sur un mois. Le pays hôte change à chaque édition.',
    history: 'Première édition en 1930 en Uruguay (victoire uruguayenne). Interruption lors de la WWII (1942-1946). L\'édition 1958 révèle Pelé à 17 ans. La France remporte son premier titre en 1998 sur son sol. L\'Argentine de Messi sacre champion en 2022 au Qatar dans une finale épique vs France.',
    currentChampion: 'Argentine 🇦🇷 (2022)',
    mostTitles: { team: 'Brésil 🇧🇷', count: 5 },
    topScorer: { name: 'Miroslav Klose 🇩🇪', goals: 16 },
    iconicMoments: [
      { year: 1958, description: 'Pelé, 17 ans, pleure de joie après le titre du Brésil — image symbole du football', emoji: '😭' },
      { year: 1966, description: 'L\'Angleterre remporte son unique Coupe du Monde sur son sol', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { year: 1986, description: 'La "Main de Dieu" de Maradona vs Angleterre + son "But du siècle"', emoji: '🤚' },
      { year: 1994, description: 'La finale Brésil-Italie se décide aux tirs au but — Baggio rate le sien', emoji: '😔' },
      { year: 1998, description: 'Zidane marque deux fois de la tête, la France s\'impose 3-0 face au Brésil', emoji: '🇫🇷' },
      { year: 2010, description: 'L\'Espagne remporte son premier titre avec un seul but de Torres en finale', emoji: '🇪🇸' },
      { year: 2022, description: 'Argentina bat la France aux TAB après une remontée de 2-0 à 3-3 — finale légendaire', emoji: '🇦🇷' },
    ],
    bgGradient: 'from-yellow-900 via-orange-800 to-red-800',
    records: [
      'Plus longue série de victoires : Brésil (11 matchs, 2002)',
      'Plus grand écart en finale : Uruguay 4-2 Argentine (1930)',
      'Joueur le plus âgé en finale : Dani Alves (39 ans, 2022)',
      'Plus jeune buteur : Pelé (17 ans, 1958)',
    ],
  },
  {
    id: 'ligue-des-champions',
    name: 'UEFA Champions League',
    shortName: 'LDC / C1',
    organizer: 'UEFA',
    continent: 'Europe',
    emoji: '⭐',
    frequency: 'Annuel (saison sept → juin)',
    participants: 32,
    description: 'La compétition européenne de clubs la plus prestigieuse. L\'hymne "Champions" résonne dans les plus grands stades. Remporter la LDC est le rêve ultime de chaque footballeur européen.',
    format: 'Phase de groupes (8 groupes de 4) → Huitièmes → Quarts → Demi-finales → Finale en match unique dans une ville européenne sélectionnée.',
    history: 'Lancée en 1955 sous le nom de "Coupe des Clubs Champions". Le Real Madrid remporte les 5 premières éditions. L\'Ajax Amsterdam révolutionne le football dans les années 70. Le Milan AC de Sacchi domine les années 80-90. L\'ère moderne commence avec la réforme de 1992.',
    currentChampion: 'Real Madrid 🇪🇸 (2024)',
    mostTitles: { team: 'Real Madrid 🇪🇸', count: 15 },
    topScorer: { name: 'Cristiano Ronaldo 🇵🇹', goals: 140 },
    iconicMoments: [
      { year: 1999, description: 'Manchester United marque 2 buts en 2 minutes dans le temps additionnel vs Bayern — le Miracle de Barcelone', emoji: '😱' },
      { year: 2005, description: 'Liverpool remonte un 3-0 face à l\'AC Milan à la mi-temps et s\'impose aux tirs au but', emoji: '🔴' },
      { year: 2012, description: 'Chelsea bat le Bayern Munich... dans leur propre stade, l\'Allianz Arena', emoji: '🔵' },
      { year: 2019, description: 'Liverpool remonte 3-0 contre le Barça avec un but de corner direct de Shaqiri', emoji: '🎉' },
      { year: 2022, description: 'Le Real Madrid remonte 3 fois en retard (PSG, Chelsea, City, Liverpool) pour gagner le titre', emoji: '👑' },
    ],
    bgGradient: 'from-blue-900 via-indigo-800 to-purple-900',
    records: [
      'Meilleur buteur de l\'histoire : Cristiano Ronaldo (140 buts)',
      'Club le plus titré : Real Madrid (15 titres)',
      'Remontée la plus spectaculaire : Liverpool 3-0 → 3-3 vs AC Milan (2005)',
      'Plus jeune buteur en finale : Patrick Kluivert (18 ans, 1995)',
    ],
  },
  {
    id: 'euro',
    name: 'Championnat d\'Europe UEFA',
    shortName: 'Euro',
    organizer: 'UEFA',
    continent: 'Europe',
    emoji: '🇪🇺',
    frequency: 'Tous les 4 ans (décalé du Mondial)',
    participants: 24,
    description: 'La compétition nationale la plus relevée au monde avec les meilleures nations européennes. Souvent considéré comme plus difficile que la Coupe du Monde grâce au niveau élevé des nations participantes.',
    format: 'Phase de groupes (6 groupes de 4) → Huitièmes de finale → Quarts → Demi-finales → Finale. Les 24 meilleures nations européennes.',
    history: 'Première édition en 1960 (victoire soviétique). La France de Platini remporte l\'édition 1984. Le "Golden Goal" de David Trezeguet en 2000 offre le titre à la France. La génération dorée espagnole remporte 2 Euros consécutifs (2008, 2012) avec le tiki-taka de Del Bosque.',
    currentChampion: 'Espagne 🇪🇸 (2024)',
    mostTitles: { team: 'Espagne 🇪🇸', count: 4 },
    topScorer: { name: 'Cristiano Ronaldo 🇵🇹', goals: 14 },
    iconicMoments: [
      { year: 1984, description: 'Michel Platini marque 9 buts en 5 matchs — performance éblouissante jamais égalée', emoji: '⭐' },
      { year: 1992, description: 'Le Danemark, invité de dernière minute, remporte l\'Euro en battant l\'Allemagne', emoji: '🇩🇰' },
      { year: 2000, description: 'Trezeguet marque en Golden Goal — la France devient championne d\'Europe et du Monde', emoji: '🇫🇷' },
      { year: 2016, description: 'Le Portugal de Ronaldo gagne sans Ronaldo en finale — Éder marque en prolongation', emoji: '🇵🇹' },
      { year: 2021, description: 'Eriksen s\'effondre en plein match, sauvé par les secouristes — scène choquante', emoji: '❤️' },
    ],
    bgGradient: 'from-blue-900 via-blue-800 to-indigo-700',
    records: [
      'Plus de buts en un tournoi : Michel Platini (9 buts en 5 matchs, 1984)',
      'Nation la plus titrée : Espagne (4 titres)',
      'Victoire la plus large : Portugal 7-0 Russie (2004)',
      'Unique équipe sans étoile à gagner : Danemark (1992)',
    ],
  },
  {
    id: 'copa-america',
    name: 'Copa América',
    shortName: 'Copa',
    organizer: 'CONMEBOL',
    continent: 'Amérique du Sud',
    emoji: '🌎',
    frequency: 'Tous les 4 ans (parfois plus)',
    participants: 16,
    description: 'La plus ancienne compétition internationale de football (depuis 1916). La Copa América oppose les meilleures nations d\'Amérique du Sud avec un niveau technique exceptionnel — Brésil, Argentine, Uruguay, et leurs rivaux.',
    format: '3 groupes de 4 équipes (+ 4 invités). Phase de groupes → Quarts → Demi-finales → Finale. Les nations d\'Amérique centrale peuvent être invitées.',
    history: 'Première édition en 1916 en Argentine. L\'Uruguay domine les premières décennies. Le Brésil et l\'Argentine se partagent les titres modernes. La Copa 2021 voit Messi remporter enfin son premier titre international major avec l\'Argentine.',
    currentChampion: 'Argentine 🇦🇷 (2024)',
    mostTitles: { team: 'Argentine 🇦🇷', count: 16 },
    topScorer: { name: 'Neymar 🇧🇷 / Messi 🇦🇷', goals: 13 },
    iconicMoments: [
      { year: 1950, description: 'L\'Uruguay bat le Brésil 2-1 dans le "Maracanazo" devant 200 000 spectateurs', emoji: '😱' },
      { year: 1987, description: 'L\'Uruguay gagne son dernier titre en battant le Chili sur son sol', emoji: '🇺🇾' },
      { year: 2021, description: 'Messi marque en demi-finale vs Colombie — l\'Argentine gagne son premier titre depuis 28 ans', emoji: '🇦🇷' },
      { year: 2024, description: 'L\'Argentine conserve son titre face à la Colombie dans une finale tendue', emoji: '🏆' },
    ],
    bgGradient: 'from-green-900 via-teal-800 to-blue-800',
    records: [
      'Plus grand nombre de titres : Uruguay (15) puis Argentine (16 depuis 2021)',
      'Compétition nationale la plus ancienne : depuis 1916',
      'Plus jeune joueur : Pelé (17 ans et 249 jours en 1959)',
      'Meilleur buteur historique : Neymar (13 buts)',
    ],
  },
];

export const getCompetitionById = (id: string) => competitions.find(c => c.id === id);
