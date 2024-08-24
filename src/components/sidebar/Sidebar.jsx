import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ currentPage }) => {
  return (
    <div className="sidebar">
      <h2>Quiz Navigation</h2>
      <ul>
        <li className={currentPage === "front" ? "active" : ""}>Front Page</li>
        {[...Array(5)].map((_, index) => (
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
};

export default Sidebar;
