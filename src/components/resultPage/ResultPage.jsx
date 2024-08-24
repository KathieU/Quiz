import PropTypes from "prop-types";
import "./ResultPage.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const ResultPage = ({
  score,
  totalQuestions,
  onTryAgain,
  previousQuestionData,
}) => {
  return (
    <div className="result-page-container">
      <div
        className="previous-question-page"
        style={{
          backgroundImage: `url(${previousQuestionData.bgImage})`,
        }}
      >
        <Sidebar currentPage="result" questions={[]} />
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

      <div className="result-page">
        <Sidebar currentPage="result" questions={[]} />
        <Header />
        <div className="result-content">
          <h1>Quiz Results</h1>
          <p>
            Your score: {score} out of {totalQuestions}
          </p>
          <button onClick={onTryAgain}>Try Again</button>
        </div>
      </div>
    </div>
  );
};

ResultPage.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onTryAgain: PropTypes.func.isRequired,
  previousQuestionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultPage;
