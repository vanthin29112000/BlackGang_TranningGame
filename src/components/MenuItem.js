import { useParams, NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame, updateLocalStorage } from "./Test/Redux/Slice";
const MenuItem = () => {
   const dispatch = useDispatch();
   const isShowResult = useSelector((state) => state.game.isShowResult);

   useEffect(() => {
      dispatch(updateLocalStorage());
   }, []);

   const onResetGame = () => {
      console.log("reset game");
      dispatch(resetGame());
   };

   const getParams = useParams().menulink;
   const gameList = [
      {
         id: 1,
         name: "Dots Training",
         gameTutorial: [
            {
               id: 1,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
            {
               id: 2,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
         ],
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "/dotsgame-intro",
         link: "/updown",
         picture: "/assets/img/game-img/DotsGame.jpg",
      },
      {
         id: 2,
         name: "Hand Training",
         gameTutorial: [
            {
               id: 1,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
            {
               id: 2,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
         ],
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "/handgame-intro",
         link: "/handgame",
         picture: "/assets/img/game-img/HandGame.jpg",
      },
      {
         id: 3,
         name: "Number Finding Training",
         gameTutorial: [
            {
               id: 1,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
            {
               id: 2,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
         ],
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "/findnumbergame-intro",
         link: "/findnumber",
         picture: "/assets/img/game-img/FindNumGame.jpg",
      },
      {
         id: 4,
         name: "Brick In Frame",
         gameTutorial: [
            {
               id: 1,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
            {
               id: 2,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
         ],
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "/brickgame-intro",
         link: "/brickguest",
         picture: "/assets/img/game-img/BrickGuest.jpg",
      },
      {
         id: 5,
         name: "Line Drawing",
         gameTutorial: [
            {
               id: 1,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
            {
               id: 2,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
         ],
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "/drawing-intro",
         link: "/drawinggame",
         picture: "/assets/img/game-img/BrickGuest.jpg",
      },
      {
         id: 6,
         name: "Figure Out",
         gameTutorial: [
            {
               id: 1,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
            {
               id: 2,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
         ],
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "/figure-out-intro",
         link: "/figureoutgame",
         picture: "/assets/img/game-img/BrickGuest.jpg",
      },
      {
         id: 7,
         name: "BA Raven",
         gameTutorial: [
            {
               id: 1,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
            {
               id: 2,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
         ],
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "/baraven-intro",
         link: "/baraven",
         picture: "/assets/img/game-img/BaRaven.jpg",
      },
      {
         id: 8,
         name: "Test",
         gameTutorial: [
            {
               id: 1,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
            {
               id: 2,
               tutor: "adjasqwjjknakasnknenjkncdsncknnensdmcsdcmsdcdscds.",
            },
         ],
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "/test-intro",
         link: "/test",
         picture: "/assets/img/game-img/bai-test-cua-cong-ty-nhat.jpg",
      },
   ];

   return (
      <div className="menu-active-bg row flex-column pb-5">
         {gameList
            .filter((item) => item.menuLink === `${"/" + getParams}`)
            .map((filteredItem) => (
               <>
                  {filteredItem.id === 8 && isShowResult ? (
                     <>
                        <div className="col">
                           <div className="row h-100 justify-content-end align-content-center flex-column">
                              <div className="col-auto">
                                 <NavLink
                                    to="/test/result"
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
                                    to="/test-intro"
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
                  ) : (
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
                                 <NavLink
                                    to={filteredItem.link}
                                    className="btn btn-light"
                                 >
                                    Start
                                 </NavLink>
                              </div>
                           </div>
                        </div>
                     </span>
                  )}
               </>
            ))}
      </div>
   );
};
export default MenuItem;
