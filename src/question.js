import ageRange from "../src/assets/ageRange.png";
import femaleWorkers from "../src/assets/femaleWorkers.png";
import resign from "../src/assets/resign.png";
import university from "../src/assets/university.png";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
    bgImage: ageRange,
  },
  {
    question: "Who is the CEO of Techpoint?",
    options: ["Chidinma", "Yinka", "Muyiwa", "Ifeanyi"],
    correct: "Muyiwa",
    bgImage: femaleWorkers,
  },
  {
    question: "Who is Techpoint Digest author?",
    options: ["Chimgozirim", "Victoria", "Oluwanifemi", "Bolu"],
    correct: "Victoria",
    bgImage: resign,
  },
  {
    question: "What year was Techpoint founded?",
    options: ["2015", "2009", "2020", "2021"],
    correct: "2015",
    bgImage: university,
  },
];

export default questions;

// questions.js
// const questions = [
//   {
//     text: "What is the capital of France?",
//     answers: [
//       { text: "Paris" },
//       { text: "London" },
//       { text: "Berlin" },
//       { text: "Madrid" },
//     ],
//     correctAnswer: "Paris",
//   },
//   {
//     text: "What is 2 + 2?",
//     answers: [{ text: "3" }, { text: "4" }, { text: "5" }, { text: "6" }],
//     correctAnswer: "4",
//   },
//   {
//     text: "What is the color of the sky?",
//     answers: [
//       { text: "Blue" },
//       { text: "Green" },
//       { text: "Red" },
//       { text: "Yellow" },
//     ],
//     correctAnswer: "Blue",
//   },
// ];

// export default questions;
