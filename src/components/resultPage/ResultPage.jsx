import PropTypes from "prop-types";
import "./ResultPage.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import facebookIcon from "../../assets/icons/facebookIcon.png";
import instagramIcon from "../../assets/icons/instagramIcon.png";
import linkedInIcon from "../../assets/icons/linkedInIcon.png";
import xIcon from "../../assets/icons/xIcon.png";

const ResultPage = ({
  score,
  totalQuestions,
  // onTryAgain,
  previousQuestionData,
}) => {
  const getResultText = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) {
      return "Genius!";
    } else if (percentage >= 80) {
      return "Excellent!";
    } else if (percentage >= 50) {
      return "Good Job!";
    } else if (percentage >= 30) {
      return "Keep Trying!";
    } else {
      return "Better Luck Next Time!";
    }
  };

  const shareData = {
    title: "Your Quiz Result",
    text: `I scored ${score} out of ${totalQuestions}!`,
    url: window.location.href,
  };

  const handleShareClick = (platform) => {
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log("Successful share"))
        .catch((err) => console.error("Error sharing:", err));
    } else {
      fallbackShare(platform);
    }
  };

  const fallbackShare = (platform) => {
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareData.url
      )}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareData.text
      )}&url=${encodeURIComponent(shareData.url)}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        shareData.url
      )}&title=${encodeURIComponent(shareData.text)}`;
    } else if (platform === "instagram") {
      alert(
        "Instagram does not support direct URL sharing via web. Please share manually."
      );
      return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="result-page-container">
      <div
        className="previous-question-page"
        style={{
          backgroundImage: `url(${previousQuestionData.bgImage})`,
        }}
      >
        <Sidebar currentPage="result" questions={[]} />
        <Header />
        <div className="question-content">
          <h3>{previousQuestionData.question}</h3>
          <ul className="options-list">
            {previousQuestionData.options.map((option, index) => (
              <li key={index} className="option">
                <span className="circle" />
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="result-page">
        <Header />
        <div className="result-page-background">
          <Sidebar currentPage="result" questions={[]} />
          <div className="result-content-container">
            <h2>Quest Result</h2>
            <div className="result-content">
              <div className="score-container">
                <p className="result-text">
                  {getResultText(score, totalQuestions)}
                </p>
                <div className="score-circle">
                  <p className="score">
                    {score}/{totalQuestions}
                  </p>
                </div>
                <div className="share-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M15.8096 14.57C15.1446 14.57 14.5496 14.8325 14.0946 15.2438L7.85582 11.6125C7.89957 11.4113 7.93457 11.21 7.93457 11C7.93457 10.79 7.89957 10.5887 7.85582 10.3875L14.0246 6.79125C14.4971 7.22875 15.1183 7.5 15.8096 7.5C17.2621 7.5 18.4346 6.3275 18.4346 4.875C18.4346 3.4225 17.2621 2.25 15.8096 2.25C14.3571 2.25 13.1846 3.4225 13.1846 4.875C13.1846 5.085 13.2196 5.28625 13.2633 5.4875L7.09457 9.08375C6.62207 8.64625 6.00082 8.375 5.30957 8.375C3.85707 8.375 2.68457 9.5475 2.68457 11C2.68457 12.4525 3.85707 13.625 5.30957 13.625C6.00082 13.625 6.62207 13.3537 7.09457 12.9162L13.3246 16.5563C13.2808 16.74 13.2546 16.9325 13.2546 17.125C13.2546 18.5338 14.4008 19.68 15.8096 19.68C17.2183 19.68 18.3646 18.5338 18.3646 17.125C18.3646 15.7163 17.2183 14.57 15.8096 14.57Z"
                      fill="#F79646"
                    />
                  </svg>
                  <p>SHARE YOUR SCORE</p>
                  <div className="social-icons">
                    <a
                      href="#"
                      onClick={() => handleShareClick("facebook")}
                      aria-label="Share on Facebook"
                    >
                      <img src={facebookIcon} alt="Facebook Icon" />
                    </a>
                    <a
                      href="#"
                      onClick={() => handleShareClick("twitter")}
                      aria-label="Share on Twitter"
                    >
                      <img src={xIcon} alt="X Icon" />
                    </a>
                    <a
                      href="#"
                      onClick={() => handleShareClick("linkedin")}
                      aria-label="Share on LinkedIn"
                    >
                      <img src={linkedInIcon} alt="LinkedIn Icon" />
                    </a>
                    <a
                      href="#"
                      onClick={() => handleShareClick("instagram")}
                      aria-label="Share on Instagram"
                    >
                      <img src={instagramIcon} alt="Instragam Icon" />
                    </a>
                  </div>
                </div>
                <button className="download-report">Download report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ResultPage.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onTryAgain: PropTypes.func.isRequired,
  previousQuestionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultPage;
