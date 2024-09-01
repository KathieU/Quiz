import ageRange from "../src/assets/ageRange.png";
import femaleWorkers from "../src/assets/femaleWorkers.png";
import resign from "../src/assets/resign.png";
import university from "../src/assets/university.png";

const questions = [
  {
    question:
      "What share of universities in Nigeria do you think are privately owned?",
    options: ["43%", "27%", "54.4%"],
    correct: "54.4%",
    bgImage: ageRange,
    highlights: ["universities"],
    answerText: "Private universities",
    bgColor: "red",
    answerDescription:
      " accounted for the largest share of higher institution of learning in Nigeria which is largely attributable to their control of universities and polytechnics in the country.",
  },
  {
    question:
      "What's the share of female in the Nigerian labour force as of 2023?",
    options: ["50.1%", "43.78%", "49.2%"],
    correct: "43.78%",
    bgImage: femaleWorkers,
    highlights: ["female"],
    answerText: "Females",
    bgColor: "red",
    answerDescription:
      "The share of females in the Nigerian labour force has steadily declined since 2014, but the female share of the population was between 49.46% and 49.58% between 2014 and 2023.",
  },
  {
    question:
      "Which of the following age range has the largest share of the Nigerian labour force?",
    options: ["20-29", "30-39", "Above 40"],
    correct: "20-29",
    bgImage: resign,
    highlights: ["age", "range"],
    answerText: "Age range",
    bgColor: "red",
    answerDescription:
      "accounted for the highest share of the population but occupied the fourth position for the respondents.",
  },
  {
    question:
      "Which of the following is the top reason why people resign from their place of work?",
    options: ["Bad leadership", "Better offer", "Lack of career advancement"],
    correct: "Better offer",
    bgImage: university,
    highlights: ["resign"],
    // answerText: "Females",
    bgColor: "red",
    answerDescription:
      "There is no correlation between the number of benefits aside from remuneration and the how long people have stayed with their current company.",
  },
  {
    question:
      "Do you think a large share of HR professionals consider the location of job applicants' higher institution of learning when hiring? ",
    options: ["Yes", "No"],
    correct: "No",
    bgImage: university,
    highlights: ["location"],
    // answerText: "Females",
    bgColor: "red",
    answerDescription:
      "78.2% of HR don’t consider the location of applicants' higher institutions of learning when hiring.",
  },
  {
    question:
      " Which of the following do you think are more likely to earn a million naira monthly?",
    options: [
      "Product Marketing Manager",
      "Senior Software Engineer",
      "Data Analyst",
    ],
    correct: "Senior Software Engineer",
    bgImage: ageRange,
    highlights: "capital",
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
  {
    question:
      "Which industry do you think is likely to pay higher than ₦700k in a month?",
    options: ["Services", "Telecommunications", "Financial Services"],
    correct: "Financial Services",
    bgImage: femaleWorkers,
    highlights: ["is", "CEO"],
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
  {
    question:
      "What's the largest share of people's salary do you think they spend on transportation in a month?",
    options: ["20-329%", "30-40%", "45-50%"],
    correct: "45-50%",
    bgImage: resign,
    highlights: "author",
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
  {
    question:
      "Which of these cities do you think has most of its residents spending the largest share of their monthly remuneration on feeding and transportation?",
    options: ["Yaba", "Kaduna", "Owerri"],
    correct: "Owerri",
    bgImage: university,
    highlights: ["year", "founded"],
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },

  {
    question:
      "What level of importance do you think HR professionals place on education when making hiring decisions? ",
    options: ["Extremely important", "Important", "Not that important"],
    correct: "Important",
    bgImage: ageRange,
    highlights: "capital",
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },

  {
    question:
      " What level of importance do you think HR professionals place on the duration in past workplaces when making hiring decisions?",
    options: ["Extremely important", "Important", "Not that important"],
    correct: "Important",
    bgImage: femaleWorkers,
    highlights: ["is", "CEO"],
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
  {
    question:
      "Which do you think HR professionals consider most in making promotion decisions?",
    options: ["Mastery of essential skills", "Productivity", "Loyalty"],
    correct: "Productivity",
    bgImage: resign,
    highlights: "author",
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },

  {
    question:
      "Which of the following age range is more likely to work as a freelancer?",
    options: ["21-30", "31-40", "41-40"],
    correct: "31-40",
    bgImage: university,
    highlights: ["year", "founded"],
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
  {
    question:
      "What share of Nigeria's labour force do you think are employers of labour as of 2022?",
    options: ["20%", "1.48%", "27.3%"],
    correct: "1.48%",
    bgImage: ageRange,
    highlights: "capital",
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
  {
    question:
      "Which gender do you think has the largest share of its population in the world force?",
    options: ["Male", "Female"],
    correct: "Male",
    bgImage: femaleWorkers,
    highlights: ["is", "CEO"],
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
  {
    question:
      "What percentage of the Nigerian workforce has a correlation between their discipline and their job?",
    options: ["44.13%", "58.68%", "49%"],
    correct: "58.68%",
    bgImage: resign,
    highlights: "author",
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
  {
    question:
      "What do you think is the biggest challenge faced by remote and hybrid model workers?",
    options: [
      "Overcoming distractions",
      "Internet connection",
      "Electricity supply",
    ],
    correct: "2015",
    bgImage: university,
    highlights: ["year", "founded"],
    answerText: "Females",
    bgColor: "red",
    answerDescription: "Mary had a little lamb",
  },
];

export default questions;
