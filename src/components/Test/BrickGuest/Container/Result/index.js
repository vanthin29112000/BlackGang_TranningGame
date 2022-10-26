import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { getRanking } from "../../Data/Answer";
import "./Result.css";
export const BrickResult = () => {
   const navigate = useNavigate();
   const userName = sessionStorage.getItem("playerName");

   return (
      <>
         <div className="bg-image"></div>
         {/* <NavLink to="/"> */}
         <img
            className="logo-image"
            src="../assets/img/DatLaptoplogo.png"
         ></img>
         {/* </NavLink> */}
         <div
            className="row align-items-center justify-content-center h-100 brick-result-game__bg"
            style={{ margin: "0 auto" }}
         >
            <div className="col-12">
               <div className="row">
                  <div className="col-12">
                     <p className="brick-result-game__title">HISTORY</p>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="brick-result-game__container">
                        <div className="brick-list-result">
                           {getRanking().map((ele, index) =>
                              index < 10 ? (
                                 <div
                                    className={
                                       index === 0
                                          ? "brick-result-item brick-result-current"
                                          : "brick-result-item"
                                    }
                                 >
                                    <p>{index + 1}.</p>
                                    <p>{userName}</p>
                                    <p>
                                       Score :{" "}
                                       {(
                                          (ele.countCorrect /
                                             ele.countQuestion) *
                                          100
                                       ).toFixed(2)}
                                       %
                                    </p>
                                    <p>
                                       {("0" + ele.finishTime.minutes).slice(
                                          -2
                                       )}
                                       :
                                       {("0" + ele.finishTime.seconds).slice(
                                          -2
                                       )}
                                    </p>
                                 </div>
                              ) : (
                                 ""
                              )
                           )}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-6 d-flex justify-content-center">
                     <div
                        className="brick-result-game__home-button"
                        onClick={() => {
                           navigate("/");
                        }}
                     >
                        Menu
                     </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                     <div
                        className="brick-result-game__again-button"
                        onClick={() => {
                           navigate("/brickguest");
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
