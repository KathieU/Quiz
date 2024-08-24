import PropTypes from "prop-types";
import "./ResultPage.css";
import Sidebar from "../sidebar/Sidebar"; // Import Sidebar

const ResultPage = ({ score, totalQuestions, onTryAgain }) => {
  return (
    <div className="result-page">
      <Sidebar
        currentPage="result"
        questions={[]} // Pass an empty array if Sidebar is not using questions
      />
      <div className="result-content">
        <h1>Quiz Results</h1>
        <p>
          Your score: {score} out of {totalQuestions}
        </p>
        <button onClick={onTryAgain}>Try Again</button>
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
