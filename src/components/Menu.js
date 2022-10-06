import { Outlet, NavLink, useParams } from "react-router-dom";
const Menu = () => {
   const playerName = sessionStorage.getItem("playerName");
   const getParams = useParams().menulink;
   const gameList = [
      {
         id: 1,
         name: "Dots Training",
         gameTutorial: "adjasqwjjknakasnknenjkncdsncknnensdmcs.dcmsdcdscds",
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "dotsgame-intro",
         link: "/updown",
         picture: "/assets/img/game-img/DotsGame.jpg",
      },
      {
         id: 2,
         name: "Hand Training",
         gameTutorial: "adjasqwjjknakasnknenjkncdsncknnensdmcs.dcmsdcdscds",
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "handgame-intro",
         link: "/handgame",
         picture: "/assets/img/game-img/HandGame.jpg",
      },
      {
         id: 3,
         name: "Number Finding Training",
         gameTutorial: "adjasqwjjknakasnknenjkncdsncknnensdmcs.dcmsdcdscds",
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "findnumbergame-intro",
         link: "/findnumber",
         picture: "/assets/img/game-img/FindNumGame.jpg",
      },
      {
         id: 4,
         name: "Brick In Frame",
         gameTutorial: "adjasqwjjknakasnknenjkncdsncknnensdmcs.dcmsdcdscds",
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "brickgame-intro",
         link: "/brickguest",
         picture: "/assets/img/game-img/BrickGuest.jpg",
      },
      {
         id: 5,
         name: "Line Drawing",
         gameTutorial: "adjasqwjjknakasnknenjkncdsncknnensdmcs.dcmsdcdscds",
         target: "asdfnascnaknakmclasmc;lacowml;cmdcsdcs",
         menuLink: "drawing-intro",
         link: "/drawinggame",
         picture: "/assets/img/game-img/DrawLineGame.jpg",
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
         menuLink: "figure-out-intro",
         link: "/figureoutgame",
         picture: "/assets/img/game-img/FigureOut.jpg",
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
         menuLink: "baraven-intro",
         link: "/baraven",
         picture: "/assets/img/game-img/BaRaven.jpg",
      },
   ];
   return (
      <div className="App">
         <div className="container menu-bg p-0">
            <div className="row d-flex justify-content-center align-items-center">
               <div className="col-2">
                  <NavLink to="/">
                     <img
                        src="../assets/img/DatLaptoplogo.png"
                        alt="DatLaptoplogo.png"
                        style={{ width: "100px" }}
                     />
                  </NavLink>
               </div>
               <div className="h3 col-10">
                  Hello {playerName}! Choose the right APRO exercise for your
                  training goals
               </div>
            </div>
            <div className="row">
               {gameList.map((gameItem, index) => {
                  return (
                     <div
                        className={
                           gameItem.menuLink === getParams
                              ? "p-3  menu-active"
                              : "p-3 "
                        }
                        key={index}
                        style={{ width: "calc(100% / 7)" }}
                     >
                        <div className="card">
                           <NavLink to={gameItem.menuLink}>
                              <img
                                 src={gameItem.picture}
                                 className="card-img-top w-100"
                                 alt="..."
                                 style={{ height: "12vw" }}
                              />
                           </NavLink>
                        </div>
                     </div>
                  );
               })}
            </div>
            <Outlet />
         </div>
      </div>
   );
};

export default Menu;
