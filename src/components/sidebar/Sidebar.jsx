import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ currentPage, questions }) => {
  return (
    <div className="sidebar">
      <h2>Quiz Navigation</h2>
      <ul>
        <li className={currentPage === "front" ? "active" : ""}>Front Page</li>
        {questions.map((_, index) => (
          <li
            key={index}
            className={currentPage === `question-${index}` ? "active" : ""}
          >
            Question {index + 1}
          </li>
        ))}
        <li className={currentPage === "result" ? "active" : ""}>Result</li>
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      correct: PropTypes.string.isRequired,
      bgImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
