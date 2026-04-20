import { useState } from "react";
import { Search, CheckCircle2, XCircle, Lightbulb } from "lucide-react";

const challenges = [
  {
    id: 1,
    question: "Znajdź wiarygodne źródło informacji o bezpiecznym korzystaniu z internetu",
    options: [
      { text: "Artykuł na nieznanym blogu bez autora", correct: false },
      { text: "Strona gov.pl z oficjalnymi wytycznymi", correct: true },
      { text: "Post na forum internetowym", correct: false },
      { text: "Wiadomość od nieznajomego na czacie", correct: false }
    ],
    hint: "Zawsze szukaj oficjalnych źródeł z domeną .gov.pl lub .edu.pl"
  },
  {
    id: 2,
    question: "Które hasło wyszukiwania pomoże znaleźć informacje o faktach?",
    options: [
      { text: '"czy to prawda" plotka sensacja', correct: false },
      { text: "oficjalne źródło nazwa instytucji", correct: true },
      { text: "SZOKUJĄCE tajemnicze", correct: false },
      { text: "anonimowe źródło wyciek", correct: false }
    ],
    hint: "Unikaj sensacyjnych słów kluczowych, szukaj oficjalnych źródeł"
  },
  {
    id: 3,
    question: "Jak sprawdzić wiarygodność strony internetowej?",
    options: [
      { text: "Sprawdzić czy ma ładną grafikę", correct: false },
      { text: "Sprawdzić autora, datę publikacji i źródła", correct: true },
      { text: "Kliknąć w pierwszą stronę z Google", correct: false },
      { text: "Sprawdzić ile ma reklam", correct: false }
    ],
    hint: "Zawsze weryfikuj autora, datę i czy artykuł podaje źródła swoich informacji"
  }
];

export function SearchGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  const currentChallenge = challenges[currentIndex];
  const isLastQuestion = currentIndex === challenges.length - 1;
  const answered = selectedOption !== null;

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);

    if (currentChallenge.options[optionIndex].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowHint(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowHint(false);
  };

  if (isLastQuestion && answered) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="text-blue-600" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Świetna robota!</h3>
        <p className="text-xl mb-6 text-gray-700">
          Twój wynik: <span className="font-bold text-purple-600">{score}/{challenges.length}</span>
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
          Wyzwanie {currentIndex + 1}/{challenges.length}
        </span>
        <span className="text-sm text-purple-600 font-semibold">
          Punkty: {score}
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start gap-2">
          <Search className="text-purple-600 flex-shrink-0 mt-1" size={24} />
          {currentChallenge.question}
        </h3>
      </div>

      <div className="space-y-3 mb-6">
        {currentChallenge.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = option.correct;

          let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";

          if (answered) {
            if (isCorrect) {
              buttonClass += "bg-green-100 border-green-500 ";
            } else if (isSelected && !isCorrect) {
              buttonClass += "bg-red-100 border-red-500 ";
            } else {
              buttonClass += "bg-gray-50 border-gray-200 ";
            }
          } else {
            buttonClass += "bg-white border-purple-300 hover:border-purple-500 hover:bg-purple-50 cursor-pointer ";
          }

          return (
            <button
              key={index}
              onClick={() => !answered && handleAnswer(index)}
              disabled={answered}
              className={buttonClass}
            >
              <div className="flex items-center gap-3">
                {answered && isCorrect && <CheckCircle2 className="text-green-600" size={20} />}
                {answered && isSelected && !isCorrect && <XCircle className="text-red-600" size={20} />}
                <span className="font-medium">{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {!answered && (
        <button
          onClick={() => setShowHint(!showHint)}
          className="w-full mb-4 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
        >
          <Lightbulb size={20} />
          {showHint ? 'Ukryj podpowiedź' : 'Pokaż podpowiedź'}
        </button>
      )}

      {showHint && !answered && (
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-700 flex items-start gap-2">
            <Lightbulb className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
            {currentChallenge.hint}
          </p>
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
        >
          {isLastQuestion ? 'Zobacz wynik' : 'Następne wyzwanie →'}
        </button>
      )}
    </div>
  );
}
