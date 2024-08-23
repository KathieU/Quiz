import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./QuestionPage.css";

const QuestionPage = ({
  questionData,
  questionNumber,
  onAnswerSelect,
  selectedAnswer,
  onShowAnswer,
}) => {
  const { question, options, bgImage } = questionData;
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    // Trigger re-render by changing the key when questionData changes
    setAnimationKey(Date.now());
  }, [questionData]);

  const handleOptionClick = (option) => {
    onAnswerSelect(option);
  };

  return (
    <div
      key={animationKey} // Force re-render when question changes
      className="question-page slide-up"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <header className="question-page-header">
        <h2>Question {questionNumber}</h2>
      </header>
      <div className="question-content">
        <h3>{question}</h3>
        <ul className="options-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`option ${
                selectedAnswer === option ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`circle ${
                  selectedAnswer === option ? "selected-circle" : ""
                }`}
              />
              {option}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="show-answer-button"
        onClick={onShowAnswer}
        disabled={!selectedAnswer}
      >
        Show Answer
      </button>
    </div>
  );
};

QuestionPage.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
  questionNumber: PropTypes.number.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
  onShowAnswer: PropTypes.func.isRequired,
};

export default QuestionPage;
