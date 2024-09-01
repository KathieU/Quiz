import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ currentPage }) => {
  const pages = [
    { name: "Know your workplace 2024", id: "front" },
    { name: "Question 1", id: "question-0" },
    { name: "Question 2", id: "question-1" },
    { name: "Question 3", id: "question-2" },
    { name: "Question 4", id: "question-3" },
    { name: "Question 5", id: "question-4" },
    { name: "How did you do?", id: "result" },
  ];

  return (
    <div className="sidebar">
      <button className="menu-button">Menu</button>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <div
              className={`bar ${currentPage === page.id ? "active" : ""}`}
            ></div>
            <span className={currentPage === page.id ? "active-text" : ""}>
              {page.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Sidebar;
