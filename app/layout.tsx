import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'FootMaster — Apprends la culture football',
  description: 'La plateforme ludique et immersive pour devenir un expert du football. Joueurs, clubs, compétitions, quiz et plus encore.',
  keywords: 'football, soccer, apprentissage, quiz, Messi, Ronaldo, Champions League, Coupe du Monde',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-fm-dark text-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <footer className="mt-20 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <span>⚽</span>
                <span className="gradient-text-green">FootMaster</span>
              </div>
              <p>La plateforme pour apprendre la culture du football mondial</p>
              <div className="flex gap-6 text-xs">
                <span>🌍 Couverture mondiale</span>
                <span>🏆 100+ trophées référencés</span>
                <span>⭐ 7 joueurs légendaires</span>
                <span>🎮 3 quiz complets</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
