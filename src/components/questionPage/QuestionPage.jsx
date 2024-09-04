import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./QuestionPage.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import questionBoy from "../../assets/questionBoy.png";

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

  const highlightText = (text, highlights) => {
    if (!highlights) return text;

    const highlightArray = Array.isArray(highlights)
      ? highlights
      : [highlights];
    const parts = text.split(new RegExp(`(${highlightArray.join("|")})`, "gi"));
    return parts.map((part, index) =>
      highlightArray.includes(part) ? (
        <span key={index} style={{ color: "#FF6B00" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="question-page-container">
      {questionNumber === 1 && <div className="question-page previous"></div>}

      {previousQuestionData && questionNumber > 1 && (
        <div className="question-page previous">
          <div
            className="question-page-image-background"
            style={{
              backgroundImage: `linear-gradient(rgba(35, 33, 32, 0.83), rgba(35, 33, 32, 0.83)),url(${previousQuestionData.bgImage})`,
            }}
          >
            <Sidebar
              currentPage={`question-${questionNumber - 2}`}
              questions={[]}
            />
            <Header />
            <div className="question-content">
              <h3>
                {highlightText(
                  previousQuestionData.question,
                  previousQuestionData.highlights
                )}
              </h3>
              <div className="options-container">
                <p>Select an answer</p>
                <ul className="options-list">
                  {questionData.options.map((option, index) => (
                    <li
                      key={index}
                      className={`option ${
                        selectedAnswer === option ? "selected" : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <span className="option-label">
                        {String.fromCharCode(65 + index)}.
                      </span>{" "}
                      {/* A, B, C, etc. */}
                      <span className="option-text">{option}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        className="selected-check"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.5 13.5C7.35359 13.5 8.19883 13.3319 8.98744 13.0052C9.77606 12.6786 10.4926 12.1998 11.0962 11.5962C11.6998 10.9926 12.1786 10.2761 12.5052 9.48744C12.8319 8.69883 13 7.85359 13 7C13 6.14641 12.8319 5.30117 12.5052 4.51256C12.1786 3.72394 11.6998 3.00739 11.0962 2.40381C10.4926 1.80022 9.77606 1.32144 8.98744 0.994783C8.19883 0.668127 7.35359 0.5 6.5 0.5C4.77609 0.5 3.12279 1.18482 1.90381 2.40381C0.68482 3.62279 0 5.27609 0 7C0 8.72391 0.68482 10.3772 1.90381 11.5962C3.12279 12.8152 4.77609 13.5 6.5 13.5ZM6.33244 9.62889L9.94355 5.29556L8.83422 4.37111L5.72867 8.09706L4.12172 6.48939L3.1005 7.51061L5.26717 9.67728L5.82617 10.2363L6.33244 9.62889Z"
                          fill="#DFD4C5"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="general-button-container">
              <button
                className="general-button"
                onClick={onShowAnswer}
                disabled={!selectedAnswer}
              >
                DID YOU GET IT RIGHT?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    d="M10.7096 0.85113C10.6449 0.786116 10.5679 0.734532 10.4831 0.699334C10.3983 0.664136 10.3075 0.646017 10.2157 0.646017C10.1239 0.646017 10.033 0.664136 9.94824 0.699334C9.86347 0.734532 9.78649 0.786116 9.7217 0.85113L5.56708 5.00574L1.41131 0.85113C1.2803 0.72012 1.10261 0.64652 0.917335 0.64652C0.732059 0.64652 0.554371 0.72012 0.423361 0.85113C0.292351 0.98214 0.21875 1.15983 0.21875 1.3451C0.21875 1.53038 0.292351 1.70807 0.423361 1.83908L5.07253 6.48825C5.13732 6.55326 5.2143 6.60485 5.29907 6.64004C5.38384 6.67524 5.47472 6.69336 5.5665 6.69336C5.65829 6.69336 5.74917 6.67524 5.83394 6.64004C5.9187 6.60485 5.99569 6.55326 6.06048 6.48825L10.7096 1.83908C10.7747 1.77429 10.8262 1.6973 10.8614 1.61254C10.8966 1.52777 10.9148 1.43689 10.9148 1.3451C10.9148 1.25332 10.8966 1.16244 10.8614 1.07767C10.8262 0.992904 10.7747 0.915919 10.7096 0.85113Z"
                    fill="#A74702"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div key={animationKey} className="question-page active">
        <div
          className="question-page-image-background"
          style={{
            backgroundImage: `linear-gradient(rgba(35, 33, 32, 0.83), rgba(35, 33, 32, 0.83)), url(${questionData.bgImage})`,
          }}
        >
          <img
            className="question-page-boy"
            src={questionBoy}
            alt="Boy with magnifying glass"
          />
          <Sidebar
            currentPage={`question-${questionNumber - 1}`}
            questions={[]}
          />
          <Header />
          <div className="question-content">
            <h3>
              {highlightText(questionData.question, questionData.highlights)}
            </h3>
            <div className="options-container">
              <p>Select an answer</p>
              <ul className="options-list">
                {questionData.options.map((option, index) => (
                  <li
                    key={index}
                    className={`option ${
                      selectedAnswer === option ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <span className="option-label">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    {/* A, B, C, etc. */}
                    <span className="option-text">{option}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      className="selected-check"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5 13.5C7.35359 13.5 8.19883 13.3319 8.98744 13.0052C9.77606 12.6786 10.4926 12.1998 11.0962 11.5962C11.6998 10.9926 12.1786 10.2761 12.5052 9.48744C12.8319 8.69883 13 7.85359 13 7C13 6.14641 12.8319 5.30117 12.5052 4.51256C12.1786 3.72394 11.6998 3.00739 11.0962 2.40381C10.4926 1.80022 9.77606 1.32144 8.98744 0.994783C8.19883 0.668127 7.35359 0.5 6.5 0.5C4.77609 0.5 3.12279 1.18482 1.90381 2.40381C0.68482 3.62279 0 5.27609 0 7C0 8.72391 0.68482 10.3772 1.90381 11.5962C3.12279 12.8152 4.77609 13.5 6.5 13.5ZM6.33244 9.62889L9.94355 5.29556L8.83422 4.37111L5.72867 8.09706L4.12172 6.48939L3.1005 7.51061L5.26717 9.67728L5.82617 10.2363L6.33244 9.62889Z"
                        fill="#DFD4C5"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="general-button-container">
            <button
              className="general-button"
              onClick={onShowAnswer}
              disabled={!selectedAnswer}
            >
              DID YOU GET IT RIGHT?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
              >
                <path
                  d="M10.7096 0.85113C10.6449 0.786116 10.5679 0.734532 10.4831 0.699334C10.3983 0.664136 10.3075 0.646017 10.2157 0.646017C10.1239 0.646017 10.033 0.664136 9.94824 0.699334C9.86347 0.734532 9.78649 0.786116 9.7217 0.85113L5.56708 5.00574L1.41131 0.85113C1.2803 0.72012 1.10261 0.64652 0.917335 0.64652C0.732059 0.64652 0.554371 0.72012 0.423361 0.85113C0.292351 0.98214 0.21875 1.15983 0.21875 1.3451C0.21875 1.53038 0.292351 1.70807 0.423361 1.83908L5.07253 6.48825C5.13732 6.55326 5.2143 6.60485 5.29907 6.64004C5.38384 6.67524 5.47472 6.69336 5.5665 6.69336C5.65829 6.69336 5.74917 6.67524 5.83394 6.64004C5.9187 6.60485 5.99569 6.55326 6.06048 6.48825L10.7096 1.83908C10.7747 1.77429 10.8262 1.6973 10.8614 1.61254C10.8966 1.52777 10.9148 1.43689 10.9148 1.3451C10.9148 1.25332 10.8966 1.16244 10.8614 1.07767C10.8262 0.992904 10.7747 0.915919 10.7096 0.85113Z"
                  fill="#A74702"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

QuestionPage.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string), // Optional array of words to highlight
  }).isRequired,
  previousQuestionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string), // Optional array of words to highlight
  }),
  questionNumber: PropTypes.number.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
  onShowAnswer: PropTypes.func.isRequired,
};

export default QuestionPage;
