'use client';

import { useState, useEffect } from 'react';
import { quizzes } from '@/data/quizzes';
import Link from 'next/link';

interface QuizSave {
  best: number;
  attempts: number;
  lastScore: number;
  badge: string | null;
}

interface UserStats {
  totalXp: number;
  quizResults: Record<string, QuizSave>;
}

const LEVELS = [
  { name: 'Débutant', minXp: 0, maxXp: 500, emoji: '🌱', color: 'text-green-400' },
  { name: 'Amateur', minXp: 500, maxXp: 1500, emoji: '⚽', color: 'text-blue-400' },
  { name: 'Fan', minXp: 1500, maxXp: 3000, emoji: '🔵', color: 'text-indigo-400' },
  { name: 'Passionné', minXp: 3000, maxXp: 6000, emoji: '⭐', color: 'text-yellow-400' },
  { name: 'Expert', minXp: 6000, maxXp: 10000, emoji: '🏆', color: 'text-orange-400' },
  { name: 'Légende', minXp: 10000, maxXp: Infinity, emoji: '👑', color: 'text-fm-gold' },
];

const ALL_BADGES = [
  { id: 'quiz_legendes', emoji: '🏅', name: 'Historien', desc: 'Score ≥ 70% au Quiz Légendes', quizId: 'legendes' },
  { id: 'quiz_cdm', emoji: '🌍', name: 'Mondialiste', desc: 'Score ≥ 70% au Quiz Coupe du Monde', quizId: 'coupe-du-monde' },
  { id: 'quiz_ldc', emoji: '⭐', name: 'Expert LDC', desc: 'Score ≥ 70% au Quiz Ligue des Champions', quizId: 'ldc' },
  { id: 'perfect_legendes', emoji: '💎', name: 'Légende parfaite', desc: 'Score 100% au Quiz Légendes', quizId: 'legendes', perfect: true },
  { id: 'perfect_cdm', emoji: '🌟', name: 'Mondialiste parfait', desc: 'Score 100% au Quiz Coupe du Monde', quizId: 'coupe-du-monde', perfect: true },
  { id: 'all_quizzes', emoji: '🎓', name: 'Maître du Quiz', desc: 'Terminer tous les quiz au moins une fois' },
  { id: 'xp_500', emoji: '🥉', name: 'Apprenti', desc: 'Atteindre 500 XP' },
  { id: 'xp_2000', emoji: '🥈', name: 'Confirmé', desc: 'Atteindre 2000 XP' },
  { id: 'xp_5000', emoji: '🥇', name: 'Champion', desc: 'Atteindre 5000 XP' },
];

const LEARNING_PATHS = [
  {
    id: 'bases',
    title: 'Les bases du football',
    emoji: '📚',
    steps: [
      { label: 'Lire la page Joueurs', href: '/joueurs', done: false },
      { label: 'Explorer les Clubs', href: '/clubs', done: false },
      { label: 'Comprendre les Compétitions', href: '/competitions', done: false },
    ],
  },
  {
    id: 'histoire',
    title: 'Histoire du football',
    emoji: '📖',
    steps: [
      { label: 'Découvrir les matchs mythiques', href: '/matchs', done: false },
      { label: 'Étudier les grands coachs', href: '/coachs', done: false },
      { label: 'Quiz Légendes (70%+)', href: '/quiz', done: false },
    ],
  },
  {
    id: 'expert',
    title: 'Niveau Expert',
    emoji: '🏆',
    steps: [
      { label: 'Quiz Coupe du Monde (70%+)', href: '/quiz', done: false },
      { label: 'Quiz Ligue des Champions (70%+)', href: '/quiz', done: false },
      { label: 'Atteindre 5000 XP', href: '/quiz', done: false },
    ],
  },
];

function XpBar({ current, max }: { current: number; max: number }) {
  const pct = Math.min((current / max) * 100, 100);
  return (
    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full xp-bar-fill rounded-full transition-all duration-1000"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function ProgressionPage() {
  const [stats, setStats] = useState<UserStats>({ totalXp: 0, quizResults: {} });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const xp = parseInt(localStorage.getItem('footmaster_xp') || '0');
    const quizResults: Record<string, QuizSave> = {};

    quizzes.forEach(q => {
      const raw = localStorage.getItem(`footmaster_quiz_${q.id}`);
      if (raw) {
        try {
          quizResults[q.id] = JSON.parse(raw);
        } catch {
          // ignore
        }
      }
    });

    setStats({ totalXp: xp, quizResults });
  }, []);

  const currentLevel = LEVELS.findLast(l => stats.totalXp >= l.minXp) || LEVELS[0];
  const nextLevel = LEVELS[LEVELS.indexOf(currentLevel) + 1];
  const xpInLevel = stats.totalXp - currentLevel.minXp;
  const xpNeeded = nextLevel ? nextLevel.minXp - currentLevel.minXp : 1;

  const earnedBadges = ALL_BADGES.filter(badge => {
    if (badge.id === 'all_quizzes') {
      return quizzes.every(q => stats.quizResults[q.id]?.attempts > 0);
    }
    if (badge.id === 'xp_500') return stats.totalXp >= 500;
    if (badge.id === 'xp_2000') return stats.totalXp >= 2000;
    if (badge.id === 'xp_5000') return stats.totalXp >= 5000;
    if (badge.quizId && badge.perfect) {
      return (stats.quizResults[badge.quizId]?.best || 0) >= 100;
    }
    if (badge.quizId) {
      return (stats.quizResults[badge.quizId]?.best || 0) >= 70;
    }
    return false;
  });

  if (!mounted) {
    return (
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-12 flex items-center justify-center">
        <div className="animate-spin text-5xl">⚽</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="text-5xl mb-4">📈</div>
        <h1 className="text-4xl md:text-5xl font-black mb-3">
          Ma <span className="gradient-text-green">Progression</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Ton parcours de débutant à légende du football
        </p>
      </div>

      {/* Level Card */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 rounded-3xl border border-white/10 p-8 mb-8 animate-slide-up">
        <div className="flex items-center gap-6 mb-6">
          <div className="text-6xl">{currentLevel.emoji}</div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h2 className={`text-3xl font-black ${currentLevel.color}`}>{currentLevel.name}</h2>
            </div>
            <p className="text-gray-400 text-sm">
              {stats.totalXp.toLocaleString()} XP total
              {nextLevel && ` • ${(nextLevel.minXp - stats.totalXp).toLocaleString()} XP jusqu'au niveau suivant`}
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black gradient-text-gold">{stats.totalXp}</div>
            <div className="text-xs text-gray-400">XP</div>
          </div>
        </div>

        {nextLevel && (
          <div>
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className={currentLevel.color}>{currentLevel.name}</span>
              <span className="text-gray-400">{xpInLevel}/{xpNeeded} XP</span>
              <span className={nextLevel.color}>{nextLevel.name} {nextLevel.emoji}</span>
            </div>
            <XpBar current={xpInLevel} max={xpNeeded} />
          </div>
        )}

        {/* Level progression */}
        <div className="mt-6 flex items-center justify-between">
          {LEVELS.map((level, i) => (
            <div key={level.name} className="flex flex-col items-center gap-1">
              <div className={`text-lg ${stats.totalXp >= level.minXp ? '' : 'opacity-30'}`}>
                {level.emoji}
              </div>
              <div className={`text-xs font-bold hidden sm:block ${stats.totalXp >= level.minXp ? level.color : 'text-gray-600'}`}>
                {level.name}
              </div>
              {i < LEVELS.length - 1 && (
                <div className={`hidden sm:block absolute h-0.5 w-12 mt-3.5 ml-20 ${stats.totalXp >= LEVELS[i + 1].minXp ? 'bg-fm-green' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'XP Total', value: stats.totalXp.toLocaleString(), emoji: '⚡', color: 'text-fm-green' },
          { label: 'Quiz tentés', value: Object.keys(stats.quizResults).length, emoji: '🎮', color: 'text-blue-400' },
          { label: 'Badges gagnés', value: earnedBadges.length, emoji: '🏅', color: 'text-fm-gold' },
          { label: 'Niveau actuel', value: currentLevel.name, emoji: currentLevel.emoji, color: currentLevel.color },
        ].map(s => (
          <div key={s.label} className="glass rounded-2xl p-5 text-center border border-white/10">
            <div className="text-3xl mb-2">{s.emoji}</div>
            <div className={`text-2xl font-black ${s.color} mb-1`}>{s.value}</div>
            <div className="text-xs text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Quiz Results */}
        <div className="glass rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-5 border-b border-white/10 flex items-center gap-2">
            <span>🎯</span>
            <h2 className="font-black">Résultats des Quiz</h2>
          </div>
          <div className="divide-y divide-white/5">
            {quizzes.map(quiz => {
              const result = stats.quizResults[quiz.id];
              const best = result?.best || 0;
              return (
                <div key={quiz.id} className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{quiz.emoji}</span>
                    <div className="flex-1">
                      <div className="font-bold">{quiz.title}</div>
                      <div className="text-xs text-gray-400">
                        {result ? `${result.attempts} tentative${result.attempts > 1 ? 's' : ''}` : 'Pas encore tenté'}
                      </div>
                    </div>
                    <div className={`text-xl font-black ${best >= 70 ? 'text-fm-green' : best > 0 ? 'text-yellow-400' : 'text-gray-600'}`}>
                      {best > 0 ? `${best}%` : '—'}
                    </div>
                  </div>
                  {result && (
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${best >= 70 ? 'bg-fm-green' : 'bg-yellow-400'}`}
                        style={{ width: `${best}%` }}
                      />
                    </div>
                  )}
                  {!result && (
                    <Link href="/quiz">
                      <span className="text-xs text-fm-green font-semibold hover:underline">
                        → Lancer ce quiz
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Badges */}
        <div className="glass rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-5 border-b border-white/10 flex items-center gap-2">
            <span>🏅</span>
            <h2 className="font-black">Collection de Badges</h2>
            <span className="ml-auto text-sm text-fm-gold font-bold">
              {earnedBadges.length}/{ALL_BADGES.length}
            </span>
          </div>
          <div className="p-5 grid grid-cols-3 gap-3">
            {ALL_BADGES.map(badge => {
              const earned = earnedBadges.some(b => b.id === badge.id);
              return (
                <div
                  key={badge.id}
                  className={`rounded-xl p-3 text-center transition-all ${
                    earned
                      ? 'glass border border-fm-gold/30 bg-fm-gold/5'
                      : 'bg-white/5 border border-white/5 opacity-40 grayscale'
                  }`}
                  title={badge.desc}
                >
                  <div className={`text-3xl mb-1 ${earned ? 'badge-glow' : ''}`}>{badge.emoji}</div>
                  <div className="text-xs font-bold leading-tight">{badge.name}</div>
                  {earned && <div className="text-xs text-fm-gold mt-1">✓ Obtenu</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="glass rounded-2xl border border-white/10 overflow-hidden mb-8">
        <div className="p-5 border-b border-white/10 flex items-center gap-2">
          <span>🗺️</span>
          <h2 className="font-black">Parcours d&apos;apprentissage</h2>
        </div>
        <div className="p-6 grid md:grid-cols-3 gap-6">
          {LEARNING_PATHS.map((path, pi) => (
            <div key={path.id} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{path.emoji}</span>
                <h3 className="font-bold">{path.title}</h3>
              </div>
              {path.steps.map((step, si) => (
                <Link key={si} href={step.href}>
                  <div className="flex items-center gap-3 glass p-3 rounded-xl hover:border-fm-green/30 border border-white/5 transition-all group">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      step.done
                        ? 'bg-fm-green border-fm-green'
                        : 'border-gray-600 group-hover:border-fm-green'
                    }`}>
                      {step.done && <span className="text-black text-xs">✓</span>}
                      {!step.done && <span className="text-gray-500 text-xs">{pi * 3 + si + 1}</span>}
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {step.label}
                    </span>
                    <span className="ml-auto text-gray-500 text-xs">→</span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Empty state CTA */}
      {stats.totalXp === 0 && (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-black mb-2">Lance-toi !</h3>
          <p className="text-gray-400 mb-6">Tu n&apos;as pas encore de progression. Commence par un quiz pour gagner tes premiers XP.</p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 bg-fm-green text-black font-bold text-lg rounded-2xl hover:bg-fm-green-dark transition-all hover:scale-105"
          >
            <span>🎮</span>
            <span>Faire mon premier quiz</span>
          </Link>
        </div>
      )}
    </div>
  );
}
