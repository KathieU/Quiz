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
