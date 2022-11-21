import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
// import LoopIcon from "@mui/icons-material/Loop";
// import CheckIcon from "@mui/icons-material/Check";
// import ReportProblemIcon from "@mui/icons-material/ReportProblem";
// import CloseIcon from "@mui/icons-material/Close";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import BadgeIcon from "@mui/icons-material/Badge";
import { useDispatch } from "react-redux";
import { handleAddResult, handleNextGame } from "../Redux/Slice";
import Square from "./Square";
import StartupCover from "./StartupCover";
// import Timer from "../Timer";
import "./UpDowngame.css";
import { Clock } from "./ClockDotGame";
import { shuffle } from "../LeftRightGame/seeder";
const UpDownGame = () => {
   const limitedTime = 300;

   const playerName = sessionStorage.getItem("playerName");
   const [findNumber, setFindNumber] = useState(4);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isSelecting, setIsSelecting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [countCorrectAnswer, setCountCorrectAnswer] = useState(0);
   const [countinCorrectAnswer, setCountIncorrectAnswer] = useState(0);
   const [countAnswer, setCountAnswer] = useState(0);
   const [curResult, setCurResult] = useState({});

   const [countRound, setCountRound] = useState(1);
   const [listResult, setListResult] = useState([]);
   const [answers, setAnswers] = useState([]);
   const [isStop, setIsStop] = useState(false);
   // let SavedResult = JSON.parse(sessionStorage.getItem("savedResult")) || [];
   const ArrQuantity = 176;
   const timeRef = useRef(0);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const onNextRound = (minutes, second) => {
      if (countRound <= 5) {
         setIsStop(false);
         setCountRound(countRound + 1);

         const temp = {
            playerName: playerName,
            correctAns: countCorrectAnswer,
            totalAns: countAnswer,
            incorrectAns: countinCorrectAnswer,
            endTime: {
               minutes: minutes,
               second: second,
            },
         };
         setListResult([...listResult, temp]);
      }
   };

   useEffect(() => {
      if (countRound > 5) {
         let tempCorrect = 0;
         let tempAnswer = 0;
         let tempTime = 0;
         let tempInCorrect = 0;
         listResult.forEach((item) => {
            tempCorrect += item.correctAns;
            tempInCorrect += item.incorrectAns;
            tempAnswer += item.totalAns;
            tempTime += item.endTime.minutes * 60 + item.endTime.second;
         });

         let tempMinute = Math.floor(tempTime / 60);
         let tempSecond = tempTime - tempMinute * 60;
         const tempObj = {
            timeFinish: { minutes: tempMinute, second: tempSecond },
            countCorrect: tempCorrect,
            countQuestion: tempAnswer,
            countInCorrect: tempInCorrect,
         };
         dispatch(handleAddResult(tempObj));
         dispatch(handleNextGame());
         // navigate("/");
      }
   }, [countRound]);

   const generateRandomArr = () => {
      let countTemp = 0;
      let dotTemp = 1;
      let listAnswer = Array(ArrQuantity)
         .fill()
         .map(() => {
            if (countTemp === 29) {
               countTemp = 0;
               dotTemp++;
            } else {
               countTemp++;
            }

            return {
               // value: Math.floor(6 * Math.random() + 1),
               value: dotTemp,
               isChecked: false,
            };
         });
      listAnswer = shuffle(listAnswer);

      const countAnswer = listAnswer.filter(
         (x) => x.value === findNumber
      ).length;

      setAnswers([...listAnswer]);
      setCountAnswer(countAnswer);
   };

   useEffect(() => {
      generateRandomArr();
   }, []);

   useEffect(() => {
      if (countRound <= 5) {
         setAnswers(generateRandomArr);
         setCurrentIndex(0);
         setIsSelecting(false);
         setIsSubmitted(false);
         setCountCorrectAnswer(0);
         setCountIncorrectAnswer(0);
      }
   }, [countRound]);

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
               // handleSaveResult();
               // onNextRound();
               setIsStop(true);
            }
            setCurrentIndex(currentIndex + 1);
            return;

         default:
            return;
      }
   };

   // onFinish
   // const handleSaveResult = () => {
   //    SavedResult.push(curResult);
   //    sessionStorage.setItem("savedResult", JSON.stringify(SavedResult));
   // };

   useEffect(() => {
      document.onkeydown = handleKeyDown;
      const temp = {
         playerName: playerName,
         correctAns: countCorrectAnswer,
         totalAns: countAnswer,
         incorrectAns: countinCorrectAnswer,
         // endTime: {
         //    minutes: minutes,
         //    second: second,
         // },
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
                           {answers &&
                              answers.map(({ value, isChecked }, index) => {
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
                                    {/* <button
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
                                    </button> */}
                                 </div>
                              </div>
                           ) : null}
                           <div className="col-auto p-0">
                              <div className="d-flex justify-content-start">
                                 {/* {!isSubmitted && findNumber && !isSelecting && ( */}
                                 <button
                                    className="btn btn-light border border-dark border-4"
                                    onClick={() => {
                                       setIsSubmitted(true);
                                       // handleSaveResult();
                                       // onNextRound();
                                       setIsStop(true);
                                    }}
                                 >
                                    Submit <SendIcon />
                                 </button>
                                 {/* )} */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=" cus-pos">
                     {/* <NavLink to="/"> */}
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
                     {/* </NavLink> */}

                     <p className="d-flex m-0 p-0 justify-content-center align-items-center text-white fw-normal fs-5">
                        Find number: &nbsp;
                        <span className="fw-bold">{findNumber}</span>
                     </p>

                     <table
                        className="table-primary"
                        style={{ margin: " 8px 0px" }}
                     >
                        <tr className="border bg-light">
                           <p className="px-2">
                              {/* <BadgeIcon className="me-3 ms-2" /> */}
                              <i class="fa-solid fa-user me-3 ms-2"></i>
                              {`Name: ${playerName}`}
                           </p>
                        </tr>
                        <tr className="border bg-dark text-white">
                           <p className="px-2">
                              {/* <BadgeIcon className="me-3 ms-2" /> */}
                              <i class="fa-solid fa-code-compare me-3 ms-2"></i>
                              {`Round: ${countRound} / 5`}
                           </p>
                        </tr>
                        {/* <tr className="border bg-dark text-white mx-2">
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
                        )} */}
                     </table>

                     <div className=" fs-5 d-flex align-items-center text-white">
                        {/* <Timer
                           isSubmitted={isSubmitted}
                           isSelecting={isSelecting}
                           timeRef={timeRef}
                        /> */}
                        <Clock
                           time={limitedTime}
                           round={countRound}
                           isStop={isStop}
                           onNextRound={onNextRound}
                        ></Clock>
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
