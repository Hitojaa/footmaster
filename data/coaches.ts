export interface Coach {
  id: string;
  name: string;
  nationality: string;
  flag: string;
  born: number;
  era: string;
  clubs: string[];
  emoji: string;
  bgGradient: string;
  philosophy: string;
  tactics: string[];
  description: string;
  achievements: string[];
  impact: string;
  quote: string;
  funFact: string;
}

export const coaches: Coach[] = [
  {
    id: 'pep-guardiola',
    name: 'Pep Guardiola',
    nationality: 'Espagnol (Catalan)',
    flag: '🇪🇸',
    born: 1971,
    era: 'Actuel (2008 – présent)',
    clubs: ['FC Barcelone B', 'FC Barcelone', 'Bayern Munich', 'Manchester City'],
    emoji: '🧠',
    bgGradient: 'from-sky-900 via-blue-800 to-indigo-800',
    philosophy: 'Le "jeu positionnel" (Positional Play). Contrôler l\'espace, pas seulement le ballon. Pressing haut, récupération immédiate, transitions ultrarapides.',
    tactics: ['4-3-3', '3-4-3', 'Faux 9', 'Pressing haut', 'Build-up par les gardiens'],
    description: 'Considéré par beaucoup comme le meilleur entraîneur de l\'histoire du football, Pep Guardiola a révolutionné la façon dont le sport est joué et compris. Ancien milieu défensif du Barça sous Johan Cruyff, il a absorbé la philosophie cruyffiste pour la perfectionner et la réinventer. Son Barça 2008-2012 est reconnu comme la meilleure équipe de club de l\'histoire par de nombreux experts.',
    achievements: [
      'Triplé historique avec le Barça (2009 et 2011)',
      '3 Bundesliga consécutives avec le Bayern',
      '6 Premier Leagues en 7 saisons avec City',
      'Premier entraîneur à réaliser un "Sextuplé" (2023 avec City)',
      '20+ trophées en carrière d\'entraîneur',
    ],
    impact: 'Guardiola a changé à jamais comment les équipes s\'organisent défensivement et offensivement. Son influence sur la génération d\'entraîneurs actuelle est totale — Nagelsmann, Arteta, De Zerbi, Xavi ont tous été formés ou influencés par lui.',
    quote: '"Le football, c\'est récupérer le ballon en 3 secondes ou moins. Tout le reste est secondaire."',
    funFact: 'Guardiola lit des livres de philosophie et de tactique militaire pour s\'inspirer pour le football. Il a notamment étudié les stratégies de Sun Tzu.',
  },
  {
    id: 'sir-alex-ferguson',
    name: 'Sir Alex Ferguson',
    nationality: 'Écossais',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    born: 1941,
    era: 'Légende (1974 – 2013)',
    clubs: ['East Stirlingshire', 'St Mirren', 'Aberdeen', 'Manchester United'],
    emoji: '👴',
    bgGradient: 'from-red-900 via-red-800 to-rose-800',
    philosophy: 'La mentalité gagnante avant tout. Attaque à tout prix. La substitution préférentielle défensive pour protéger un avantage. Formation interne des talents.',
    tactics: ['4-4-2', '4-3-3', 'Utilisation des ailes', 'Jeu physique avec technique'],
    description: 'Sir Alex Ferguson est l\'entraîneur le plus titré de l\'histoire du football britannique. En 26 ans et demi à Manchester United, il a transformé un club en crise en empire mondial. Autoritaire, visionnaire, et parfois brutal dans ses décisions, Ferguson était un maître de la psychologie et de la gestion des personnalités.',
    achievements: [
      '13 titres de Premier League avec Man United',
      '2 Ligues des Champions (1999, 2008)',
      '5 FA Cups, 4 League Cups',
      'Triplé historique 1999 (PL + FA Cup + LDC)',
      '38 trophées au total avec United',
    ],
    impact: 'Ferguson a prouvé qu\'un entraîneur unique pouvait dominer un championnat pendant un quart de siècle. Sa loyauté envers son style tout en s\'adaptant aux générations (Cantona, Beckham, Rooney, Ronaldo, Giggs) est légendaire. Il est le standard ultime pour tout entraîneur de football.',
    quote: '"Les buts comptent mais les titres sont ce qui reste. Ne laisse jamais ton adversaire croire que le match est terminé."',
    funFact: 'Ferguson a failli être renvoyé en janvier 1990. United était 14e de Division 1 et sans victoire depuis des semaines. Un but de Mark Robins en FA Cup contre Nottingham Forest a sauvé son poste — et le reste est légendaire.',
  },
  {
    id: 'johan-cruyff',
    name: 'Johan Cruyff',
    nationality: 'Néerlandais',
    flag: '🇳🇱',
    born: 1947,
    era: 'Légende (1973 – 1996)',
    clubs: ['Ajax Amsterdam (joueur+coach)', 'FC Barcelone (joueur+coach)', 'Feyenoord (coach)'],
    emoji: '🔮',
    bgGradient: 'from-orange-900 via-amber-800 to-yellow-700',
    philosophy: 'Le "Total Football" — chaque joueur doit savoir jouer à n\'importe quel poste. L\'espace est l\'arme principale. Le football doit être beau ET efficace.',
    tactics: ['4-3-3 (son invention)', 'Pressing universel', 'Jeu positionnel', 'Largeur du terrain maximale'],
    description: 'Johan Cruyff est le père philosophique du football moderne. Comme joueur, il a révolutionné le jeu avec l\'Ajax et les Pays-Bas des années 70. Comme entraîneur au Barça (1988-1996), il a planté les graines du tiki-taka et de La Masia — formant une génération (Guardiola, Puyol, Xavi) qui dominera le football 20 ans plus tard.',
    achievements: [
      '3 Coupes d\'Europe consécutives avec l\'Ajax (joueur, 1971-73)',
      '4 La Liga avec le Barça (entraîneur)',
      'Coupe des Vainqueurs de Coupe 1987 avec l\'Ajax',
      'Fondateur du système Barça et de La Masia',
      'Ballon d\'Or 1971, 1973, 1974 (joueur)',
    ],
    impact: 'Sans Cruyff, il n\'y aurait pas de Guardiola, pas de tiki-taka espagnol, pas de domination des Pays-Bas dans le football mondial. Il a changé comment les gens *comprennent* le football — pas juste comment on le joue. Son héritage intellectuel dépasse celui de n\'importe quel autre footballeur.',
    quote: '"Dans mon équipe, c\'est le gardien qui déclenche le premier jeu. Le football commence par les pieds, pas par le ciel."',
    funFact: 'Cruyff est le seul homme à avoir remporté la Coupe d\'Europe en tant que joueur (3 fois) et entraîneur, avec *deux* clubs différents (Ajax et Barça).',
  },
  {
    id: 'mourinho',
    name: 'José Mourinho',
    nationality: 'Portugais',
    flag: '🇵🇹',
    born: 1963,
    era: 'Actuel (2002 – présent)',
    clubs: ['Porto', 'Chelsea', 'Inter Milan', 'Real Madrid', 'Manchester United', 'Tottenham', 'Roma', 'Fenerbahçe'],
    emoji: '😏',
    bgGradient: 'from-gray-900 via-slate-800 to-zinc-800',
    philosophy: 'Organisation défensive béton, transition rapide, exploitation des espaces laissés par l\'adversaire. La victoire prime sur l\'esthétique.',
    tactics: ['4-1-4-1', '4-5-1 défensif', 'Bloc bas', 'Contre-attaque chirurgicale'],
    description: 'Le "Special One" — l\'entraîneur le plus charismatique, controversé et médiatique du football moderne. Mourinho a révolutionné la gestion défensive et psychologique des équipes. Ses équipes sont difficiles à battre, organisées et chirurgicales. Son ego surdimensionné lui a coûté des postes mais a aussi motivé ses joueurs à se surpasser.',
    achievements: [
      'Ligue des Champions avec Porto (2004) et Inter Milan (2010)',
      'Triplé historique avec l\'Inter (2010 : Serie A + Coppa Italia + LDC)',
      '3 Premier Leagues avec Chelsea',
      'Coupe de France avec le PSG',
      'Conference League avec la Roma (2022)',
    ],
    impact: 'Mourinho a popularisé le football défensif comme une philosophie respectable, pas un aveu de faiblesse. Sa gestion médiatique — press conferences cultes, provocations calibrées — a changé la relation des entraîneurs aux médias. Le terme "Mourinhoisme" est entré dans le dictionnaire du football.',
    quote: '"Je me considère comme un entraîneur spécial. Ce n\'est pas de l\'arrogance, c\'est la réalité."',
    funFact: 'À Porto, Mourinho était si peu connu que ses joueurs l\'appelaient "le traducteur" au début — il avait été l\'interprète de Bobby Robson au Barça. 2 ans plus tard, il gagnait la LDC.',
  },
  {
    id: 'ancelotti',
    name: 'Carlo Ancelotti',
    nationality: 'Italien',
    flag: '🇮🇹',
    born: 1959,
    era: 'Actuel (1995 – présent)',
    clubs: ['Reggiana', 'Parme', 'Juventus', 'AC Milan', 'Chelsea', 'Paris Saint-Germain', 'Real Madrid', 'Napoli', 'Bayern Munich', 'Everton', 'Real Madrid (retour)'],
    emoji: '🏆',
    bgGradient: 'from-yellow-900 via-amber-800 to-orange-800',
    philosophy: 'Management des égos, adaptabilité tactique totale, équilibre offensive-défensive. Ancelotti fait jouer les stars ensemble mieux que quiconque.',
    tactics: ['4-4-2 en losange', '4-3-3', '4-2-3-1', 'Flexibilité totale selon les joueurs disponibles'],
    description: 'Carlo Ancelotti est unique dans l\'histoire du football : il est le seul entraîneur à avoir remporté la Ligue des Champions avec deux clubs différents (AC Milan et Real Madrid) et à avoir gagné les 5 plus grands championnats européens. Appelé "Don Carlo", il est admiré pour sa sérénité, son empathie et sa capacité à gérer les superstars.',
    achievements: [
      '4 Ligues des Champions (2 avec Milan, 2 avec le Real)',
      'Vainqueur des 5 grands championnats (Italie, Angleterre, France, Espagne, Allemagne)',
      'Serie A avec Milan, Premier League avec Chelsea, Ligue 1 avec le PSG, La Liga avec le Real, Bundesliga avec le Bayern',
      'Seul entraîneur triple vainqueur de la LDC',
    ],
    impact: 'Ancelotti a prouvé qu\'un entraîneur adaptatif et humain peut dominer dans n\'importe quel championnat avec n\'importe quelle culture. Sa méthode — respect des joueurs, flexibilité tactique, ego maîtrisé — est le contre-modèle de Mourinho, et les deux ont connu un succès égal.',
    quote: '"Je ne suis pas le joueur le plus important de l\'équipe. C\'est le groupe qui gagne, pas l\'entraîneur."',
    funFact: 'Ancelotti est le seul entraîneur à avoir été champion avec 5 championnats différents des 5 grands pays européens. Un record qui pourrait durer des décennies.',
  },
];

export const getCoachById = (id: string) => coaches.find(c => c.id === id);
