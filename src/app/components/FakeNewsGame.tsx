import { useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Czy kameleony zmieniają kolor tylko po to, by się maskować?",
    content: "Sprawdź, czy zmiana koloru u kameleonów służy wyłącznie kamuflażowi.",
    isFake: true,
    explanation: "Fałsz: Kameleony zmieniają kolor także w celu komunikacji i regulacji temperatury."
  },
  {
    id: 2,
    title: "Czy wilki wyją do księżyca?",
    content: "Czy wilki wyją, ponieważ reagują na księżyc?",
    isFake: true,
    explanation: "Fałsz: Wycie wilków służy komunikacji w stadzie."
  },
  {
    id: 3,
    title: "Czy jeże noszą jabłka na plecach?",
    content: "Popularny obrazek z bajek – czy to prawda?",
    isFake: true,
    explanation: "Fałsz: To mit, jeże nie noszą jabłek i jedzą głównie pokarm zwierzęcy."
  },
  {
    id: 4,
    title: "Czy byki reagują na kolor czerwony?",
    content: "Czy czerwona płachta denerwuje byka?",
    isFake: true,
    explanation: "Fałsz: Byki reagują na ruch, a nie kolor."
  },
  {
    id: 5,
    title: "Czy złote rybki mają pamięć 3 sekundy?",
    content: "Sprawdź, jak naprawdę działa pamięć rybek.",
    isFake: true,
    explanation: "Fałsz: Potrafią pamiętać nawet przez kilka miesięcy."
  },
  {
    id: 6,
    title: "Czy Wielki Mur Chiński widać z kosmosu?",
    content: "Czy można go zobaczyć gołym okiem z orbity?",
    isFake: true,
    explanation: "Fałsz: Jest zbyt wąski i zlewa się z otoczeniem."
  },
  {
    id: 7,
    title: "Czy człowiek używa tylko 10% mózgu?",
    content: "Popularny mit o możliwościach mózgu.",
    isFake: true,
    explanation: "Fałsz: Używamy całego mózgu."
  },
  {
    id: 8,
    title: "Czy czysta woda dobrze przewodzi prąd?",
    content: "Jak zachowuje się destylowana woda?",
    isFake: true,
    explanation: "Fałsz: Czysta woda jest izolatorem."
  },
  {
    id: 9,
    title: "Czy guma do żucia zostaje w żołądku 7 lat?",
    content: "Mit o trawieniu gumy.",
    isFake: true,
    explanation: "Fałsz: Jest wydalana w ciągu kilku dni."
  },
  {
    id: 10,
    title: "Czy piorun nie uderza dwa razy w to samo miejsce?",
    content: "Sprawdź, czy to bezpieczne założenie.",
    isFake: true,
    explanation: "Fałsz: Może uderzyć wielokrotnie."
  },
  {
    id: 11,
    title: "Czy psy widzą tylko w czerni i bieli?",
    content: "Jak wygląda świat oczami psa?",
    isFake: true,
    explanation: "Fałsz: Widzą kolory, głównie niebieski i żółty."
  },
  {
    id: 12,
    title: "Czy pomidor to owoc?",
    content: "Jak klasyfikuje go nauka?",
    isFake: false,
    explanation: "Prawda: Pomidor to owoc (jagoda)."
  },
  {
    id: 13,
    title: "Czy truskawka to jagoda?",
    content: "Czy należy do jagód?",
    isFake: true,
    explanation: "Fałsz: To owoc rzekomy."
  },
  {
    id: 14,
    title: "Czy zasada 5 sekund działa?",
    content: "Czy można bezpiecznie podnieść jedzenie?",
    isFake: true,
    explanation: "Fałsz: Bakterie przenoszą się natychmiast."
  },
  {
    id: 15,
    title: "Czy Frankenstein to imię potwora?",
    content: "Czy tak naprawdę nazywa się potwór?",
    isFake: true,
    explanation: "Fałsz: To nazwisko naukowca."
  },
  {
    id: 16,
    title: "Czy Ziemia jest idealną kulą?",
    content: "Jaki naprawdę ma kształt?",
    isFake: true,
    explanation: "Fałsz: Jest spłaszczona na biegunach."
  },
  {
    id: 17,
    title: "Czy możesz pić wodę, którą pił dinozaur?",
    content: "Czy woda krąży w obiegu?",
    isFake: false,
    explanation: "Prawda: Woda krąży w obiegu zamkniętym."
  },
  {
    id: 18,
    title: "Czy wszystko w internecie jest prawdziwe?",
    content: "Czy można ufać każdej informacji online?",
    isFake: true,
    explanation: "Fałsz: W internecie jest wiele fałszywych informacji."
  },
  {
    id: 19,
    title: "Czy fake news to celowo zmyślona informacja?",
    content: "Definicja fake newsa.",
    isFake: false,
    explanation: "Prawda: Fake news to celowa dezinformacja."
  },
  {
    id: 20,
    title: "Czy zdjęcie zawsze jest dowodem prawdy?",
    content: "Czy zdjęcia mogą wprowadzać w błąd?",
    isFake: true,
    explanation: "Fałsz: Zdjęcia mogą być zmanipulowane."
  }
];

export function FakeNewsGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const currentNews = newsItems[currentIndex];
  const isLastQuestion = currentIndex === newsItems.length - 1;

  const handleAnswer = (isFake: boolean) => {
    setSelectedAnswer(isFake);
    setAnswered(true);

    if (isFake === currentNews.isFake) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
  };

  if (isLastQuestion && answered) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
        <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-purple-600" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Gratulacje!</h3>
        <p className="text-xl mb-6 text-gray-700">
          Twój wynik: <span className="font-bold text-purple-600">{score}/{newsItems.length}</span>
        </p>
        <button
          onClick={handleRestart}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Zagraj ponownie
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-purple-600 font-semibold">
          Pytanie {currentIndex + 1}/{newsItems.length}
        </span>
        <span className="text-sm text-purple-600 font-semibold">
          Punkty: {score}
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-2">
          <AlertTriangle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
          {currentNews.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{currentNews.content}</p>
      </div>

      {!answered ? (
        <div className="flex gap-4">
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 bg-red-500 text-white px-6 py-4 rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2 font-semibold"
          >
            <XCircle size={24} />
            Fake News!
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 font-semibold"
          >
            <CheckCircle2 size={24} />
            Prawda
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${selectedAnswer === currentNews.isFake ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'}`}>
            <p className="font-semibold mb-2 flex items-center gap-2">
              {selectedAnswer === currentNews.isFake ? (
                <>
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span className="text-green-800">Brawo! Poprawna odpowiedź!</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-600" size={20} />
                  <span className="text-red-800">Niestety, to błędna odpowiedź</span>
                </>
              )}
            </p>
            <p className="text-gray-700 text-sm">{currentNews.explanation}</p>
          </div>

          <button
            onClick={handleNext}
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
          >
            {isLastQuestion ? 'Zobacz wynik' : 'Następne pytanie →'}
          </button>
        </div>
      )}
    </div>
  );
}
