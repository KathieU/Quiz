import PropTypes from "prop-types";
import "./ResultPage.css";
import "../questionPage/QuestionPage.css";
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
      <div className="question-page">
        <div
          className="question-page-image-background"
          style={{
            backgroundImage: `linear-gradient(rgba(35, 33, 32, 0.83), rgba(35, 33, 32, 0.83)),url(${previousQuestionData.bgImage})`,
          }}
        >
          <Sidebar currentPage="result" questions={[]} />
          <Header />
          <div className="question-content">
            <h3>{previousQuestionData.question}</h3>
            <div className="options-container">
              <p>Select an answer</p>
              <ul className="options-list">
                {previousQuestionData.options.map((option, index) => (
                  <li
                    key={index}
                    className="option"
                    // onClick={() => handleOptionClick(option)}
                  >
                    <span className="option-label">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    {/* A, B, C, etc. */}
                    <span className="option-text">{option}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      className="selected-check"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.5 13.5C7.35359 13.5 8.19883 13.3319 8.98744 13.0052C9.77606 12.6786 10.4926 12.1998 11.0962 11.5962C11.6998 10.9926 12.1786 10.2761 12.5052 9.48744C12.8319 8.69883 13 7.85359 13 7C13 6.14641 12.8319 5.30117 12.5052 4.51256C12.1786 3.72394 11.6998 3.00739 11.0962 2.40381C10.4926 1.80022 9.77606 1.32144 8.98744 0.994783C8.19883 0.668127 7.35359 0.5 6.5 0.5C4.77609 0.5 3.12279 1.18482 1.90381 2.40381C0.68482 3.62279 0 5.27609 0 7C0 8.72391 0.68482 10.3772 1.90381 11.5962C3.12279 12.8152 4.77609 13.5 6.5 13.5ZM6.33244 9.62889L9.94355 5.29556L8.83422 4.37111L5.72867 8.09706L4.12172 6.48939L3.1005 7.51061L5.26717 9.67728L5.82617 10.2363L6.33244 9.62889Z"
                        fill="#DFD4C5"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
            <div className="general-button-container">
              <button
                className="general-button"
                // onClick={onShowAnswer}
                // disabled={!selectedAnswer}
              >
                DID YOU GET IT RIGHT?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    d="M10.7096 0.85113C10.6449 0.786116 10.5679 0.734532 10.4831 0.699334C10.3983 0.664136 10.3075 0.646017 10.2157 0.646017C10.1239 0.646017 10.033 0.664136 9.94824 0.699334C9.86347 0.734532 9.78649 0.786116 9.7217 0.85113L5.56708 5.00574L1.41131 0.85113C1.2803 0.72012 1.10261 0.64652 0.917335 0.64652C0.732059 0.64652 0.554371 0.72012 0.423361 0.85113C0.292351 0.98214 0.21875 1.15983 0.21875 1.3451C0.21875 1.53038 0.292351 1.70807 0.423361 1.83908L5.07253 6.48825C5.13732 6.55326 5.2143 6.60485 5.29907 6.64004C5.38384 6.67524 5.47472 6.69336 5.5665 6.69336C5.65829 6.69336 5.74917 6.67524 5.83394 6.64004C5.9187 6.60485 5.99569 6.55326 6.06048 6.48825L10.7096 1.83908C10.7747 1.77429 10.8262 1.6973 10.8614 1.61254C10.8966 1.52777 10.9148 1.43689 10.9148 1.3451C10.9148 1.25332 10.8966 1.16244 10.8614 1.07767C10.8262 0.992904 10.7747 0.915919 10.7096 0.85113Z"
                    fill="#A74702"
                  />
                </svg>
              </button>
            </div>
          </div>
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
  previousQuestionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultPage;
