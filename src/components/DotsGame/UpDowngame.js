import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import LoopIcon from "@mui/icons-material/Loop";
import CheckIcon from "@mui/icons-material/Check";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CloseIcon from "@mui/icons-material/Close";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import BadgeIcon from "@mui/icons-material/Badge";
import Square from "./Square";
import StartupCover from "./StartupCover";
import Timer from "../Timer";
import "./UpDowngame.css";
const UpDownGame = () => {
   const playerName = sessionStorage.getItem("playerName");
   const [findNumber, setFindNumber] = useState(1);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isSelecting, setIsSelecting] = useState(true);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
   const [countinCorrectAnswer, setCountIncorrectAnswer] = useState(0);
   const [countAnswer, setCountAnswer] = useState(0);
   const [curResult, setCurResult] = useState({
      playerName: "",
      correctAns: 0,
      totalAns: 0,
      incorrectAns: 0,
   });
   let SavedResult = JSON.parse(sessionStorage.getItem("savedResult")) || [];
   const ArrQuantity = 190;
   const timeRef = useRef(0);

   const generateRandomArr = () =>
      Array(ArrQuantity)
         .fill()
         .map(() => ({
            value: Math.floor(6 * Math.random() + 1),
            isChecked: false,
         }));

   const [answers, setAnswers] = useState(generateRandomArr());

   const handleInputChange = (event) => {
      setFindNumber(Number(event.target.value));
   };

   window.addEventListener(
      "keydown",
      function (e) {
         // space and arrow keys
         if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
         }
      },
      false
   );

   const handleKeyDown = ({ key }) => {
      switch (key) {
         case "ArrowLeft":
            if (isSubmitted) {
               return;
            }
            if (answers[currentIndex].value === findNumber)
               setCountCorrectAnswer(countCorrectAnswer + 1);
            else setCountIncorrectAnswer(countinCorrectAnswer + 1);

            answers[currentIndex].isChecked = !answers[currentIndex].isChecked;
            setAnswers([...answers]);

            return;

         case "ArrowRight":
            if (isSubmitted) {
               return;
            } else if (currentIndex > ArrQuantity) {
               setIsSubmitted(true);
               handleSaveResult();
            }
            setCurrentIndex(currentIndex + 1);
            return;

         default:
            return;
      }
   };
   const handleSaveResult = () => {
      SavedResult.push(curResult);
      sessionStorage.setItem("savedResult", JSON.stringify(SavedResult));
   };

   useEffect(() => {
      document.onkeydown = handleKeyDown;
      const temp = {
         playerName: playerName,
         correctAns: countCorrectAnswer,
         totalAns: countAnswer,
         incorrectAns: countinCorrectAnswer,
         endTime: timeRef,
      };
      setCurResult({ ...curResult, ...temp });
   }, [currentIndex]);
   if (isSelecting) {
      return (
         <div className="p-0">
            {
               <StartupCover
                  handleInputChange={handleInputChange}
                  findNumber={findNumber}
                  setIsSelecting={setIsSelecting}
                  setCurrentIndex={setCurrentIndex}
                  setCountAnswer={setCountAnswer}
                  isSelecting={isSelecting}
                  answers={answers}
               />
            }
         </div>
      );
   }

   return (
      <>
         {!isSelecting && <></>}
         <div className=" bg-cus vw-100 vh-100 p-0">
            {!isSelecting && <div className="bg-image"></div>}

            {!isSelecting && (
               <div style={{ width: "100%", height: "100%", display: "flex" }}>
                  <div className="play-dots-game-area">
                     <div className="play-dots-game-area-bg">
                        <div className="row bg-white border-5 border-dark w-100">
                           {answers.map(({ value, isChecked }, index) => {
                              return (
                                 <Square
                                    value={value}
                                    index={index}
                                    isChecked={isChecked}
                                    findNumber={findNumber}
                                    isSubmitted={isSubmitted}
                                    isSelecting={isSelecting}
                                    currentIndex={currentIndex}
                                 />
                              );
                           })}
                        </div>
                        <div className="row d-flex justify-content-between mt-3 w-100">
                           {findNumber && !isSelecting ? (
                              <div className="col-auto p-0">
                                 <div className="d-flex justify-content-start">
                                    <button
                                       className="btn btn-light border border-dark border-4"
                                       onClick={() => {
                                          setIsSubmitted(false);
                                          setFindNumber(1);
                                          setIsSelecting(true);
                                          setCountIncorrectAnswer(0);
                                          setCountCorrectAnswer(0);
                                          setAnswers(generateRandomArr());
                                          setCurrentIndex(0);
                                       }}
                                    >
                                       Replay <LoopIcon />
                                    </button>
                                 </div>
                              </div>
                           ) : null}
                           <div className="col-auto p-0">
                              <div className="d-flex justify-content-start">
                                 {!isSubmitted && findNumber && !isSelecting && (
                                    <button
                                       className="btn btn-light border border-dark border-4"
                                       onClick={() => {
                                          setIsSubmitted(true);
                                          handleSaveResult();
                                       }}
                                    >
                                       Submit <SendIcon />
                                    </button>
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=" cus-pos">
                     <NavLink to="/">
                        <div
                           style={{
                              height: "150px",
                              width: "150px",
                              marginBottom: "16px",
                              display: "flex",
                              justifyContent: "center",
                           }}
                        >
                           <img
                              className="logo-image "
                              src="assets/img/DatLaptoplogo.png"
                              alt=".png"
                              style={{ position: "relative" }}
                           ></img>
                        </div>
                     </NavLink>

                     <p className="d-flex m-0 p-0 justify-content-center align-items-center text-white fw-normal fs-5">
                        Find number: &nbsp;
                        <span className="fw-bold">({findNumber})</span>
                     </p>

                     <table
                        className="table-primary"
                        style={{ margin: " 8px 0px" }}
                     >
                        <tr className="border bg-light">
                           <p className="px-2">
                              <BadgeIcon className="me-3 ms-2" />
                              {`Name: ${playerName}`}
                           </p>
                        </tr>
                        <tr className="border bg-dark text-white mx-2">
                           <p className="px-2">
                              <CheckIcon className="me-3 ms-2" />
                              {`Correct: ${countCorrectAnswer}/${countAnswer}`}
                           </p>
                        </tr>
                        <tr className="border bg-light">
                           <p className="px-2">
                              <ReportProblemIcon className="me-3 ms-2" />
                              {`Skip: ${countAnswer - countCorrectAnswer}`}
                           </p>
                        </tr>
                        <tr className="border bg-dark text-white">
                           <p className="px-2">
                              <CloseIcon className="me-3 ms-2" />
                              {`Incorrect: ${countinCorrectAnswer}`}
                           </p>
                        </tr>
                        {isSubmitted && (
                           <>
                              <tr className="border bg-light ">
                                 <p className="px-2">
                                    <AccessAlarmIcon className="me-3 ms-2" />
                                    {`${timeRef.currentMinutes}:${
                                       timeRef.currentSeconds > 9
                                          ? timeRef.currentSeconds
                                          : "0" + timeRef.currentSeconds
                                    }:${
                                       timeRef.currentMili / 10 > 9
                                          ? timeRef.currentMili / 10
                                          : "0" + timeRef.currentMili / 10
                                    }`}
                                 </p>
                              </tr>
                              <tr className="table-primary text-center">
                                 <NavLink
                                    className="btn btn-light m-2"
                                    to="/updown/result-history"
                                 >
                                    Result
                                 </NavLink>
                              </tr>
                           </>
                        )}
                     </table>

                     <div className=" fs-5 d-flex align-items-center text-white">
                        <Timer
                           isSubmitted={isSubmitted}
                           isSelecting={isSelecting}
                           timeRef={timeRef}
                        />
                     </div>
                  </div>
               </div>
            )}
            {isSelecting && (
               <div className="d-flex justify-content-center align-items-center">
                  {
                     <StartupCover
                        handleInputChange={handleInputChange}
                        findNumber={findNumber}
                        setIsSelecting={setIsSelecting}
                        setCurrentIndex={setCurrentIndex}
                        setCountAnswer={setCountAnswer}
                        isSelecting={isSelecting}
                        answers={answers}
                     />
                  }
               </div>
            )}
         </div>
      </>
   );
};
export default UpDownGame;
