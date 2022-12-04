import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../../../layout/Logo";
import "./quizGame.css";

export const Question = ({ showSentence, question, checkResultAndSave }) => {
   const [selectedSentence, setSelectedSentence] = useState(-1);
   const [isCorrect, setIsCorrect] = useState(true);

   return (
      <>
         <div
            style={{
               width: "148px",
               height: "148px",
               position: "absolute",
               top: "calc(100vh / 3)",
               left: "calc(100vw / 6)",
            }}
         >
            <div
               style={{
                  width: "148px",
                  height: "148px",
                  margin: "0 auto",
                  border: "1px solid black",
                  borderRadius: "100px",
               }}
            >
               <Logo></Logo>
            </div>
         </div>
         <div className="hand-quiz-game__bg showSlide">
            <img src={question.image} alt=".png"></img>
            <div className="number-question">
               <p className="number-question__content">
                  Question {showSentence + 1}
               </p>
            </div>
            <div className="question">{question.question}</div>
            <div className="answer">
               {selectedSentence === -1
                  ? question.answer.map((ele, index) => (
                       <div
                          className="choose-answer"
                          key={index}
                          onClick={() => {
                             setSelectedSentence(index);

                             if (index !== question.result) setIsCorrect(false);
                             setTimeout(() => {
                                checkResultAndSave(index, showSentence);
                                setSelectedSentence(-1);
                             }, 300);
                          }}
                       >
                          <p>{ele}</p>
                       </div>
                    ))
                  : isCorrect
                  ? question.answer.map((ele, index) => (
                       <div
                          className={
                             index === selectedSentence
                                ? "choose-answer choose-active"
                                : "choose-answer"
                          }
                          key={index}
                       >
                          <p>{ele}</p>
                       </div>
                    ))
                  : question.answer.map((ele, index) => (
                       <div
                          className={
                             index === question.result
                                ? "choose-answer choose-active"
                                : "choose-answer choose-not-correct"
                          }
                          key={index}
                       >
                          <p>{ele}</p>
                       </div>
                    ))}
            </div>
         </div>
      </>
   );
};
