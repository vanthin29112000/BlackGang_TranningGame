import { useParams, NavLink } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame } from "../Redux/Slice";
export const MenuItemFinal = ({ gameList, index }) => {
   const dispatch = useDispatch();
   const isShowResult = useSelector((state) => state.game.isShowResult);
   const onResetGame = () => {
      // console.log("reset game");
      dispatch(resetGame());
   };

   return (
      <div className="menu-active-bg row flex-column pb-5">
         {isShowResult && (
            <>
               <div className="col">
                  <div className="row h-100 justify-content-end align-content-center flex-column">
                     <div className="col-auto">
                        <NavLink
                           to="/result"
                           className="btn btn-light"
                           style={{ width: "150px" }}
                        >
                           Result
                        </NavLink>
                     </div>
                  </div>
               </div>
               <div className="col">
                  <div className="row h-20 justify-content-end align-content-center flex-column">
                     <div className="col-auto ">
                        <NavLink
                           to="/"
                           className="btn btn-light"
                           style={{ width: "150px" }}
                           onClick={onResetGame}
                        >
                           Reset game
                        </NavLink>
                     </div>
                  </div>
               </div>
            </>
         )}
         {gameList
            // .filter((item) => item.menuLink === `${"/" + getParams}`)
            .filter((item) => item.id === index)
            .map((filteredItem) => (
               <span key={filteredItem.id}>
                  <div className="col-auto">
                     <p className="h3 d-flex justify-content-center text-white py-3 fs-1 fw-bolder">
                        {filteredItem.name}
                     </p>
                  </div>
                  <div className="col-auto fs-4 text-white">
                     Cách chơi:
                     {/* {filteredItem.gameTutorial.map((tutor) => {
                                return (
                                    <p className="d-flex justify-content-start">
                                        {tutor.id}:{tutor.tutor}
                                    </p>
                                );
                            })} */}
                  </div>
                  <div className="col-auto text-white fs-4">
                     {/* Mục tiêu trò chơi:<p className="d-flex justify-content-start">{filteredItem.target}</p> */}
                  </div>
                  <div className="col">
                     <div className="row h-100 justify-content-end align-content-center flex-column">
                        <div className="col-auto">
                           <NavLink to="/game" className="btn btn-light">
                              Start
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </span>
            ))}
      </div>
   );
};
