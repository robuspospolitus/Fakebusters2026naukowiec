import { HeroIllustration } from "./HeroIllustration";
import { BookOpen, Search, Sparkles, Target, Users, Lightbulb, Shield, Globe, GraduationCap, Gamepad2, TrendingUp, CheckCircle } from "lucide-react";

interface HomePageProps {
  onStartGame: (mode: "fakenews" | "search" | "ai") => void;
}

export function HomePage({ onStartGame }: HomePageProps) {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="mb-12">
          <HeroIllustration />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          NaukOWIEC
        </h1>
        <p className="text-2xl md:text-3xl text-purple-600 font-semibold mb-6">
          Recepta na owczy pęd!
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Rządowy program edukacji cyfrowej dla dzieci i młodzieży
        </p>
      </section>

      {/* Problem Section */}
      <section className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-red-50 p-3 rounded-xl">
            <Shield className="text-red-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Wyzwanie współczesności</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Ten problem trudno już ignorować. Narasta on z każdym dniem i jest <strong>globalnym wyzwaniem</strong>, które stale ewoluuje. Aby ograniczyć jego konsekwencje należy zacząć od skutecznej edukacji, bo to właśnie <strong>najmłodsi będą kołem napędowym wzrostu odporności społeczeństwa na dezinformację</strong>.
        </p>
      </section>

      {/* Solution Section */}
      <section className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-50 p-3 rounded-xl">
            <Lightbulb className="text-purple-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Nasze rozwiązanie</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Program NaukOWIEC proponuje <strong>oddolne podejście do globalnego problemu</strong> - oparte o zmiany w systemie edukacji. Zarówno w szkole, jak i w domu wdrożymy naukę opartą na <strong>zabawie, storytellingu i doświadczeniu</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Edukacja w szkole */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">W szkole</h3>
            <p className="text-gray-600 mb-4">
              Nauka rozpoznawania fałszu nie wymaga wprowadzania nowego przedmiotu - świetnie sprawdzi się jako element już istniejącego programu.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Zagadki detektywistyczne na lekcjach</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Dzień Szpiega - gra terenowa z LARP i Escape Room</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Drużynowa olimpiada dezinformacyjna</span>
              </li>
            </ul>
          </div>

          {/* Gry komputerowe */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Gamepad2 className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Gry komputerowe</h3>
            <p className="text-gray-600 mb-4">
              Wykorzystujemy najpopularniejsze medium wśród dzieci tworząc <strong>darmowe, wysokiej jakości produkcje</strong>.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Mechaniki wykrywania fake news w rozgrywce</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Immersyjne doświadczenia na Roblox</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Interaktywne przygody i łamigłówki</span>
              </li>
            </ul>
          </div>

          {/* Kampania społeczna */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="text-pink-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Szeroki zasięg</h3>
            <p className="text-gray-600 mb-4">
              Przeprowadzimy szeroką kampanię marketingową aby dotrzeć do każdego dziecka i rodzica.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Współpraca z influencerami</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Kampania w TV i social media</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                <span>Promocja na grupach rodzicielskich</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-purple-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <Target className="text-purple-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Interaktywne moduły edukacyjne</h2>
        </div>
        <p className="text-lg text-gray-700 mb-8">
          Wypróbuj nasze gry edukacyjne i naucz się rozpoznawać zagrożenia w internecie!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Fake News Game Card */}
          <button
            onClick={() => onStartGame("fakenews")}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-left group border border-gray-200"
          >
            <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Debunkowanie Fake News
            </h3>
            <p className="text-gray-600 mb-4">
              Naucz się rozpoznawać fałszywe informacje i dezinformację w internecie
            </p>
            <span className="text-red-600 font-semibold group-hover:underline">
              Rozpocznij grę →
            </span>
          </button>

          {/* Search Game Card */}
          <button
            onClick={() => onStartGame("search")}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-left group border border-gray-200"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Search className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Wyszukiwanie informacji
            </h3>
            <p className="text-gray-600 mb-4">
              Dowiedz się, jak skutecznie i bezpiecznie szukać informacji w sieci
            </p>
            <span className="text-blue-600 font-semibold group-hover:underline">
              Rozpocznij grę →
            </span>
          </button>

          {/* AI Detection Game Card */}
          <button
            onClick={() => onStartGame("ai")}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-left group border border-gray-200"
          >
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Wykrywanie AI i Deepfake
            </h3>
            <p className="text-gray-600 mb-4">
              Wykrywaj treści generowane przez sztuczną inteligencję i deepfake'i
            </p>
            <span className="text-purple-600 font-semibold group-hover:underline">
              Rozpocznij grę →
            </span>
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-50 p-3 rounded-xl">
            <CheckCircle className="text-green-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Zalety programu NaukOWIEC</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <Users className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Międzypokoleniowy transfer wiedzy</h3>
                <p className="text-gray-600 text-sm">
                  W edukację najmłodszych włączamy nauczycieli i rodziców, tworząc kompletny ekosystem nauki
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <Shield className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Większa odporność społeczna</h3>
                <p className="text-gray-600 text-sm">
                  Duża świadomość społeczna ogranicza siłę dezinformacji i buduje odporne społeczeństwo
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <GraduationCap className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Współpraca ze środowiskiem naukowym</h3>
                <p className="text-gray-600 text-sm">
                  Treści przygotowane przy współpracy z ekspertami naukowymi i branży kreatywnej
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Darmowe i otwarte zasoby</h3>
                <p className="text-gray-600 text-sm">
                  Konspekty zajęć, materiały i pomysły dostępne za darmo dla nauczycieli i edukatorów
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 md:col-span-2">
            <div className="flex items-start gap-3">
              <Globe className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Potencjał międzynarodowy</h3>
                <p className="text-gray-600 text-sm">
                  Łatwość wdrożenia i przystępność projektu daje możliwość przyszłej integracji z innymi krajami Unii Europejskiej
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl p-12 md:p-16 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Shield className="text-white" size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gotowy, aby zostać ekspertem od internetu?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Rozpocznij swoją przygodę z NaukOWIEC już dziś!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onStartGame("fakenews")}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Rozpocznij naukę
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
