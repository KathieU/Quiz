import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ questions, currentQuestionIndex }) => {
  return (
    <div className="sidebar">
      <h3>Questions</h3>
      <ul>
        <li
          key={-1}
          className={`sidebar-item ${
            currentQuestionIndex === -1 ? "active" : ""
          }`}
        >
          <div
            className={`sidebar-indicator ${
              currentQuestionIndex === -1 ? "active" : ""
            }`}
          ></div>
          Intro
        </li>
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
        <li
          key={questions.length}
          className={`sidebar-item ${
            currentQuestionIndex === questions.length ? "active" : ""
          }`}
        >
          <div
            className={`sidebar-indicator ${
              currentQuestionIndex === questions.length ? "active" : ""
            }`}
          ></div>
          End
        </li>
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
