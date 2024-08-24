import { useNavigate } from "react-router-dom";
import "./FrontPage.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

function FrontPage() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="front-page">
      <Sidebar currentPage="front" questions={[]} />
      <Header />
      <div className="front-page-content">
        <div className="background-image"></div>
        <button className="start-quiz-button" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default FrontPage;
