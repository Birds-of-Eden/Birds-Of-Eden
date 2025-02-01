import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TestYourIQ = () => {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [questions] = useState([
    {
      question: "What is the time complexity of a binary search algorithm?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "Which HTML element do we put the JavaScript?",
      options: ["<javascript>", "<js>", "<script>", "<scripting>"],
      answer: "<script>",
    },
    // Add more questions as needed
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState(null);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (userAnswer === questions[currentQuestionIndex].answer) {
      setResult("Correct!");
    } else {
      setResult("Incorrect!");
    }

    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setResult(null);
    }, 1000);
  };

  const handleStartTest = () => {
    setIsTestOpen(true);
    setCurrentQuestionIndex(0);
    setUserAnswer("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <h1 className="mb-4 text-center text-4xl font-bold text-gray-800 dark:text-white">
            Test Your IQ
          </h1>
          <button
            onClick={handleStartTest}
            className="mb-8 w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:w-auto"
          >
            Start IQ Test
          </button>
          <AnimatePresence>
            {isTestOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
                >
                  <button
                    className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    onClick={() => setIsTestOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  {currentQuestionIndex < questions.length ? (
                    <div>
                      <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                        {questions[currentQuestionIndex].question}
                      </h3>
                      {questions[currentQuestionIndex].options.map(
                        (option, index) => (
                          <div key={index} className="mb-4">
                            <input
                              type="radio"
                              id={`option-${index}`}
                              name="answer"
                              value={option}
                              checked={userAnswer === option}
                              onChange={handleAnswerChange}
                              className="mr-2"
                            />
                            <label
                              htmlFor={`option-${index}`}
                              className="text-gray-600 dark:text-gray-400"
                            >
                              {option}
                            </label>
                          </div>
                        ),
                      )}
                      <div className="flex justify-end">
                        <button
                          onClick={handleNextQuestion}
                          className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Submit Answer
                        </button>
                      </div>
                      {result && (
                        <p className="mt-4 text-center font-bold text-gray-800 dark:text-white">
                          {result}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                        Test Completed!
                      </h3>
                      <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
                        You've completed the IQ test. Thank you for
                        participating!
                      </p>
                      <button
                        onClick={() => setIsTestOpen(false)}
                        className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TestYourIQ;
