import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import UpDownGame from "./components/DotsGame/UpDowngame";
import HistoryResult from "./components/DotsGame/HistoryResult";
import { Auth } from "./Auth";
import { RenderQuestion } from "./components/LeftRightGame/renderQuestion";
import { HandResult } from "./components/LeftRightGame/result";
import { FindNumberResult } from "./components/FindingNumber/Container/Result";
import { NumberFinding } from "./components/FindingNumber/Container/NumberFinding";
import { BrickInFrame } from "./components/BrickGuest/Container/brickInFrame";
import { BrickResult } from "./components/BrickGuest/Container/Result";
import { Interface } from "./components/DrawingGame/page/Interface";
import { History } from "./components/DrawingGame/page/History";
import { FigureOut } from "./components/FigureOutGame/Elements/FigureOut";
import { FigureOutResult } from "./components/FigureOutGame/Elements/FigureOutResult/FigureOutResult";
import { BaRaven } from "./components/BARaven/BaRaven";
import { BaRavenResult } from "./components/BARaven/BaRavenResult/BaRavenResult";
import { NotFound } from "./components/DrawingGame/page/NotFound";
import { Game } from "./components/Test/FinalTest/Game";
import { Result } from "./components/Test/FinalTest/result/Result";
import { useDispatch } from "react-redux";

function App() {
   const pass = "123456789";
   const [isLogged, setIsLogged] = useState(false);
   const navigate = useNavigate();
   const savedPass = sessionStorage.getItem("pass");
   const dispatch = useDispatch();

   useEffect(() => {
      if (!sessionStorage.getItem("drawHistory"))
         sessionStorage.setItem(
            "drawHistory",
            JSON.stringify([
               { wrong: 0, time: { hour: 0, minute: 0, second: 0 } },
            ])
         );
   }, []);

   useEffect(() => {
      if (pass === savedPass) {
         setIsLogged(true);
      } else {
         navigate("/login");
      }
   }, [savedPass]);

   return (
      <div className="row vh-100 vw-100" style={{ marginLeft: "0px" }}>
         <Routes>
            <Route path="/" element={<Menu />}>
               <Route path=":menulink" element={<MenuItem />}></Route>
            </Route>
            <Route
               path="/login"
               element={<Auth setIsLogged={setIsLogged} pass={pass} />}
            />
            <Route path="/updown" element={<UpDownGame />} />
            <Route path="/updown/result-history" element={<HistoryResult />} />
            <Route path="/handgame" element={<RenderQuestion />} />
            <Route path="/handgame/result" element={<HandResult />} />
            <Route path="/findnumber" element={<NumberFinding />} />
            <Route path="/findnumber/result" element={<FindNumberResult />} />
            <Route path="/brickguest" element={<BrickInFrame />} />
            <Route path="/brickguest/result" element={<BrickResult />} />
            <Route path="/drawinggame" element={<Interface />} />
            <Route path="/drawinggame/history" element={<History />} />
            <Route path="/figureoutgame" element={<FigureOut />} />
            <Route path="/figureoutgame/result" element={<FigureOutResult />} />
            <Route path="/baraven" element={<BaRaven />} />
            <Route path="/baraven/result" element={<BaRavenResult />} />

            <Route path="/test" element={<Game />}></Route>
            <Route path="/test/result" element={<Result />}></Route>

            <Route path="/:other/*" element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
