'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Accueil', emoji: '🏠' },
  { href: '/joueurs', label: 'Joueurs', emoji: '⚽' },
  { href: '/clubs', label: 'Clubs', emoji: '🏟️' },
  { href: '/competitions', label: 'Compétitions', emoji: '🏆' },
  { href: '/matchs', label: 'Matchs mythiques', emoji: '🎬' },
  { href: '/coachs', label: 'Coachs', emoji: '🧠' },
  { href: '/quiz', label: 'Quiz', emoji: '🎮' },
  { href: '/progression', label: 'Progression', emoji: '📈' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:animate-bounce transition-all">⚽</span>
            <span className="text-xl font-black gradient-text-green">FootMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  pathname === link.href
                    ? 'bg-fm-green/20 text-fm-green border border-fm-green/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{link.emoji}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-fm-dark/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  pathname === link.href
                    ? 'bg-fm-green/20 text-fm-green border border-fm-green/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-base">{link.emoji}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
