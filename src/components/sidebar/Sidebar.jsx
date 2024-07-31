import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ questions, currentQuestionIndex }) => {
  return (
    <div className="sidebar">
      <h3>Questions</h3>
      <ul>
        {questions.map((_, index) => (
          <li
            key={index}
            className={`sidebar-item ${
              currentQuestionIndex === index ? "active" : ""
            }`}
          >
            <div
              className={`sidebar-indicator ${
                currentQuestionIndex === index ? "active" : ""
              }`}
            ></div>
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      correct: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
};

export default Sidebar;
