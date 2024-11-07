import React, { useState } from 'react';
import './Posttest.css';

const Posttest = () => {
  const questions = [
    {
      question: "How can you open a file for both reading and writing using fs.open()?",
      options: [
        "a) Set the flags option to 'r+'",
        "b) Set the flags option to 'rw'",
        "c) Set the flags option to 'w+'",
        "d) Set the flags option to 'a+'"
      ],
      correctAnswer: 0,
    },
    {
      question: "What does the fs.watch() method in Node.js do?",
      options: [
        "a) Tracks changes to a file or directory",
        "b) Reads the content of a file",
        "c) Monitors memory usage",
        "d) Streams a video file"
      ],
      correctAnswer: 0,
    },
    {
      question: "What happens when you attempt to read a file that does not exist using fs.readFileSync()?",
      options: [
        "a) It returns null",
        "b) It creates a new file",
        "c) It throws an error",
        "d) It returns an empty string"
      ],
      correctAnswer: 2,
    },
    {
      question: "Which of the following is the correct method to delete a file in Node.js?",
      options: ["a) fs.remove()", "b) fs.unlink()", "c) fs.delete()", "d) fs.destroy()"],
      correctAnswer: 1,
    },
    {
      question: "What data type does fs.readFileSync() return when reading a file?",
      options: ["a) String", "b) Buffer", "c) JSON", "d) Array"],
      correctAnswer: 1,
    },
    {
      question: "If a Node.js file operation does not provide a callback, what happens?",
      options: [
        "a) It defaults to synchronous behavior.",
        "b) It will throw an error.",
        "c) It will execute asynchronously by default.",
        "d) The operation will fail silently without error."
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of fs.stat() in Node.js?",
      options: [
        "a) To check if a file exists",
        "b) To delete a file",
        "c) To retrieve information about a file or directory",
        "d) To move a file to another directory"
      ],
      correctAnswer: 2,
    },
    {
      question: "Which method is used to change the permissions of a file in Node.js?",
      options: ["a) fs.permissions()", "b) fs.chmod()", "c) fs.access()", "d) fs.updatePermissions()"],
      correctAnswer: 1,
    },
    {
      question: "You need to read a large file in chunks instead of all at once. Which fs method and concept would you use?",
      options: ["a) fs.createReadStream()", "b) fs.readFile()", "c) fs.readFileSync()", "d) fs.readBuffer()"],
      correctAnswer: 0,
    },
    {
      question: "How would you handle an error when attempting to read a file that does not exist using fs.readFile()?",
      options: [
        "a) Wrap the function call in a try-catch block",
        "b) Check the file’s existence first with fs.existsSync()",
        "c) Pass an error-first callback to fs.readFile()",
        "d) All of the above"
      ],
      correctAnswer: 3,
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const score = Object.keys(userAnswers).filter(
    (questionIndex) =>
      userAnswers[questionIndex] === questions[questionIndex].correctAnswer
  ).length;

  return (
    <div className="quiz-container">
      <h2 className="heading">Node.js File System Post-Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h3 className="question-text">{question.question}</h3>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-block">
                <label
                  className={`option ${
                    submitted &&
                    userAnswers[questionIndex] === optionIndex &&
                    optionIndex !== question.correctAnswer
                      ? 'incorrect-option'
                      : submitted && optionIndex === question.correctAnswer
                      ? 'correct-option'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    onChange={() =>
                      handleAnswerChange(questionIndex, optionIndex)
                    }
                    disabled={submitted}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {!submitted && (
          <button type="submit" className="submit-button">
            Submit Quiz
          </button>
        )}

        {submitted && (
          <div className="score-block">
            <h4>
              Your score: {score} out of {questions.length}
            </h4>
          </div>
        )}
      </form>
    </div>
  );
};

export default Posttest;
