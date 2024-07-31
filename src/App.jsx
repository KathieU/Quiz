import { useState } from "react";

import "./App.css";
import "./components/sidebar/Sidebar.css";
import Sidebar from "./components/sidebar/Sidebar";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Who is the CEO of Techpoint?",
    options: ["Chidinma", "Yinka", "Muyiwa", "Ifeanyi"],
    correct: "Muyiwa",
  },
  {
    question: "Who is Techpoint Digest author?",
    options: ["Chimgozirim", "Victoria", "Oluwanifemi", "Bolu"],
    correct: "Victoria",
  },
  {
    question: "What year was Techpoint founded?",
    options: ["2015", "2009", "2020", "2021"],
    correct: "2015",
  },
  // Add more questions here
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleShowAnswer = () => setShowAnswer(true);

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz-container">
      <Sidebar questions={questions} currentQuestionIndex={currentQuestion} />
      <div className="quiz-content">
        {currentQuestion < questions.length ? (
          <div className="quiz-slide active">
            <div className="question">
              {questions[currentQuestion].question}
            </div>
            <div className="answers">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`answer ${
                    selectedAnswer === option ? "selected" : ""
                  }`}
                  onClick={() => handleSelectAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {showAnswer && (
              <div className="modal">
                <div className="modal-content">
                  <div className="correct-answer">
                    The correct answer is {questions[currentQuestion].correct}
                  </div>
                  <button
                    className="next-question"
                    onClick={handleNextQuestion}
                  >
                    Next Question
                  </button>
                </div>
              </div>
            )}
            {!showAnswer && (
              <button className="show-answer" onClick={handleShowAnswer}>
                Show Answer
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-end">Quiz finished!</div>
        )}
      </div>
    </div>
  );
};

const App = () => <Quiz />;

export default App;
