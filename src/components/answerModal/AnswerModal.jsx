import PropTypes from "prop-types";
import "./AnswerModal.css";

const AnswerModal = ({ correctAnswer, onNext, isLastQuestion }) => {
  return (
    <div className="answer-modal slide-up">
      <div className="answer-content">
        <h3>The correct answer is: {correctAnswer}</h3>
        <button
          className="next-question-button"
          onClick={() => {
            console.log("Next button clicked");
            onNext();
          }}
        >
          {isLastQuestion ? "Show Result" : "Next Question"}
        </button>
      </div>
    </div>
  );
};

AnswerModal.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  isLastQuestion: PropTypes.bool.isRequired,
};

export default AnswerModal;
