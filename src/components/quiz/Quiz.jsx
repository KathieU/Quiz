import { useState } from "react";
import "./Quiz.css";
import questions from "../../question";
import Sidebar from "../sidebar/Sidebar";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1); // Start at -1 for the intro page
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleSelectAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleShowAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(-1);
    setCorrectAnswersCount(0);
  };

  const getFinalComment = () => {
    if (correctAnswersCount === questions.length) {
      return "Genius";
    } else if (correctAnswersCount >= questions.length / 2) {
      return "Well done";
    } else {
      return "Better luck next time";
    }
  };

  return (
    <div className="quiz-container">
      <Sidebar questions={questions} currentQuestionIndex={currentQuestion} />
      <div className="quiz-content">
        {currentQuestion === -1 ? (
          <div
            className="intro"
            style={{ backgroundImage: "url(../src/assets/landing.png)" }}
          >
            <h1>Welcome to the Quiz</h1>
            <p>Test your knowledge with these questions!</p>
            <button onClick={handleNextQuestion}>Start Quiz</button>
          </div>
        ) : currentQuestion < questions.length ? (
          <div className="quiz-slide-container">
            {currentQuestion > 0 && (
              <div
                className={`quiz-slide previous`}
                style={{
                  backgroundImage: `url(${
                    questions[currentQuestion - 1].bgImage
                  })`,
                }}
              >
                <div className="question">
                  <h2>{questions[currentQuestion - 1].question}</h2>
                </div>
                <div className="answers">
                  {questions[currentQuestion - 1].options.map(
                    (option, index) => (
                      <button key={index} className="answer">
                        {option}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
            <div
              key={currentQuestion}
              className={`quiz-slide active`}
              style={{
                backgroundImage: `url(${questions[currentQuestion].bgImage})`,
              }}
            >
              <div className="question">
                <h2>{questions[currentQuestion].question}</h2>
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
                      {currentQuestion === questions.length - 1
                        ? "Check My Score"
                        : "Next Question"}
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
          </div>
        ) : (
          <div className="quiz-end">
            <h2>Quiz finished!</h2>
            <p>
              You got {correctAnswersCount} out of {questions.length} questions
              correct.
            </p>
            <p>{getFinalComment()}</p>
            <div className="share-links">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=your-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Facebook
              </a>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=your-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on LinkedIn
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=your-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on X
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Instagram
              </a>
            </div>
            <button onClick={handleRestartQuiz}>Restart Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
