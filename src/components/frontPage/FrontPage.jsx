import { useNavigate } from "react-router-dom";
import "./FrontPage.css";

function FrontPage() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="front-page">
      <header className="front-page-header">
        <h1>Welcome to the Quiz!</h1>
      </header>
      <div className="front-page-content">
        <div className="background-image">
          {/* You can replace this with your background image */}
        </div>
        <button className="start-quiz-button" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default FrontPage;
