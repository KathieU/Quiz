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
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <div className="bar-wrapper">
              <div
                className={`bar ${currentPage === page.id ? "active" : ""} ${
                  page.id === "front" ? "front-bar" : ""
                } ${page.id === "result" ? "result-bar" : ""}`}
              >
                {page.id === "front" && (
                  <span
                    className={`menu-text ${
                      currentPage === page.id ? "active-menu-text" : ""
                    }`}
                  >
                    Menu
                  </span>
                )}
              </div>

              <span
                className={`${currentPage !== "front" ? "" : "front-text"} ${
                  currentPage === page.id ? "active-text" : ""
                }`}
              >
                {page.name}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="question-page-background"></div>
    </div>
  );
};

Sidebar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Sidebar;
