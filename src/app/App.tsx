import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { FakeNewsGame } from "./components/FakeNewsGame";
import { SearchGame } from "./components/SearchGame";
import { AIDetectionGame } from "./components/AIDetectionGame";
import { Logo } from "./components/Logo";
import { Home } from "lucide-react";

type GameMode = "home" | "fakenews" | "search" | "ai";

export default function App() {
  const [gameMode, setGameMode] = useState<GameMode>("home");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setGameMode("home")}
              className="hover:opacity-80 transition-opacity"
            >
              <Logo size="medium" />
            </button>

            {gameMode !== "home" && (
              <button
                onClick={() => setGameMode("home")}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <Home size={18} />
                <span className="hidden sm:inline">Strona główna</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {gameMode === "home" && <HomePage onStartGame={setGameMode} />}

        {gameMode === "fakenews" && (
          <div className="max-w-3xl mx-auto">
            <FakeNewsGame />
          </div>
        )}

        {gameMode === "search" && (
          <div className="max-w-3xl mx-auto">
            <SearchGame />
          </div>
        )}

        {gameMode === "ai" && (
          <div className="max-w-3xl mx-auto">
            <AIDetectionGame />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-gray-900 font-bold mb-3">O programie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                NaukOWIEC to rządowy program edukacji cyfrowej mający na celu zwiększenie odporności społeczeństwa na dezinformację.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-3">Kontakt</h3>
              <p className="text-gray-600 text-sm">
                Email: kontakt@naukowiec.gov.pl<br />
                Tel: +48 22 123 45 67
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-3">Partnerzy</h3>
              <p className="text-gray-600 text-sm">
                Ministerstwo Edukacji Narodowej<br />
                Ministerstwo Cyfryzacji<br />
                Ośrodki naukowo-badawcze
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 NaukOWIEC - Rządowy Program Edukacji Cyfrowej. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}