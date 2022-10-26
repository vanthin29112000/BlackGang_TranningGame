import React, { useState } from "react";
import { listAnswer } from "../../Data/data";

export const FigureOutAnswer = ({ question, onCheckFinish, onSaveResult }) => {
   const [isTrue, setIsTrue] = useState(question.isTrue || false);
   const [answer, setAnswer] = useState(question.answer || 0);

   const ChooseAnswer = (value) => {
      if (value === question.result) {
         setIsTrue(true);
         onSaveResult(question.id, true, value);
         onCheckFinish(true);
      } else {
         onCheckFinish(false);
         onSaveResult(question.id, false, value);
      }

      setAnswer(value);
   };
   return (
      <>
         <div className="figure-out__body-question-item-question-answer">
            <img src={question.questionImg} alt=".png"></img>
            <div className="figure-out__body-question-item-answer">
               {listAnswer.length > 0 &&
                  listAnswer.map((ele, index) =>
                     answer > 0 && index + 1 === answer ? (
                        isTrue ? (
                           <b
                              className="figure-out__body-question-result-true"
                              key={index}
                           >
                              {ele}
                           </b>
                        ) : (
                           <b
                              className="figure-out__body-question-result-false"
                              key={index}
                           >
                              {ele}
                           </b>
                        )
                     ) : answer === 0 ? (
                        <p
                           onClick={() => {
                              ChooseAnswer(index + 1);
                           }}
                           key={index}
                        >
                           {ele}
                        </p>
                     ) : (
                        <p key={index}>{ele}</p>
                     )
                  )}
            </div>
         {answer > 0 && (
            <div className="figure-out__body-question-result">
               {" "}
               <b> Đáp án </b>: {listAnswer[question.result - 1]}
            </div>

         )}
         </div>
      </>
   );
};
