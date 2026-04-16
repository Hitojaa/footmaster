'use client';

import { useState } from 'react';
import { legendaryMatches } from '@/data/matches';

export default function MatchsPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="text-5xl mb-4">🎬</div>
        <h1 className="text-4xl md:text-5xl font-black mb-3">
          Matchs <span className="gradient-text-multi">Mythiques</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Les rencontres qui ont transcendé le sport — histoires, contexte et pourquoi elles sont immortelles
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-fm-green via-fm-gold to-fm-red opacity-30" />

        <div className="space-y-8">
          {legendaryMatches.map((match, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={match.id}
                className={`relative flex gap-6 md:gap-0 animate-slide-up ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-fm-green border-2 border-fm-dark -translate-x-1.5 md:-translate-x-2 top-8 z-10 animate-glow" />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div
                    className={`bg-gradient-to-br ${match.bgGradient} rounded-2xl border border-white/10 overflow-hidden card-hover cursor-pointer`}
                    onClick={() => setActive(active === match.id ? null : match.id)}
                  >
                    <div className="p-6">
                      {/* Competition badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">{match.competitionEmoji}</span>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {match.competition}
                        </span>
                        <span className="ml-auto text-xs text-gray-500">{match.date}</span>
                      </div>

                      {/* Match title */}
                      <h3 className="text-xl font-black mb-3">{match.name}</h3>

                      {/* Scoreboard */}
                      <div className="glass rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="text-center flex-1">
                            <div className="text-3xl mb-1">{match.homeFlag}</div>
                            <div className="font-bold text-sm">{match.homeTeam}</div>
                          </div>
                          <div className="px-4 text-center">
                            <div className="text-3xl font-black text-fm-gold">{match.score}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{match.importance}</div>
                          </div>
                          <div className="text-center flex-1">
                            <div className="text-3xl mb-1">{match.awayFlag}</div>
                            <div className="font-bold text-sm">{match.awayTeam}</div>
                          </div>
                        </div>
                        <div className="text-center mt-2 text-xs text-gray-400">
                          🏟️ {match.venue} • 👥 {match.attendance.toLocaleString()} spectateurs
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-3 line-clamp-3">{match.description}</p>

                      <button className="text-xs text-fm-green font-semibold">
                        {active === match.id ? '▲ Réduire' : '▼ Découvrir l\'histoire complète'}
                      </button>
                    </div>

                    {/* Expanded */}
                    {active === match.id && (
                      <div className="border-t border-white/10 p-6 bg-black/20 space-y-5">
                        <div>
                          <h4 className="text-fm-green font-bold mb-2">📖 Contexte historique</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{match.context}</p>
                        </div>

                        <div>
                          <h4 className="text-fm-green font-bold mb-3">⭐ Acteurs clés</h4>
                          <div className="flex flex-wrap gap-2">
                            {match.keyPlayers.map(p => (
                              <span key={p} className="glass text-sm px-3 py-1.5 rounded-xl text-gray-200">
                                🎯 {p}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="glass rounded-xl p-4 border border-fm-gold/20 bg-fm-gold/5">
                          <h4 className="text-fm-gold font-bold mb-2">🏆 Pourquoi ce match est légendaire</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{match.whyLegendary}</p>
                        </div>

                        <div className="glass rounded-xl p-4 border border-purple-500/20 bg-purple-500/5">
                          <h4 className="text-purple-400 font-bold mb-2">💡 Fun Fact</h4>
                          <p className="text-gray-300 text-sm italic">{match.funFact}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
