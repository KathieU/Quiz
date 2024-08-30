import PropTypes from "prop-types";
import "./AnswerModal.css";

const AnswerModal = ({
  correctAnswer,
  onNext,
  isLastQuestion,
  bgImage,
  answerText,
  answerDescription,
}) => {
  return (
    <div className="answer-modal">
      <div className="answer-content-container">
        <div
          className="image-section"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="color-section">
          <div className="answer-content">
            <h3>{correctAnswer}</h3>
            <p className="answer-text">{answerText}</p>
            <p className="answer-description"> {answerDescription}</p>
            <div className="general-button-container">
              <button className="general-button" onClick={onNext}>
                {isLastQuestion ? "FINISH" : "CONTINUE YOUR QUEST"}
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
    </div>
  );
};

AnswerModal.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  isLastQuestion: PropTypes.bool.isRequired,
  bgImage: PropTypes.string.isRequired,
  answerText: PropTypes.string.isRequired,
  answerDescription: PropTypes.string.isRequired,
};

export default AnswerModal;
