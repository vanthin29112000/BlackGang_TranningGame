import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewRanking } from "../Data/answer";
import { countQuestion, question } from "../Data/question";
import { shuffle } from "../seeder";
import { Clock } from "../Clock";
import { Question } from "../Question";
import { handleAddResult, handleNextGame } from "../../Redux/Slice";
export const RenderQuestion = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [showSentence, setShowSentence] = useState(0);
   const [arrAnswer, setArrAnswer] = useState([]);
   const [countCorrect, setCountCorrect] = useState(0);

   question = shuffle(question);
   const checkResultAndSave = (result, numQuestion) => {
      let tempObj = {
         ...question[numQuestion],
      };

      if (question[numQuestion].result === result) {
         tempObj["correct"] = true;
         setCountCorrect(countCorrect + 1);
      } else {
         tempObj["correct"] = false;
      }

      arrAnswer.push(tempObj);
      setArrAnswer(arrAnswer);

      if (showSentence + 1 <= countQuestion) {
         setShowSentence(showSentence + 1);
      }
      // else {
      //    history("/handgame/result");
      // }
   };

   const finishGame = (minutes, second) => {
      // const tempObj = {
      //    daySubmitted: new Date(),
      //    arrAnswer: arrAnswer,
      //    finishTime: { minutes, second },
      // };
      // console.log(tempObj, countCorrect);
      // addNewRanking(tempObj);
      const tempObj = {
         timeFinish: { minutes, second },
         countCorrect: countCorrect,
         countQuestion: countQuestion,
      };
      dispatch(handleAddResult(tempObj));
      dispatch(handleNextGame());
      // navigate("/");
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
