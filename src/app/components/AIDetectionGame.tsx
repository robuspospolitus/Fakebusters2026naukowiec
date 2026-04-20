import { useState } from "react";
import { Sparkles, CheckCircle2, XCircle, Info } from "lucide-react";

const examples = [
  {
    id: 1,
    type: "image",
    description: "Zdjęcie krajobrazowe",
    isAI: true,
    clues: [
      "Dziwne zniekształcenia w tle",
      "Nienaturalne oświetlenie",
      "Powtarzające się wzory"
    ],
    explanation: "To obraz stworzony przez AI! Zwróć uwagę na nienaturalne detale i powtarzające się wzory, które często występują w obrazach generowanych przez sztuczną inteligencję."
  },
  {
    id: 2,
    type: "text",
    content: "Witam! Dziś pokażę Wam, jak zrobić pyszne ciasteczka. Najpierw potrzebujemy mąki, cukru i masła...",
    isAI: false,
    clues: [
      "Naturalny styl pisania",
      "Osobiste zwroty",
      "Brak nadmiernej perfekcji"
    ],
    explanation: "To prawdziwy tekst napisany przez człowieka! Ma naturalny, osobisty ton i nie jest zbyt doskonały."
  },
  {
    id: 3,
    type: "video",
    description: "Nagranie wypowiedzi polityka",
    isAI: true,
    clues: [
      "Nienaturalne ruchy ust",
      "Dziwne migotanie wokół twarzy",
      "Robotyczne gesty"
    ],
    explanation: "To deepfake! Zwróć uwagę na nienaturalne ruchy ust, które nie zawsze pasują do dźwięku, oraz dziwne artefakty wokół twarzy."
  },
  {
    id: 4,
    type: "text",
    content: "W kontekście zaawansowanych technologii informacyjnych, należy rozważyć wieloaspektowe implikacje cyfrowej transformacji w obszarze edukacyjnym, uwzględniając paradygmaty innowacyjności...",
    isAI: true,
    clues: [
      "Bardzo formalne słownictwo",
      "Długie, skomplikowane zdania",
      "Brak konkretów, ogólniki"
    ],
    explanation: "To tekst wygenerowany przez AI! Typowe cechy: nadmiernie formalne słownictwo, długie zdania pełne ogólników bez konkretnych przykładów."
  },
  {
    id: 5,
    type: "image",
    description: "Fotografia rodzinna z wakacji",
    isAI: false,
    clues: [
      "Naturalne proporcje ciała",
      "Realistyczne światło i cienie",
      "Spójne tło"
    ],
    explanation: "To prawdziwe zdjęcie! Wszystkie elementy są naturalne i spójne, proporcje ciała są prawidłowe, a światło i cienie wyglądają realistycznie."
  }
];

export function AIDetectionGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showClues, setShowClues] = useState(false);

  const currentExample = examples[currentIndex];
  const isLastQuestion = currentIndex === examples.length - 1;

  const handleAnswer = (isAI: boolean) => {
    setSelectedAnswer(isAI);
    setAnswered(true);

    if (isAI === currentExample.isAI) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      setShowClues(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setShowClues(false);
  };

  if (isLastQuestion && answered) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
        <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="text-purple-600" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Fantastycznie!</h3>
        <p className="text-xl mb-6 text-gray-700">
          Twój wynik: <span className="font-bold text-purple-600">{score}/{examples.length}</span>
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
          Przykład {currentIndex + 1}/{examples.length}
        </span>
        <span className="text-sm text-purple-600 font-semibold">
          Punkty: {score}
        </span>
      </div>

      <div className="mb-6">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-purple-700 uppercase tracking-wide">
              {currentExample.type === "image" ? "📸 Obraz" : currentExample.type === "video" ? "🎥 Wideo" : "📝 Tekst"}
            </span>
          </div>
          {currentExample.type === "text" ? (
            <p className="text-gray-800 italic leading-relaxed">{currentExample.content}</p>
          ) : (
            <p className="text-gray-800 font-medium">{currentExample.description}</p>
          )}
        </div>

        {!answered && (
          <button
            onClick={() => setShowClues(!showClues)}
            className="w-full mb-4 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
          >
            <Info size={20} />
            {showClues ? 'Ukryj wskazówki' : 'Pokaż wskazówki'}
          </button>
        )}

        {showClues && !answered && (
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-blue-800 mb-2">Na co zwrócić uwagę:</p>
            <ul className="space-y-1">
              {currentExample.clues.map((clue, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  {clue}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {!answered ? (
        <div className="flex gap-4">
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 bg-purple-500 text-white px-6 py-4 rounded-xl hover:bg-purple-600 transition-colors flex items-center justify-center gap-2 font-semibold"
          >
            <Sparkles size={24} />
            AI / Deepfake
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 font-semibold"
          >
            <CheckCircle2 size={24} />
            Prawdziwe
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${selectedAnswer === currentExample.isAI ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'}`}>
            <p className="font-semibold mb-2 flex items-center gap-2">
              {selectedAnswer === currentExample.isAI ? (
                <>
                  <CheckCircle2 className="text-green-600" size={20} />
                  <span className="text-green-800">Doskonale! Poprawna odpowiedź!</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-600" size={20} />
                  <span className="text-red-800">Tym razem się nie udało</span>
                </>
              )}
            </p>
            <p className="text-gray-700 text-sm">{currentExample.explanation}</p>
          </div>

          <button
            onClick={handleNext}
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
          >
            {isLastQuestion ? 'Zobacz wynik' : 'Następny przykład →'}
          </button>
        </div>
      )}
    </div>
  );
}
