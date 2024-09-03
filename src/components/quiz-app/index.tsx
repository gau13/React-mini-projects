import React, { useState } from "react";
import "./Quiz.css";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const Quiz = () => {
  const questions: Question[] = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1905", "1912", "1920", "1931"],
      correctAnswer: "1912",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Won", "Ringgit", "Baht"],
      correctAnswer: "Yen",
    },
    {
      question: "Which programming language is also a gem?",
      options: ["Ruby", "Python", "Java", "C++"],
      correctAnswer: "Ruby",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: "Canberra",
    },
  ];

  const [currQue, setCurrQue] = useState<number>(0);
  const [option, setOption] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);

  const handleAnswer = (opt: string) => {
    console.log(opt);
    setOption(opt);
  };

  const handleNext = () => {
    if (option === questions[currQue].correctAnswer) {
      console.log("u");
      setScore((prev) => prev + 1);
    }
    setCurrQue((prev) => prev + 1);

    if (currQue === questions.length - 1) {
      console.log(currQue, questions.length - 1);
      setResult(true);
    }
  };

  const handlePrev = () => {
    setCurrQue((prev) => prev - 1);
  };

  return (
    <>
      <h1>Quiz App</h1>
      {!result ? (
        <div>
          <div className="container">
            <div>{<p>{questions[currQue].question}</p>}</div>
            {questions[currQue].options.map((ans) => (
              <button className="ans" onClick={() => handleAnswer(ans)}>
                {ans}
              </button>
            ))}
          </div>
          <div className="navigation">
            <button disabled={currQue === 0} onClick={handlePrev}>
              Prev
            </button>
            <button onClick={handleNext}>
              {currQue < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Your score</p>
          {score}/{questions.length}
        </div>
      )}
    </>
  );
};

export default Quiz;
