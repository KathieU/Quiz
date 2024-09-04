import PropTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ currentPage }) => {
  const pages = [
    { id: "front" },
    { id: "question-0" },
    { id: "question-1" },
    { id: "question-2" },
    { id: "question-3" },
    { id: "question-4" },
    { id: "result" },
  ];

  const currentIndex = pages.findIndex((page) => page.id === currentPage);

  return (
    <div
      className={`sidebar ${
        currentPage === "front"
          ? "front"
          : currentPage === "result"
          ? "result"
          : ""
      }`}
    >
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <div className="bar-wrapper">
              <div
                className={`bar ${index <= currentIndex ? "active" : ""} ${
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
