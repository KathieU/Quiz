import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        THE <span>NIGERIAN WORKSPACE</span> REPORT 2024
      </h1>
      <div className="header-buttons-container">
        <a className="more-info-button">
          <button>More info</button>
        </a>

        <a className="download-report-button">
          <button>Download report</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
