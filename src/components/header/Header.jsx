import "./Header.css";
import downloadIcon from "../../assets/icons/downloadIcon.png";
import infoIcon from "../../assets/icons/infoIcon.png";

const Header = () => {
  return (
    <div className="header">
      <h1>
        THE <span>NIGERIAN WORKSPACE</span> REPORT 2024
      </h1>
      <div className="header-buttons-container">
        <a className="more-info-button">
          <button>
            More info <img src={infoIcon} alt="Info Icon" />
          </button>
        </a>

        <a className="download-report-button">
          <button>
            Download report <img src={downloadIcon} alt="Download Icon" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
