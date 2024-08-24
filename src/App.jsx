import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import questions from "./question";
import FrontPage from "./components/frontPage/FrontPage";
import QuestionPage from "./components/questionPage/QuestionPage";
import ResultPage from "./components/resultPage/ResultPage";
import AnswerModal from "./components/answerModal/AnswerModal";
import { getRandomQuestions } from "./utils";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [questionData, setQuestionData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const randomQuestions = getRandomQuestions(questions, 5);
    setQuestionData(randomQuestions);
  }, []);

  const handleNextQuestion = () => {
    const isCorrect =
      selectedAnswer === questionData[currentQuestionIndex]?.correct;
    if (isCorrect) setScore(score + 1);

    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowModal(false);
    } else {
      setShowModal(false);
      navigate("/result");
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleShowAnswer = () => {
    setShowModal(true);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="app-container">
      <div className={`content ${location.pathname}`}>
        <Routes>
          <Route
            path="/"
            element={<FrontPage onStartQuiz={() => navigate("/quiz")} />}
          />
          <Route
            path="/quiz"
            element={
              <QuestionPage
                questionData={questionData[currentQuestionIndex]}
                previousQuestionData={
                  currentQuestionIndex > 0
                    ? questionData[currentQuestionIndex - 1]
                    : null
                }
                questionNumber={currentQuestionIndex + 1}
                onAnswerSelect={handleAnswerSelect}
                selectedAnswer={selectedAnswer}
                onShowAnswer={handleShowAnswer}
                isLastQuestion={
                  currentQuestionIndex === questionData.length - 1
                }
              />
            }
          />
          <Route
            path="/result"
            element={
              <ResultPage
                score={score}
                totalQuestions={questionData.length}
                onTryAgain={handleResetQuiz}
                previousQuestionData={questionData[currentQuestionIndex - 1]}
              />
            }
          />
        </Routes>
      </div>

      {showModal && location.pathname.startsWith("/quiz") && (
        <AnswerModal
          correctAnswer={questionData[currentQuestionIndex]?.correct}
          onNext={handleNextQuestion}
          isLastQuestion={currentQuestionIndex === questionData.length - 1}
        />
      )}
    </div>
  );
}

export default App;
