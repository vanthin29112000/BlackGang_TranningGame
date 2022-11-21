import React, { useState, useEffect } from "react";
import { CountDown } from "../../GamePlay/CountDown";
import { PlayGame } from "../../GamePlay/PlayGame";
import { RenderCell } from "../../GamePlay/RenderCell";
import { countMax, getCell } from "../../Data";
import "./numFinding.css";
import { shuffle } from "../../seeder";
import { useDispatch } from "react-redux";
import { handleAddResult, handleNextGame } from "../../../Redux/Slice";
import { useNavigate } from "react-router-dom";
export const NumberFinding = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [start, setStart] = useState(true);
   const [countDown, setCountDown] = useState(false);
   const [count, setCount] = useState(1);
   const [countFail, setCountFail] = useState(0);
   const [cell, setCell] = useState([]);
   const [isStop, setIsStop] = useState(false);

   const setCountTimer = () => {
      setCountDown(!countDown);
   };

   const shuffleCell = () => {
      const temp = shuffle(getCell());
      console.log(temp);
      setCell([...temp]);
   };

   useEffect(() => {
      shuffleCell();
   }, []);

   //    const changeStateStart = () => {
   //       setStart(!start);
   //    };

   const onCheckedResult = (result) => {
      const resultArr = cell.filter((ele) => ele[0] === count);
      if (resultArr[0][1] === Number(result)) {
         if (count + 1 <= countMax) {
            setCount(count + 1);
         } else {
            setIsStop(true);
         }
      } else {
         setCountFail(countFail + 1);
      }
   };

   const onFinishGame = (minutes, second) => {
      const tempObj = {
         timeFinish: { minutes, second },
         countInCorrect: countFail,
         countCorrect: count,
         countQuestion: countMax,
         name: "Number Finding Training",
      };
      dispatch(handleAddResult(tempObj));
      dispatch(handleNextGame());
      // navigate("/");
   };

   return (
      <>
         {/* {countDown === true ? (
            <CountDown
               count={count}
               countFail={countFail}
               setCount={setCountTimer}
               setStart={changeStateStart}
            ></CountDown>
         ) : (
            ""
         )} */}
         <div className="number-finding">
            <div className="number-finding__left">
               <RenderCell cell={cell}></RenderCell>
            </div>
            <div className="number-finding__right">
               <PlayGame
                  start={start}
                  index={count}
                  countFail={countFail}
                  setCount={setCountTimer}
                  onCheckedResult={onCheckedResult}
                  shuffleCell={shuffleCell}
                  onFinishGame={onFinishGame}
                  isStop={isStop}
               ></PlayGame>
            </div>
         </div>
      </>
   );
};
