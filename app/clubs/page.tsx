'use client';

import { useState } from 'react';
import { clubs } from '@/data/clubs';

export default function ClubsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Record<string, string>>({});

  const setTab = (clubId: string, tab: string) => {
    setActiveTab(prev => ({ ...prev, [clubId]: tab }));
  };

  const getTab = (clubId: string) => activeTab[clubId] || 'histoire';

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="text-5xl mb-4">🏟️</div>
        <h1 className="text-4xl md:text-5xl font-black mb-3">
          Les <span className="gradient-text-gold">Clubs</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Des institutions centenaires aux empires modernes — plonge dans l&apos;histoire des plus grands clubs du monde
        </p>
      </div>

      {/* Trophy Overview */}
      <div className="glass rounded-2xl p-6 mb-10 border border-white/10">
        <h2 className="text-lg font-bold mb-4 text-center">🏆 Classement par trophées</h2>
        <div className="space-y-3">
          {[...clubs].sort((a, b) => b.totalTrophies - a.totalTrophies).map((club, i) => (
            <div key={club.id} className="flex items-center gap-3">
              <span className="text-fm-gold font-black w-6 text-right">{i + 1}</span>
              <span className="text-2xl">{club.badge}</span>
              <span className="font-semibold flex-1">{club.name}</span>
              <span className="text-sm text-gray-400">{club.flag} {club.country}</span>
              <div className="flex items-center gap-1">
                <div className="h-2 bg-fm-gold/30 rounded-full overflow-hidden w-24">
                  <div
                    className="h-full bg-fm-gold rounded-full"
                    style={{ width: `${(club.totalTrophies / clubs[0].totalTrophies) * 100}%` }}
                  />
                </div>
                <span className="text-fm-gold font-bold text-sm w-8">{club.totalTrophies}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clubs Grid */}
      <div className="space-y-6">
        {clubs.map((club, i) => (
          <div
            key={club.id}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className={`bg-gradient-to-br ${club.colors.gradient} bg-opacity-10 rounded-2xl border border-white/10 overflow-hidden card-hover`}>
              {/* Club Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpanded(expanded === club.id ? null : club.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-6xl shrink-0">{club.badge}</div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-2xl font-black">{club.name}</h3>
                      <span className="text-xl">{club.flag}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3 flex-wrap">
                      <span>📅 Fondé en {club.founded}</span>
                      <span>🏟️ {club.stadium}</span>
                      <span>👥 {club.capacity.toLocaleString()} places</span>
                    </div>

                    <p className="text-gray-300 text-sm line-clamp-2 mb-4">{club.description}</p>

                    {/* Titles summary */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {club.titles.map(t => (
                        <div key={t.competition} className="glass flex items-center gap-1.5 px-3 py-1.5 rounded-xl">
                          <span>{t.emoji}</span>
                          <span className="font-black text-fm-gold">{t.count}×</span>
                          <span className="text-xs text-gray-300">{t.competition}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-fm-gold text-2xl font-black">{club.totalTrophies}</span>
                        <span className="text-gray-400 text-sm">trophées</span>
                      </div>
                      <button className="text-xs text-fm-green font-semibold">
                        {expanded === club.id ? '▲ Réduire' : '▼ En savoir plus'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expanded === club.id && (
                <div className="border-t border-white/10">
                  {/* Tab navigation */}
                  <div className="flex border-b border-white/10">
                    {['histoire', 'légendes', 'style', 'rivalités'].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setTab(club.id, tab)}
                        className={`flex-1 py-3 text-sm font-semibold capitalize transition-colors ${
                          getTab(club.id) === tab
                            ? 'text-fm-green border-b-2 border-fm-green bg-fm-green/5'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="p-6">
                    {getTab(club.id) === 'histoire' && (
                      <div>
                        <h4 className="text-fm-green font-bold mb-3">📚 Histoire du club</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{club.history}</p>
                      </div>
                    )}

                    {getTab(club.id) === 'légendes' && (
                      <div>
                        <h4 className="text-fm-green font-bold mb-3">⭐ Joueurs légendaires</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {club.legends.map(l => (
                            <span key={l} className="glass px-3 py-1.5 rounded-xl text-sm">
                              👑 {l}
                            </span>
                          ))}
                        </div>
                        <h4 className="text-blue-400 font-bold mb-3">🌟 Stars actuelles</h4>
                        <div className="flex flex-wrap gap-2">
                          {club.currentStars.map(s => (
                            <span key={s} className="bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-xl text-sm text-blue-300">
                              ⚡ {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {getTab(club.id) === 'style' && (
                      <div>
                        <h4 className="text-fm-green font-bold mb-3">⚽ Style de jeu</h4>
                        <p className="text-gray-300 text-sm mb-6">{club.style}</p>
                        <div className="glass rounded-xl p-4 border border-fm-gold/20">
                          <h4 className="text-fm-gold font-bold mb-2">💡 Fun Fact</h4>
                          <p className="text-gray-300 text-sm italic">{club.funFact}</p>
                        </div>
                      </div>
                    )}

                    {getTab(club.id) === 'rivalités' && (
                      <div>
                        <h4 className="text-fm-green font-bold mb-3">⚔️ Grande rivalité</h4>
                        <div className="glass rounded-xl p-4 border border-red-500/20 bg-red-500/5">
                          <p className="text-gray-300 text-sm">{club.rivalry}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
