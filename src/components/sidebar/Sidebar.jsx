import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ currentPage }) => {
  return (
    <div className="sidebar">
      <div className="menu-button">Menu</div>
      <div className="sidebar-content">
        <ul className="sidebar-items">
          <li className="sidebar-item">
            <div
              className={`bar ${currentPage === "front" ? "active" : ""}`}
            ></div>
            <span>Know your workplace 2024</span>
          </li>
          {[...Array(5)].map((_, index) => {
            const questionId = `question-${index + 1}`;
            return (
              <li key={questionId} className="sidebar-item">
                <div
                  className={`bar ${
                    currentPage === questionId ? "active" : ""
                  }`}
                ></div>
                <span>Question {index + 1}</span>
              </li>
            );
          })}
          <li className="sidebar-item">
            <div
              className={`bar ${currentPage === "result" ? "active" : ""}`}
            ></div>
            <span>How did you do?</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Sidebar;
