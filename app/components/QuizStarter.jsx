"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import QuizQuestions from './QuizQuestions';

const QuizStarter = ({ questions }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  
  const handleClick = () => {
    setQuizStarted(true);
  }

  return (
    <div className="flex-col gap-3 p-4 flex justify-center items-center">
      { !quizStarted ? (
        <>
          <Image src="/potter-glasses.png" alt="Harry Potter glasses and lightning bolt scar icon." width={130} height={130} />
          <h2 className="text 2-xl font-bold">Trivia awaits! Start a 10 question quiz.</h2>
          <span className="text-[13px] font-light">
            Click below to begin your journey here
          </span>
          <button onClick={() => handleClick()} className="p-3 px-4 text-white text-[12px] bg-gray-700 rounded-md">
            Start the quiz!
          </button>
        </>
      ) : <QuizQuestions questions={questions} />
      }
    </div>
  );
}

export default QuizStarter;