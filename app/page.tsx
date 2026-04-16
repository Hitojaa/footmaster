'use client';

import Link from 'next/link';
import { players } from '@/data/players';
import { clubs } from '@/data/clubs';
import { legendaryMatches } from '@/data/matches';
import { quizzes } from '@/data/quizzes';

const featuredPlayer = players[0]; // Messi
const featuredMatch = legendaryMatches[2]; // Finale 2022

const quickStats = [
  { label: 'Joueurs', value: players.length, emoji: '⚽', color: 'text-fm-green' },
  { label: 'Clubs', value: clubs.length, emoji: '🏟️', color: 'text-fm-gold' },
  { label: 'Quiz', value: quizzes.length, emoji: '🎮', color: 'text-purple-400' },
  { label: 'Matchs mythiques', value: legendaryMatches.length, emoji: '🎬', color: 'text-red-400' },
];

const sections = [
  {
    href: '/joueurs',
    emoji: '⚽',
    title: 'Joueurs',
    desc: 'Légendes, stars actuelles, jeunes talents',
    gradient: 'from-green-900/60 to-emerald-800/40',
    border: 'border-green-700/30',
    count: `${players.length} joueurs`,
  },
  {
    href: '/clubs',
    emoji: '🏟️',
    title: 'Clubs',
    desc: 'Histoire, palmarès, rivalités',
    gradient: 'from-yellow-900/60 to-amber-800/40',
    border: 'border-yellow-700/30',
    count: `${clubs.length} clubs`,
  },
  {
    href: '/competitions',
    emoji: '🏆',
    title: 'Compétitions',
    desc: 'Mondial, LDC, Euro, Copa América',
    gradient: 'from-blue-900/60 to-indigo-800/40',
    border: 'border-blue-700/30',
    count: '4 compétitions',
  },
  {
    href: '/matchs',
    emoji: '🎬',
    title: 'Matchs mythiques',
    desc: 'Les moments qui ont fait l\'histoire',
    gradient: 'from-red-900/60 to-rose-800/40',
    border: 'border-red-700/30',
    count: `${legendaryMatches.length} matchs`,
  },
  {
    href: '/coachs',
    emoji: '🧠',
    title: 'Coachs',
    desc: 'Philosophies, tactiques, légendes',
    gradient: 'from-purple-900/60 to-violet-800/40',
    border: 'border-purple-700/30',
    count: '5 entraîneurs',
  },
  {
    href: '/quiz',
    emoji: '🎮',
    title: 'Quiz & Jeux',
    desc: 'Teste tes connaissances, gagne des XP',
    gradient: 'from-pink-900/60 to-fuchsia-800/40',
    border: 'border-pink-700/30',
    count: `${quizzes.length} quiz`,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pitch-hero field-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fm-dark/80 pointer-events-none" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-fm-green/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          {/* Football emoji with animation */}
          <div className="animate-float text-6xl md:text-8xl mb-6 inline-block">⚽</div>

          <h1 className="text-fluid-2xl font-black mb-4 leading-tight">
            <span className="gradient-text-green">Foot</span>
            <span className="text-white">Master</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-3 font-medium">
            Deviens un expert du football mondial
          </p>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto text-sm md:text-base">
            Apprends l&apos;histoire, les joueurs légendaires, les clubs mythiques et les grandes compétitions.
            Comme Duolingo, mais pour le foot. 🔥
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/joueurs"
              className="px-8 py-4 bg-fm-green text-black font-bold text-lg rounded-2xl hover:bg-fm-green-dark transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-fm-green/30 animate-glow"
            >
              🚀 Commencer maintenant
            </Link>
            <Link
              href="/quiz"
              className="px-8 py-4 glass border border-white/20 font-bold text-lg rounded-2xl hover:border-fm-green/50 transition-all duration-200 hover:scale-105"
            >
              🎮 Tester mon niveau
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {quickStats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-4 text-center animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-2xl mb-1">{stat.emoji}</div>
                <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Featured Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🌟</span>
          <h2 className="text-2xl font-black">Contenu du jour</h2>
          <span className="ml-auto text-xs text-gray-500 bg-fm-card rounded-full px-3 py-1">
            Mis à jour quotidiennement
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Joueur du jour */}
          <Link href="/joueurs" className="block">
            <div className={`bg-gradient-to-br ${featuredPlayer.bgGradient} p-6 rounded-2xl border border-white/10 card-hover group`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-fm-green bg-fm-green/20 px-2 py-1 rounded-full">
                    ⚽ Joueur du jour
                  </span>
                  <h3 className="text-2xl font-black mt-2 group-hover:text-fm-green transition-colors">
                    {featuredPlayer.emoji} {featuredPlayer.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {featuredPlayer.flag} {featuredPlayer.nationality} • {featuredPlayer.position}
                  </p>
                </div>
                <div className="text-5xl opacity-80 group-hover:scale-110 transition-transform">
                  {featuredPlayer.emoji}
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {featuredPlayer.description.slice(0, 120)}...
              </p>

              <div className="flex flex-wrap gap-2">
                {featuredPlayer.trophies.slice(0, 2).map((t) => (
                  <span key={t.name} className="text-xs glass px-2 py-1 rounded-full">
                    {t.emoji} {t.count}× {t.name}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-xs text-fm-green font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                Voir la fiche complète →
              </div>
            </div>
          </Link>

          {/* Match mythique du jour */}
          <Link href="/matchs" className="block">
            <div className={`bg-gradient-to-br ${featuredMatch.bgGradient} p-6 rounded-2xl border border-white/10 card-hover group`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-red-400 bg-red-500/20 px-2 py-1 rounded-full">
                    🎬 Match mythique du jour
                  </span>
                  <h3 className="text-xl font-black mt-2 group-hover:text-red-400 transition-colors">
                    {featuredMatch.emoji} {featuredMatch.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {featuredMatch.competitionEmoji} {featuredMatch.competition}
                  </p>
                </div>
                <div className="text-3xl font-black text-fm-gold">
                  {featuredMatch.score}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl">{featuredMatch.homeFlag}</div>
                  <div className="text-xs text-gray-400">{featuredMatch.homeTeam}</div>
                </div>
                <div className="text-gray-500 text-sm font-bold">VS</div>
                <div className="text-center">
                  <div className="text-2xl">{featuredMatch.awayFlag}</div>
                  <div className="text-xs text-gray-400">{featuredMatch.awayTeam}</div>
                </div>
                <div className="ml-auto text-xs text-gray-400">{featuredMatch.date}</div>
              </div>

              <p className="text-gray-300 text-sm line-clamp-2">
                {featuredMatch.description.slice(0, 100)}...
              </p>

              <div className="mt-4 text-xs text-red-400 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                Découvrir ce match →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Main Sections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">📚</span>
          <h2 className="text-2xl font-black">Explorer FootMaster</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section, i) => (
            <Link key={section.href} href={section.href}>
              <div
                className={`bg-gradient-to-br ${section.gradient} border ${section.border} p-6 rounded-2xl card-hover group h-full animate-slide-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {section.emoji}
                </div>
                <h3 className="text-xl font-black mb-1 group-hover:text-fm-green transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{section.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 glass px-2 py-1 rounded-full">
                    {section.count}
                  </span>
                  <span className="text-xs text-fm-green font-semibold group-hover:translate-x-1 transition-transform">
                    Explorer →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Challenge Daily CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="glass rounded-3xl p-8 md:p-12 text-center border border-fm-green/20 neon-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-fm-green/5 via-transparent to-blue-500/5 pointer-events-none" />
          <div className="relative">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-3xl font-black mb-3">
              Défi quotidien
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Réponds à 5 questions chaque jour pour maintenir ta série et gagner des badges exclusifs !
            </p>
            <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-black gradient-text-green">+50 XP</div>
                <div className="text-xs text-gray-400">par bonne réponse</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-black gradient-text-gold">🔥 Série</div>
                <div className="text-xs text-gray-400">bonus de série</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-black text-purple-400">🏅 Badges</div>
                <div className="text-xs text-gray-400">trophées virtuels</div>
              </div>
            </div>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-fm-green text-black font-bold text-lg rounded-2xl hover:bg-fm-green-dark transition-all hover:scale-105 hover:shadow-lg hover:shadow-fm-green/30"
            >
              <span>🎮</span>
              <span>Lancer le défi du jour</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
