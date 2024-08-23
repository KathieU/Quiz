import PropTypes from "prop-types";
import "./ResultPage.css";

const ResultPage = ({ score, totalQuestions, onTryAgain }) => {
  const handleTryAgain = () => {
    onTryAgain();
  };

  const getComments = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) return "Excellent job!";
    if (percentage >= 80) return "Great work!";
    if (percentage >= 50) return "Good effort!";
    return "Better luck next time!";
  };

  return (
    <div className="result-page slide-up">
      <header className="result-page-header">
        <h2>Quiz Result</h2>
      </header>
      <div className="result-content">
        <h3>
          Your Score: {score} out of {totalQuestions}
        </h3>
        <p>{getComments()}</p>
        <div className="result-buttons">
          <button onClick={handleTryAgain}>Try Again</button>
          <a
            href={`https://twitter.com/intent/tweet?text=I scored ${score} out of ${totalQuestions} in the quiz!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

ResultPage.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onTryAgain: PropTypes.func.isRequired,
};

export default ResultPage;
