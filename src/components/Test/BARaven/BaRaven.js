import React, { useState } from "react";
import { countQuestion, dataImport } from "./data/data";
import { Clock } from "./Layout/Clock";
import "./baRaven.css";
import { BaravenAnswer } from "./BaravenAnswer";
import "./grid.css";
import { timeShowResult_test } from "../../../Data/BARaven/SettingGame";
import { Logo } from "../../../layout/Logo";
export const BaRaven = () => {
   const [isStart, setIsStart] = useState(false);
   const [slideIn, setSlideIn] = useState(true);
   const [count, setCount] = useState(0);
   const [countCorrect, setCountCorrect] = useState(0);
   const [result, setResult] = useState({
      isResult: true,
      isShowResult: false,
      chooseAnswer: -1,
      resultTrue: -1,
   });

   const timeShowResult = timeShowResult_test; //Delay Show Result
   const data = dataImport;

   const onChoseAnswer = (answer) => {
      const numResult = data[count].answers.findIndex(
         (ele) => ele.isResult === true
      );

      let temp = {
         isResult: true,
         isShowResult: true,
         chooseAnswer: answer,
         resultTrue: numResult,
      };

      // check answer
      if (numResult === answer) {
         //Show result
         temp.isResult = true;
         setCountCorrect(countCorrect + 1);
      } else {
         temp.isResult = false;
      }

      setResult(temp);
      if (count + 1 <= countQuestion) {
         setTimeout(() => {
            setSlideIn(false);

            setTimeout(() => {
               setResult({ ...result, isShowResult: false });
               setCount(count + 1);
               setSlideIn(true);
            }, 100);
         }, timeShowResult);
      }
   };

   return (
      // <div className="ba-raven__container">
      <>
         <div className="ba-raven__top-content">
            <div
               style={{
                  width: "128px",
                  height: "128px",
                  position: "absolute",
                  left: "calc((100vw /12))",
                  bottom: "-74px",
                  zIndex: "2",
               }}
            >
               <div
                  style={{
                     width: "128px",
                     height: "128px",
                     margin: "0 auto",
                     border: "1px solid black",
                     borderRadius: "100px",
                  }}
               >
                  <Logo></Logo>
               </div>
            </div>
            <div className="ba-raven__top-content-clock">
               {!isStart && (
                  <Clock count={count} countTrue={countCorrect}></Clock>
               )}
            </div>
         </div>
         <div className="ba-raven__bottom-content grid-cs"></div>

         {isStart ? (
            <div className="btn-start-ba-raven__container">
               <button className="btn-start-ba-raven">BẮT ĐẦU</button>
            </div>
         ) : (
            count < countQuestion && (
               <div className="ba-raven__body">
                  <div
                     className={`ba-raven__body-bg  ${
                        slideIn ? "ba-raven__slideIn" : "ba-raven__slideOut"
                     }`}
                  >
                     <div
                        className={`row no-gutters ba-raven__top-content-item`}
                     >
                        <div className="col c-10 l-4 ba-raven__question">
                           <div className="ba-raven__question-counter">
                              {count + 1}/{countQuestion}
                           </div>
                           <img
                              src={data[count].question}
                              alt=".png"
                              className="ba-raven__question-item"
                           ></img>
                        </div>
                     </div>
                     <BaravenAnswer
                        onChoseAnswer={onChoseAnswer}
                        dataAnswer={data[count].answers}
                        result={result}
                     ></BaravenAnswer>
                  </div>
               </div>
            )
         )}
      </>
      // </div>
   );
};
