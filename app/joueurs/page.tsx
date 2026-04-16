'use client';

import { useState } from 'react';
import { players, type Era } from '@/data/players';

const eraLabels: Record<Era | 'all', string> = {
  all: 'Tous',
  legend: '⭐ Légendes',
  current: '🔥 Actuels',
  talent: '🌱 Talents',
};

const positionColors: Record<string, string> = {
  Attaquant: 'text-red-400 bg-red-500/20',
  'Avant-centre': 'text-red-400 bg-red-500/20',
  'Milieu offensif': 'text-yellow-400 bg-yellow-500/20',
  'Défenseur': 'text-blue-400 bg-blue-500/20',
  'Gardien': 'text-purple-400 bg-purple-500/20',
};

export default function JoueursPage() {
  const [activeEra, setActiveEra] = useState<Era | 'all'>('all');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = players.filter(p => {
    const matchEra = activeEra === 'all' || p.era === activeEra;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.nationality.toLowerCase().includes(search.toLowerCase());
    return matchEra && matchSearch;
  });

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="text-5xl mb-4">⚽</div>
        <h1 className="text-4xl md:text-5xl font-black mb-3">
          Les <span className="gradient-text-green">Joueurs</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Des icônes du passé aux stars d&apos;aujourd&apos;hui — découvre les hommes qui ont fait le football
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          <input
            type="text"
            placeholder="Rechercher un joueur..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-fm-card border border-fm-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-fm-green transition-colors"
          />
        </div>

        {/* Era filter */}
        <div className="flex gap-2 flex-wrap">
          {(Object.keys(eraLabels) as (Era | 'all')[]).map(era => (
            <button
              key={era}
              onClick={() => setActiveEra(era)}
              className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeEra === era
                  ? 'bg-fm-green text-black'
                  : 'glass border border-white/10 text-gray-400 hover:text-white hover:border-fm-green/30'
              }`}
            >
              {eraLabels[era]}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-gray-500 text-sm mb-6">
        {filtered.length} joueur{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
      </p>

      {/* Players Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((player, i) => (
          <div
            key={player.id}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div
              className={`bg-gradient-to-br ${player.bgGradient} rounded-2xl border border-white/10 overflow-hidden card-hover cursor-pointer`}
              onClick={() => setExpanded(expanded === player.id ? null : player.id)}
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{player.emoji}</div>
                  <div className="text-right">
                    <span className="text-2xl">{player.flag}</span>
                    <div className="text-xs text-gray-300 mt-1">{player.nationality}</div>
                  </div>
                </div>

                <h3 className="text-xl font-black mb-0.5">{player.name}</h3>
                {player.nickname && (
                  <p className="text-fm-gold text-sm font-semibold mb-2">&ldquo;{player.nickname}&rdquo;</p>
                )}

                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${positionColors[player.position] || 'text-gray-400 bg-white/10'}`}>
                    {player.positionEmoji} {player.position}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    player.era === 'legend' ? 'text-fm-gold bg-yellow-500/20' :
                    player.era === 'current' ? 'text-fm-green bg-green-500/20' :
                    'text-purple-400 bg-purple-500/20'
                  }`}>
                    {eraLabels[player.era]}
                  </span>
                </div>

                {/* Clubs */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-1">Clubs ({player.years})</div>
                  <div className="flex flex-wrap gap-1">
                    {player.clubs.map(club => (
                      <span key={club} className="text-xs glass px-2 py-0.5 rounded-full text-gray-300">
                        {club}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key trophies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {player.trophies.slice(0, 2).map(t => (
                    <div key={t.name} className="flex items-center gap-1 glass px-2 py-1 rounded-lg">
                      <span>{t.emoji}</span>
                      <span className="text-xs font-bold text-fm-gold">{t.count}×</span>
                      <span className="text-xs text-gray-300">{t.name}</span>
                    </div>
                  ))}
                </div>

                {/* Stats if available */}
                {player.stats && (
                  <div className="flex gap-4 text-center mb-4">
                    {player.stats.goals !== undefined && (
                      <div>
                        <div className="text-xl font-black gradient-text-green">{player.stats.goals}</div>
                        <div className="text-xs text-gray-400">Buts</div>
                      </div>
                    )}
                    {player.stats.balonsOr !== undefined && player.stats.balonsOr > 0 && (
                      <div>
                        <div className="text-xl font-black gradient-text-gold">{player.stats.balonsOr}</div>
                        <div className="text-xs text-gray-400">Ballons d&apos;Or</div>
                      </div>
                    )}
                  </div>
                )}

                <button className="text-xs text-fm-green font-semibold flex items-center gap-1">
                  {expanded === player.id ? '▲ Réduire' : '▼ En savoir plus'}
                </button>
              </div>

              {/* Expanded Content */}
              {expanded === player.id && (
                <div className="border-t border-white/10 p-6 bg-black/20">
                  <p className="text-gray-300 text-sm mb-5 leading-relaxed">{player.description}</p>

                  <div className="mb-5">
                    <h4 className="text-sm font-bold text-fm-green mb-2">🎯 Style de jeu</h4>
                    <p className="text-gray-300 text-sm">{player.style}</p>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-sm font-bold text-fm-green mb-2">⭐ Moments marquants</h4>
                    <ul className="space-y-1.5">
                      {player.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-fm-green mt-0.5 shrink-0">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass rounded-xl p-4 border border-fm-gold/20">
                    <h4 className="text-sm font-bold text-fm-gold mb-2">💡 Fun Fact</h4>
                    <p className="text-gray-300 text-sm italic">{player.funFact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-gray-400">Aucun joueur trouvé</h3>
          <p className="text-gray-600 mt-2">Essaie un autre terme de recherche</p>
        </div>
      )}
    </div>
  );
}
