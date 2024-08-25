import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./QuestionPage.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const QuestionPage = ({
  questionData,
  previousQuestionData,
  questionNumber,
  onAnswerSelect,
  selectedAnswer,
  onShowAnswer,
}) => {
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    setAnimationKey(Date.now());
  }, [questionData]);

  const handleOptionClick = (option) => {
    onAnswerSelect(option);
  };

  return (
    <div className="question-page-container">
      {/* Render the front page as the previous page when it's the first question */}
      {questionNumber === 1 && (
        <div className="question-page previous front-page-background">
          {/* This acts as a background, replicating the front page appearance */}
        </div>
      )}

      {previousQuestionData && questionNumber > 1 && (
        <div
          className="question-page previous"
          style={{ backgroundImage: `url(${previousQuestionData.bgImage})` }}
        >
          <Sidebar
            currentPage={`question-${questionNumber - 2}`}
            questions={[]}
          />
          <Header />
          <div className="question-content">
            <h3>{previousQuestionData.question}</h3>
            <ul className="options-list">
              {previousQuestionData.options.map((option, index) => (
                <li key={index} className="option">
                  <span className="circle" />
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div
        key={animationKey}
        className="question-page active"
        style={{ backgroundImage: `url(${questionData.bgImage})` }}
      >
        <Sidebar
          currentPage={`question-${questionNumber - 1}`}
          questions={[]}
        />
        <Header />
        <div className="question-content">
          <h3>{questionData.question}</h3>
          <ul className="options-list">
            {questionData.options.map((option, index) => (
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
    </div>
  );
};

QuestionPage.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
  previousQuestionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
  }), // Previous question is optional
  questionNumber: PropTypes.number.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
  onShowAnswer: PropTypes.func.isRequired,
};

export default QuestionPage;
