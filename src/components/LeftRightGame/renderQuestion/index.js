import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewRanking } from "../Data/answer";
import { countQuestion, question } from "../Data/question";
import { shuffle } from "../../../seeder";
import { Clock } from "../Clock";
import { Question } from "../Question";

export const RenderQuestion = () => {
   const [showSentence, setShowSentence] = useState(0);
   const history = useNavigate();
   const [arrAnswer, setArrAnswer] = useState([]);

   const checkResultAndSave = (result, numQuestion) => {
      let tempObj = {
         ...question[numQuestion],
      };

      if (question[numQuestion].result === result) {
         tempObj["correct"] = true;
      } else {
         tempObj["correct"] = false;
      }

      arrAnswer.push(tempObj);
      setArrAnswer(arrAnswer);

      if (showSentence + 1 < countQuestion) {
         setShowSentence(showSentence + 1);
      } else {
         history("/handgame/result");
      }
   };

   const finishGame = (time) => {
      const tempObj = {
         daySubmitted: new Date(),
         arrAnswer: arrAnswer,
         finishTime: time,
      };

      addNewRanking(tempObj);
   };

   return (
      <>
         <div className="hand-quiz-game__container">
            <Clock
               countQuestion={countQuestion}
               showSentence={showSentence}
               finishGame={finishGame}
            ></Clock>
            <Question
               countQuestion={countQuestion}
               showSentence={showSentence}
               question={question[showSentence]}
               checkResultAndSave={checkResultAndSave}
               key={showSentence}
            ></Question>
         </div>
      </>
   );
};
