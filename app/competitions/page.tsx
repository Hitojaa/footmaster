'use client';

import { useState } from 'react';
import { competitions } from '@/data/competitions';

export default function CompetitionsPage() {
  const [active, setActive] = useState<string | null>(null);
  const [tab, setTab] = useState<Record<string, string>>({});

  const getTab = (id: string) => tab[id] || 'présentation';
  const setCompTab = (id: string, t: string) => setTab(prev => ({ ...prev, [id]: t }));

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="text-5xl mb-4">🏆</div>
        <h1 className="text-4xl md:text-5xl font-black mb-3">
          Les <span className="gradient-text-multi">Compétitions</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Du Mondial à la Copa América — comprends les grandes compétitions qui font vibrer la planète
        </p>
      </div>

      {/* Competitions Grid */}
      <div className="space-y-6">
        {competitions.map((comp, i) => (
          <div
            key={comp.id}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className={`bg-gradient-to-br ${comp.bgGradient} rounded-2xl border border-white/10 overflow-hidden card-hover`}>
              {/* Header */}
              <div
                className="p-6 md:p-8 cursor-pointer"
                onClick={() => setActive(active === comp.id ? null : comp.id)}
              >
                <div className="flex items-start gap-5">
                  <div className="text-6xl md:text-7xl">{comp.emoji}</div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black">{comp.name}</h3>
                        <p className="text-gray-400 text-sm">{comp.organizer} • {comp.continent}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-sm text-gray-400">{comp.frequency}</div>
                        <div className="text-lg font-bold text-fm-green">{comp.participants} équipes</div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">{comp.description}</p>

                    <div className="flex flex-wrap gap-3">
                      <div className="glass px-3 py-2 rounded-xl text-center">
                        <div className="text-xs text-gray-400">Champion en titre</div>
                        <div className="font-bold text-sm">{comp.currentChampion}</div>
                      </div>
                      <div className="glass px-3 py-2 rounded-xl text-center">
                        <div className="text-xs text-gray-400">Record de titres</div>
                        <div className="font-bold text-sm">{comp.mostTitles.team} ({comp.mostTitles.count})</div>
                      </div>
                      <div className="glass px-3 py-2 rounded-xl text-center">
                        <div className="text-xs text-gray-400">Meilleur buteur</div>
                        <div className="font-bold text-sm">{comp.topScorer.name} ({comp.topScorer.goals} buts)</div>
                      </div>
                    </div>

                    <button className="mt-4 text-xs text-fm-green font-semibold">
                      {active === comp.id ? '▲ Réduire' : '▼ En savoir plus'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded */}
              {active === comp.id && (
                <div className="border-t border-white/10">
                  {/* Tabs */}
                  <div className="flex overflow-x-auto border-b border-white/10 scrollbar-hide">
                    {['présentation', 'format', 'moments', 'records'].map(t => (
                      <button
                        key={t}
                        onClick={() => setCompTab(comp.id, t)}
                        className={`px-5 py-3 text-sm font-semibold capitalize whitespace-nowrap transition-colors shrink-0 ${
                          getTab(comp.id) === t
                            ? 'text-fm-green border-b-2 border-fm-green bg-fm-green/5'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {t === 'présentation' ? '📖 Histoire' :
                         t === 'format' ? '📋 Format' :
                         t === 'moments' ? '🎬 Moments' : '📊 Records'}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 md:p-8">
                    {getTab(comp.id) === 'présentation' && (
                      <div>
                        <p className="text-gray-300 text-sm leading-relaxed">{comp.history}</p>
                      </div>
                    )}

                    {getTab(comp.id) === 'format' && (
                      <div>
                        <p className="text-gray-300 text-sm leading-relaxed">{comp.format}</p>
                      </div>
                    )}

                    {getTab(comp.id) === 'moments' && (
                      <div className="space-y-4">
                        {comp.iconicMoments.map((moment) => (
                          <div key={moment.year} className="flex items-start gap-4 glass rounded-xl p-4">
                            <div className="shrink-0 text-center">
                              <div className="text-2xl">{moment.emoji}</div>
                              <div className="text-fm-gold font-black text-sm">{moment.year}</div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">{moment.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {getTab(comp.id) === 'records' && (
                      <div className="space-y-3">
                        {comp.records.map((record, i) => (
                          <div key={i} className="flex items-start gap-3 glass rounded-xl p-4">
                            <span className="text-fm-gold shrink-0">📊</span>
                            <span className="text-gray-300 text-sm">{record}</span>
                          </div>
                        ))}
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
