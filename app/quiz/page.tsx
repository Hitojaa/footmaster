'use client';

import { useState, useEffect, useCallback } from 'react';
import { quizzes, type Quiz, type QuizQuestion } from '@/data/quizzes';
import Link from 'next/link';

type GameState = 'select' | 'playing' | 'result';

interface AnswerResult {
  questionId: string;
  selected: number;
  correct: boolean;
}

const TIMER_SECONDS = 20;

function QuizCard({ quiz, onStart }: { quiz: Quiz; onStart: () => void }) {
  const difficultyColor = {
    facile: 'text-green-400 bg-green-500/20',
    moyen: 'text-yellow-400 bg-yellow-500/20',
    difficile: 'text-red-400 bg-red-500/20',
  }[quiz.difficulty];

  return (
    <div className={`bg-gradient-to-br ${quiz.bgGradient} rounded-2xl border border-white/10 overflow-hidden card-hover`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="text-5xl">{quiz.emoji}</span>
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${difficultyColor}`}>
            {quiz.difficulty}
          </span>
        </div>

        <h3 className="text-xl font-black mb-1">{quiz.title}</h3>
        <p className="text-gray-400 text-sm mb-5">{quiz.subtitle}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-5">
          <span>❓ {quiz.questions.length} questions</span>
          <span>⏱️ {quiz.timePerQuestion}s / question</span>
        </div>

        <div className="glass rounded-xl p-3 mb-5 flex items-center gap-3">
          <div>
            <div className="text-xs text-gray-400">Récompenses</div>
            <div className="font-bold text-fm-gold">{quiz.badge}</div>
          </div>
          <div className="ml-auto">
            <div className="text-xs text-gray-400">XP gagnable</div>
            <div className="font-bold text-fm-green">{quiz.reward}</div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full py-3 bg-fm-green text-black font-bold rounded-xl hover:bg-fm-green-dark transition-all hover:scale-105 text-sm"
        >
          🚀 Lancer le quiz
        </button>
      </div>
    </div>
  );
}

function QuizTimer({ total, onEnd, paused }: { total: number; onEnd: () => void; paused: boolean }) {
  const [remaining, setRemaining] = useState(total);

  useEffect(() => {
    setRemaining(total);
  }, [total]);

  useEffect(() => {
    if (paused) return;
    if (remaining <= 0) {
      onEnd();
      return;
    }
    const timer = setTimeout(() => setRemaining(r => r - 1), 1000);
    return () => clearTimeout(timer);
  }, [remaining, paused, onEnd]);

  const pct = (remaining / total) * 100;
  const color = pct > 50 ? 'bg-fm-green' : pct > 25 ? 'bg-yellow-400' : 'bg-red-500';

  return (
    <div className="flex items-center gap-3">
      <div className={`text-2xl font-black w-12 text-right ${pct < 25 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
        {remaining}
      </div>
      <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function QuizPage() {
  const [gameState, setGameState] = useState<GameState>('select');
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [timerKey, setTimerKey] = useState(0);
  const [timerPaused, setTimerPaused] = useState(false);

  const currentQuestion: QuizQuestion | null = activeQuiz?.questions[currentQ] ?? null;

  const handleAnswer = useCallback((optionIndex: number) => {
    if (selected !== null || !currentQuestion) return;
    setSelected(optionIndex);
    setTimerPaused(true);
    setShowExplanation(true);

    const correct = optionIndex === currentQuestion.correctAnswer;
    setResults(prev => [...prev, {
      questionId: currentQuestion.id,
      selected: optionIndex,
      correct,
    }]);
  }, [selected, currentQuestion]);

  const handleTimerEnd = useCallback(() => {
    if (selected !== null || !currentQuestion) return;
    // Time's up — count as wrong
    setSelected(-1);
    setTimerPaused(true);
    setShowExplanation(true);
    setResults(prev => [...prev, {
      questionId: currentQuestion.id,
      selected: -1,
      correct: false,
    }]);
  }, [selected, currentQuestion]);

  const handleNext = () => {
    if (!activeQuiz) return;
    if (currentQ + 1 < activeQuiz.questions.length) {
      setCurrentQ(q => q + 1);
      setSelected(null);
      setShowExplanation(false);
      setTimerPaused(false);
      setTimerKey(k => k + 1);
    } else {
      // End of quiz
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (!activeQuiz) return;
    const correct = results.filter(r => r.correct).length + (selected !== null && currentQuestion && selected === currentQuestion.correctAnswer ? 1 : 0);
    const total = activeQuiz.questions.length;
    const pct = Math.round((correct / total) * 100);
    const xpGained = correct * 50;

    // Save to localStorage
    const prev = JSON.parse(localStorage.getItem(`footmaster_quiz_${activeQuiz.id}`) || '{}');
    const newSave = {
      best: Math.max(prev.best || 0, pct),
      attempts: (prev.attempts || 0) + 1,
      lastScore: pct,
      badge: pct >= 70 ? activeQuiz.badge : null,
    };
    localStorage.setItem(`footmaster_quiz_${activeQuiz.id}`, JSON.stringify(newSave));

    // Update total XP
    const prevXp = parseInt(localStorage.getItem('footmaster_xp') || '0');
    localStorage.setItem('footmaster_xp', String(prevXp + xpGained));

    setGameState('result');
  };

  const startQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setResults([]);
    setTimerKey(0);
    setTimerPaused(false);
    setGameState('playing');
  };

  const restart = () => {
    setGameState('select');
    setActiveQuiz(null);
    setResults([]);
  };

  // Results calculation
  const totalCorrect = results.filter(r => r.correct).length;
  const totalQuestions = activeQuiz?.questions.length ?? 0;
  const score = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const xpGained = totalCorrect * 50;

  // — SELECT STATE —
  if (gameState === 'select') {
    return (
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12 animate-slide-up">
          <div className="text-5xl mb-4">🎮</div>
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            Quiz & <span className="gradient-text-green">Jeux</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Teste tes connaissances, gagne des XP et collectionne des badges
          </p>
        </div>

        {/* How it works */}
        <div className="glass rounded-2xl border border-white/10 p-6 mb-8">
          <h2 className="font-bold text-center mb-4 text-fm-green">Comment ça marche ?</h2>
          <div className="grid sm:grid-cols-4 gap-4 text-center">
            {[
              { emoji: '🎯', title: 'Choisis un quiz', desc: '3 quiz différents disponibles' },
              { emoji: '⏱️', title: 'Réponds vite', desc: '20 secondes par question' },
              { emoji: '⚡', title: 'Gagne des XP', desc: '+50 XP par bonne réponse' },
              { emoji: '🏅', title: 'Débloque des badges', desc: 'Score ≥ 70% pour un badge' },
            ].map(item => (
              <div key={item.title} className="space-y-2">
                <div className="text-3xl">{item.emoji}</div>
                <div className="font-bold text-sm">{item.title}</div>
                <div className="text-xs text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {quizzes.map((quiz, i) => (
            <div key={quiz.id} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <QuizCard quiz={quiz} onStart={() => startQuiz(quiz)} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/progression"
            className="inline-flex items-center gap-2 text-fm-green font-semibold hover:underline"
          >
            📈 Voir ma progression et mes badges →
          </Link>
        </div>
      </div>
    );
  }

  // — PLAYING STATE —
  if (gameState === 'playing' && activeQuiz && currentQuestion) {
    const progress = ((currentQ) / activeQuiz.questions.length) * 100;

    return (
      <div className="min-h-screen max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className={`bg-gradient-to-br ${activeQuiz.bgGradient} rounded-2xl p-5 mb-6 border border-white/10`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">{activeQuiz.emoji}</span>
              <span className="font-bold text-sm">{activeQuiz.title}</span>
            </div>
            <span className="text-sm text-gray-300 font-bold">
              {currentQ + 1}/{activeQuiz.questions.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-black/30 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-fm-green rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Timer */}
          <QuizTimer
            key={timerKey}
            total={TIMER_SECONDS}
            onEnd={handleTimerEnd}
            paused={timerPaused}
          />
        </div>

        {/* Question */}
        <div className="glass rounded-2xl border border-white/10 p-6 mb-6 animate-scale-in">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{currentQuestion.emoji}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
              currentQuestion.difficulty === 'facile' ? 'bg-green-500/20 text-green-400' :
              currentQuestion.difficulty === 'moyen' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {currentQuestion.difficulty}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black leading-tight">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, i) => {
            let className = 'w-full p-4 rounded-xl border text-left font-semibold transition-all duration-300 glass border-white/10 hover:border-fm-green/50 hover:bg-fm-green/5';

            if (selected !== null) {
              if (i === currentQuestion.correctAnswer) {
                className = 'w-full p-4 rounded-xl border text-left font-semibold transition-all duration-300 answer-correct';
              } else if (i === selected && selected !== currentQuestion.correctAnswer) {
                className = 'w-full p-4 rounded-xl border text-left font-semibold transition-all duration-300 answer-wrong';
              } else {
                className = 'w-full p-4 rounded-xl border border-white/10 text-left font-semibold opacity-50';
              }
            }

            return (
              <button
                key={i}
                className={className}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
              >
                <span className="inline-flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-black shrink-0 ${
                    selected === null ? 'border-gray-500' :
                    i === currentQuestion.correctAnswer ? 'border-fm-green bg-fm-green text-black' :
                    i === selected ? 'border-red-500 bg-red-500 text-white' :
                    'border-gray-600'
                  }`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`rounded-2xl p-5 mb-6 animate-slide-up border ${
            selected === currentQuestion.correctAnswer
              ? 'bg-fm-green/10 border-fm-green/30'
              : 'bg-red-500/10 border-red-500/30'
          }`}>
            <div className="flex items-center gap-2 mb-2 font-bold">
              {selected === currentQuestion.correctAnswer ? (
                <><span>✅</span><span className="text-fm-green">Bonne réponse ! +50 XP</span></>
              ) : selected === -1 ? (
                <><span>⏰</span><span className="text-red-400">Temps écoulé !</span></>
              ) : (
                <><span>❌</span><span className="text-red-400">Mauvaise réponse</span></>
              )}
            </div>
            <p className="text-gray-300 text-sm">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Next button */}
        {showExplanation && (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-fm-green text-black font-black text-lg rounded-2xl hover:bg-fm-green-dark transition-all hover:scale-[1.02] animate-bounce-in"
          >
            {currentQ + 1 < activeQuiz.questions.length ? '▶ Question suivante' : '🏁 Voir les résultats'}
          </button>
        )}
      </div>
    );
  }

  // — RESULT STATE —
  if (gameState === 'result' && activeQuiz) {
    const isPerfect = score === 100;
    const isBadge = score >= 70;

    return (
      <div className="min-h-screen max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Result Card */}
        <div className={`bg-gradient-to-br ${activeQuiz.bgGradient} rounded-3xl border border-white/10 p-8 text-center mb-6 animate-scale-in`}>
          <div className="text-6xl mb-4">
            {isPerfect ? '🏆' : isBadge ? '🎉' : score >= 50 ? '👍' : '💪'}
          </div>

          <h2 className="text-3xl font-black mb-2">
            {isPerfect ? 'PARFAIT !' : isBadge ? 'Excellent !' : score >= 50 ? 'Pas mal !' : 'Continue !'}
          </h2>

          <div className="text-7xl font-black gradient-text-green mb-4">{score}%</div>

          <div className="flex items-center justify-center gap-6 mb-6">
            <div>
              <div className="text-3xl font-black text-fm-green">{totalCorrect}</div>
              <div className="text-sm text-gray-400">bonnes réponses</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-black text-gray-400">{totalQuestions - totalCorrect}</div>
              <div className="text-sm text-gray-400">mauvaises</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-black text-fm-gold">+{xpGained}</div>
              <div className="text-sm text-gray-400">XP gagnés</div>
            </div>
          </div>

          {/* Score bar */}
          <div className="h-4 bg-black/30 rounded-full overflow-hidden mb-4">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                score >= 70 ? 'bg-fm-green' : score >= 50 ? 'bg-yellow-400' : 'bg-red-500'
              }`}
              style={{ width: `${score}%` }}
            />
          </div>

          {/* Badge earned */}
          {isBadge && (
            <div className="glass rounded-2xl p-4 border border-fm-gold/30 bg-fm-gold/5 mb-4">
              <div className="text-3xl mb-1">{activeQuiz.badge}</div>
              <div className="font-bold text-fm-gold">Badge débloqué !</div>
              <div className="text-sm text-gray-400">{activeQuiz.badge}</div>
            </div>
          )}

          {!isBadge && (
            <div className="glass rounded-xl p-3 border border-white/10 mb-4">
              <p className="text-sm text-gray-400">
                Obtiens {70 - score}% de plus pour débloquer le badge <strong>{activeQuiz.badge}</strong>
              </p>
            </div>
          )}
        </div>

        {/* Question review */}
        <div className="glass rounded-2xl border border-white/10 overflow-hidden mb-6">
          <div className="p-4 border-b border-white/10">
            <h3 className="font-bold">📋 Récapitulatif</h3>
          </div>
          <div className="divide-y divide-white/5">
            {results.map((r, i) => {
              const q = activeQuiz.questions[i];
              if (!q) return null;
              return (
                <div key={r.questionId} className="p-4">
                  <div className="flex items-start gap-3">
                    <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      r.correct ? 'bg-fm-green text-black' : 'bg-red-500 text-white'
                    }`}>
                      {r.correct ? '✓' : '✗'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium mb-1">{q.question}</p>
                      {!r.correct && (
                        <p className="text-xs text-fm-green">
                          ✅ {q.options[q.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="grid sm:grid-cols-2 gap-4">
          <button
            onClick={() => startQuiz(activeQuiz)}
            className="py-4 bg-fm-green text-black font-bold rounded-2xl hover:bg-fm-green-dark transition-all hover:scale-105"
          >
            🔄 Rejouer
          </button>
          <button
            onClick={restart}
            className="py-4 glass border border-white/20 font-bold rounded-2xl hover:border-fm-green/50 transition-all hover:scale-105"
          >
            🎮 Choisir un autre quiz
          </button>
        </div>

        <div className="mt-4 text-center">
          <Link href="/progression" className="text-fm-green font-semibold hover:underline text-sm">
            📈 Voir ma progression complète →
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
