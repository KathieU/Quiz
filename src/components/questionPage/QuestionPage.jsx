// // import { useEffect, useState } from "react";
// // import PropTypes from "prop-types";
// // import "./QuestionPage.css";
// // import Header from "../header/Header";

// // const QuestionPage = ({
// //   questionData,

// //   onAnswerSelect,
// //   selectedAnswer,
// //   onShowAnswer,
// // }) => {
// //   const { question, options, bgImage } = questionData;
// //   const [animationKey, setAnimationKey] = useState(Date.now());

// //   useEffect(() => {
// //     setAnimationKey(Date.now());
// //   }, [questionData]);

// //   const handleOptionClick = (option) => {
// //     onAnswerSelect(option);
// //   };

// //   return (
// //     <div
// //       key={animationKey}
// //       className="question-page slide-up"
// //       style={{ backgroundImage: `url(${bgImage})` }}
// //     >
// //       <Header />
// //       <div className="question-content">
// //         <h3>{question}</h3>
// //         <ul className="options-list">
// //           {options.map((option, index) => (
// //             <li
// //               key={index}
// //               className={`option ${
// //                 selectedAnswer === option ? "selected" : ""
// //               }`}
// //               onClick={() => handleOptionClick(option)}
// //             >
// //               <span
// //                 className={`circle ${
// //                   selectedAnswer === option ? "selected-circle" : ""
// //                 }`}
// //               />
// //               {option}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <button
// //         className="show-answer-button"
// //         onClick={onShowAnswer}
// //         disabled={!selectedAnswer}
// //       >
// //         Show Answer
// //       </button>
// //     </div>
// //   );
// // };

// // QuestionPage.propTypes = {
// //   questionData: PropTypes.shape({
// //     question: PropTypes.string.isRequired,
// //     options: PropTypes.arrayOf(PropTypes.string).isRequired,
// //     bgImage: PropTypes.string.isRequired,
// //   }).isRequired,
// //   questionNumber: PropTypes.number.isRequired,
// //   onAnswerSelect: PropTypes.func.isRequired,
// //   selectedAnswer: PropTypes.string,
// //   onShowAnswer: PropTypes.func.isRequired,
// // };

// // export default QuestionPage;

// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import "./QuestionPage.css";
// import Header from "../header/Header";
// import Sidebar from "../sidebar/Sidebar"; // Import the Sidebar component

// const QuestionPage = ({
//   questionData,
//   questionNumber,
//   onAnswerSelect,
//   selectedAnswer,
//   onShowAnswer,
// }) => {
//   const { question, options, bgImage } = questionData;
//   const [animationKey, setAnimationKey] = useState(Date.now());

//   useEffect(() => {
//     setAnimationKey(Date.now());
//   }, [questionData]);

//   const handleOptionClick = (option) => {
//     onAnswerSelect(option);
//   };

//   return (
//     <div
//       key={animationKey}
//       className="question-page slide-up"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <Sidebar currentPage={`question-${questionNumber - 1}`} />{" "}
//       {/* Add the Sidebar here */}
//       <Header />
//       <div className="question-content">
//         <h3>{question}</h3>
//         <ul className="options-list">
//           {options.map((option, index) => (
//             <li
//               key={index}
//               className={`option ${
//                 selectedAnswer === option ? "selected" : ""
//               }`}
//               onClick={() => handleOptionClick(option)}
//             >
//               <span
//                 className={`circle ${
//                   selectedAnswer === option ? "selected-circle" : ""
//                 }`}
//               />
//               {option}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button
//         className="show-answer-button"
//         onClick={onShowAnswer}
//         disabled={!selectedAnswer}
//       >
//         Show Answer
//       </button>
//     </div>
//   );
// };

// QuestionPage.propTypes = {
//   questionData: PropTypes.shape({
//     question: PropTypes.string.isRequired,
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     bgImage: PropTypes.string.isRequired,
//   }).isRequired,
//   questionNumber: PropTypes.number.isRequired,
//   onAnswerSelect: PropTypes.func.isRequired,
//   selectedAnswer: PropTypes.string,
//   onShowAnswer: PropTypes.func.isRequired,
// };

// export default QuestionPage;

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./QuestionPage.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar"; // Import Sidebar

const QuestionPage = ({
  questionData,
  questionNumber,
  onAnswerSelect,
  selectedAnswer,
  onShowAnswer,
  // isLastQuestion,
}) => {
  const { question, options, bgImage } = questionData;
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    setAnimationKey(Date.now());
  }, [questionData]);

  const handleOptionClick = (option) => {
    onAnswerSelect(option);
  };

  return (
    <div
      key={animationKey}
      className="question-page slide-up"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Sidebar
        currentPage={`question-${questionNumber - 1}`}
        questions={[]} // Pass an empty array if Sidebar is not using questions
      />
      <Header />
      <div className="question-content">
        <h3>{question}</h3>
        <ul className="options-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`option ${
                selectedAnswer === option ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`circle ${
                  selectedAnswer === option ? "selected-circle" : ""
                }`}
              />
              {option}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="show-answer-button"
        onClick={onShowAnswer}
        disabled={!selectedAnswer}
      >
        Show Answer
      </button>
    </div>
  );
};

QuestionPage.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgImage: PropTypes.string.isRequired,
  }).isRequired,
  questionNumber: PropTypes.number.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
  onShowAnswer: PropTypes.func.isRequired,
  isLastQuestion: PropTypes.bool.isRequired,
};

export default QuestionPage;
