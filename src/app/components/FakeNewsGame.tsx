import { useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Naukowa sensacja: owieczki potrafią latać!",
    content: "Według badań przeprowadzonych przez nieznany uniwersytet, owieczki rozwinęły umiejętność latania.",
    isFake: true,
    explanation: "To fake news! Brak wiarygodnego źródła i naukowych dowodów. Zawsze sprawdzaj źródło informacji!"
  },
  {
    id: 2,
    title: "Ministerstwo Edukacji: Nowy program nauki cyfrowej w szkołach",
    content: "Ministerstwo Edukacji ogłosiło oficjalnie wprowadzenie zajęć z bezpieczeństwa w internecie do programu nauczania.",
    isFake: false,
    explanation: "Prawdziwa wiadomość! Pochodzi z oficjalnego źródła rządowego i jest potwierdzona."
  },
  {
    id: 3,
    title: "PILNE: Czekolada teraz zakazana dla dzieci!",
    content: "Anonimowe źródło twierdzi, że rząd planuje zakaz spożywania czekolady przez osoby poniżej 18 roku życia.",
    isFake: true,
    explanation: "To fake news! Anonimowe źródło, brak oficjalnych dokumentów, sensacyjny tytuł - klasyczne oznaki dezinformacji."
  },
  {
    id: 4,
    title: "Ostrzeżenie policji: Nowa metoda oszustw internetowych",
    content: "Policja ostrzega przed nową metodą phishingu, w której oszuści podszywają się pod banki w wiadomościach SMS.",
    isFake: false,
    explanation: "Prawdziwa informacja! Pochodzi z oficjalnego komunikatu policji i ostrzega przed realnym zagrożeniem."
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
