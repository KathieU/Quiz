import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import questions from "./question";
import Sidebar from "./components/sidebar/Sidebar";
import FrontPage from "./components/frontPage/FrontPage";
import QuestionPage from "./components/questionPage/QuestionPage";
import ResultPage from "./components/resultPage/ResultPage";
import AnswerModal from "./components/answerModal/AnswerModal";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // const handleNextQuestion = () => {
  //   const isCorrect =
  //     selectedAnswer === questions[currentQuestionIndex].correct;
  //   if (isCorrect) setScore(score + 1);

  //   if (currentQuestionIndex < questions.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //     setSelectedAnswer(null);
  //     setShowModal(false);
  //   } else {
  //     navigate("/result");
  //   }
  // };

  const handleNextQuestion = () => {
    const isCorrect =
      selectedAnswer === questions[currentQuestionIndex].correct;
    if (isCorrect) setScore(score + 1);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowModal(false); // Close the modal
    } else {
      setShowModal(false); // Ensure modal is closed
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

  const getCurrentPage = () => {
    if (location.pathname === "/") return "front";
    if (location.pathname.startsWith("/quiz"))
      return `question-${currentQuestionIndex}`;
    if (location.pathname === "/result") return "result";
    return "";
  };

  return (
    <div className="app-container">
      <Sidebar currentPage={getCurrentPage()} />
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
                questionData={questions[currentQuestionIndex]}
                questionNumber={currentQuestionIndex + 1}
                onNext={handleNextQuestion}
                onAnswerSelect={handleAnswerSelect}
                selectedAnswer={selectedAnswer}
                onShowAnswer={handleShowAnswer}
                isLastQuestion={currentQuestionIndex === questions.length - 1}
              />
            }
          />
          <Route
            path="/result"
            element={
              <ResultPage
                score={score}
                totalQuestions={questions.length}
                onTryAgain={handleResetQuiz}
              />
            }
          />
        </Routes>
      </div>

      {showModal && location.pathname.startsWith("/quiz") && (
        <AnswerModal
          correctAnswer={questions[currentQuestionIndex].correct}
          onNext={handleNextQuestion}
          isLastQuestion={currentQuestionIndex === questions.length - 1}
        />
      )}
    </div>
  );
}

export default App;
