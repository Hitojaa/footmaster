'use client';

import { useState } from 'react';
import { coaches } from '@/data/coaches';

export default function CoachsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Record<string, string>>({});

  const getTab = (id: string) => activeTab[id] || 'profil';
  const setTab = (id: string, tab: string) => setActiveTab(prev => ({ ...prev, [id]: tab }));

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="text-5xl mb-4">🧠</div>
        <h1 className="text-4xl md:text-5xl font-black mb-3">
          Les <span className="gradient-text-green">Coachs</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Les architectes du jeu — philosophies, tactiques et impact sur le football mondial
        </p>
      </div>

      {/* Coaches Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {coaches.map((coach, i) => (
          <div
            key={coach.id}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className={`bg-gradient-to-br ${coach.bgGradient} rounded-2xl border border-white/10 overflow-hidden card-hover`}>
              {/* Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpanded(expanded === coach.id ? null : coach.id)}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-5xl mb-2">{coach.emoji}</div>
                    <h3 className="text-xl font-black">{coach.name}</h3>
                    <p className="text-gray-300 text-sm">
                      {coach.flag} {coach.nationality}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{coach.era}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 mb-2">Trophées principaux</div>
                    <div className="text-3xl font-black text-fm-gold">
                      {coach.achievements.length}+
                    </div>
                    <div className="text-xs text-gray-400">accomplissements</div>
                  </div>
                </div>

                {/* Clubs */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-1">Clubs entraînés</div>
                  <div className="flex flex-wrap gap-1">
                    {coach.clubs.map(club => (
                      <span key={club} className="text-xs glass px-2 py-0.5 rounded-full text-gray-300">{club}</span>
                    ))}
                  </div>
                </div>

                {/* Tactics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {coach.tactics.slice(0, 3).map(t => (
                    <span key={t} className="text-xs bg-fm-green/10 border border-fm-green/20 text-fm-green px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-gray-300 italic border-l-2 border-fm-gold pl-3 mb-4">
                  {coach.quote}
                </blockquote>

                <button className="text-xs text-fm-green font-semibold">
                  {expanded === coach.id ? '▲ Réduire' : '▼ En savoir plus'}
                </button>
              </div>

              {/* Expanded */}
              {expanded === coach.id && (
                <div className="border-t border-white/10">
                  {/* Tabs */}
                  <div className="flex border-b border-white/10">
                    {['profil', 'philosophie', 'palmarès', 'impact'].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setTab(coach.id, tab)}
                        className={`flex-1 py-3 text-xs md:text-sm font-semibold capitalize transition-colors ${
                          getTab(coach.id) === tab
                            ? 'text-fm-green border-b-2 border-fm-green bg-fm-green/5'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab === 'profil' ? '👤' :
                         tab === 'philosophie' ? '🎨' :
                         tab === 'palmarès' ? '🏆' : '🌍'}
                        {' '}{tab}
                      </button>
                    ))}
                  </div>

                  <div className="p-6">
                    {getTab(coach.id) === 'profil' && (
                      <div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-5">{coach.description}</p>
                        <div className="glass rounded-xl p-4 border border-fm-gold/20">
                          <h4 className="text-fm-gold font-bold mb-2">💡 Fun Fact</h4>
                          <p className="text-gray-300 text-sm italic">{coach.funFact}</p>
                        </div>
                      </div>
                    )}

                    {getTab(coach.id) === 'philosophie' && (
                      <div>
                        <h4 className="text-fm-green font-bold mb-2">🧠 Philosophie de jeu</h4>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{coach.philosophy}</p>

                        <h4 className="text-fm-green font-bold mb-2">⚙️ Systèmes tactiques</h4>
                        <div className="flex flex-wrap gap-2">
                          {coach.tactics.map(t => (
                            <span key={t} className="glass border border-fm-green/20 text-fm-green text-sm px-3 py-1.5 rounded-xl">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {getTab(coach.id) === 'palmarès' && (
                      <div className="space-y-3">
                        {coach.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-3 glass rounded-xl p-3">
                            <span className="text-fm-gold">🏆</span>
                            <span className="text-gray-300 text-sm">{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {getTab(coach.id) === 'impact' && (
                      <div>
                        <p className="text-gray-300 text-sm leading-relaxed">{coach.impact}</p>
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
