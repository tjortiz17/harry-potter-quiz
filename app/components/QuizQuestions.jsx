import React, { useState } from 'react';

const QuizQuestions = ({ questions }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const goToNextQuestion = () => {
    //event.preventDefault();
    if (selectedOption === questions[currentQuestionIndex].correct_answer) {
      setScore((current) => current + 1);
    }
    if (currentQuestionIndex === questions.length - 1){
      setQuizCompleted(true);
      return;
    }
    setCurrentQuestionIndex((current) => current + 1);
  }

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  }
  console.log(score);
  return !quizCompleted ? (
    <div className="rounded-sm m-9 w-9/12">
      <div className="w-full bg-gray-700 rounded-full">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${(currentQuestionIndex / questions.length) * 100}%`}}>{` ${(currentQuestionIndex / questions.length) * 100}%`}</div>
      </div>
      <div className="flex mt-4 justify-left items-center gap-2">
        <div className="bg-gray-700 flex justify-center items-center rounded-md w-11 h-11 text-white p-3">
          {currentQuestionIndex + 1}
        </div>
        <p>{questions[currentQuestionIndex].question}</p>
      </div>
      <ul className="mt-7 flex flex-col gap-2">
        {questions[currentQuestionIndex].options.map(( option, index ) => (
          <li key={index} className="p-3 ml-11 w-10/12 border border-gray-700 rounded-md hover:bg-gray-700 hover:text-white transition-all select-none">
            <div className='flex items-center ps-3'>
              <input id={`radio-${index}`} type="radio" value={option} name="options" className="w-4 h-4" required checked={selectedOption === option} onChange={handleRadioChange}/>
              <label htmlFor={`radio-${index}`} className="w-full py-3 ms-2">{option}</label>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-7">
        <button
          className="p-2 px-5 text-[15px] text-white rounded-md bg-gray-700 mr-[70px]"
          onClick={(() => goToNextQuestion())}
        >
          Submit
        </button>
      </div>
    </div>
  ) : (
    <div className="max-w-sm p-6 bg-gray-800 border border-gray-700 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Final Score:</h5>
      <p className="mb-3 font-normal text-gray-400">{`${score} / ${questions.length}`}</p>
      <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Play Again?
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  );
}

export default QuizQuestions;