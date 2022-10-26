import { useNavigate, NavLink } from "react-router-dom";
import "./HistoryResult.css";
const HistoryResult = () => {
   const navigate = useNavigate();
   const HistoryResult =
      JSON.parse(sessionStorage.getItem("savedResult")) || [];
   console.log(HistoryResult);
   return (
      // <div className="dotsgame-result-game__bg">
      <>
         <div className="bg-image"></div>
         {/* <NavLink to="/"> */}
         <img
            className="logo-image"
            src="../assets/img/DatLaptoplogo.png"
         ></img>
         {/* </NavLink> */}
         <div
            className="row align-items-center justify-content-center h-100 dotsgame-result-game__bg "
            style={{ margin: "0 auto" }}
         >
            <div className="col-12">
               <div className="row">
                  <div className="col-12">
                     <p className="result-game__title">HISTORY</p>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="total-result-game__container">
                        <div className="list-result">
                           {HistoryResult.reverse().map((result, index) => (
                              <div
                                 key={index}
                                 className={
                                    index === 0
                                       ? "total-result-item total-result-current"
                                       : "total-result-item"
                                 }
                              >
                                 <p>{index + 1}.</p>
                                 <p>{result.playerName}</p>
                                 <p>
                                    Score: &nbsp;{" "}
                                    {isNaN(result.correctAns / result.totalAns)
                                       ? 0
                                       : (
                                            (result.correctAns /
                                               result.totalAns) *
                                            100
                                         ).toFixed(2)}
                                    %{" "}
                                 </p>
                                 <p>Incorrect:&nbsp; {result.incorrectAns} </p>
                                 <p>
                                    Time:&nbsp;
                                    {result.endTime.currentMinutes > 9
                                       ? result.endTime.currentMinutes
                                       : "0" + result.endTime.currentMinutes}
                                    :
                                    {result.endTime.currentSeconds > 9
                                       ? result.endTime.currentSeconds
                                       : "0" + result.endTime.currentSeconds}
                                    :
                                    {result.endTime.currentMili / 10 > 9
                                       ? result.endTime.currentMili / 10
                                       : "0" + result.endTime.currentMili / 10}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-6 d-flex justify-content-center">
                     <div
                        className="menu-game__button"
                        onClick={() => {
                           navigate("/");
                        }}
                     >
                        Menu
                     </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                     <div
                        className="replay-game__button"
                        onClick={() => {
                           navigate("/updown");
                        }}
                     >
                        Replay
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HistoryResult;
