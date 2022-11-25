import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaRaven } from "../BARaven/BaRaven";
import { BrickInFrame } from "../BrickGuest/Container/brickInFrame";
import UpDownGame from "../DotsGame/UpDowngame";
import { Interface } from "../DrawingGame/page/Interface";
import { FigureOut } from "../FigureOutGame/Elements/FigureOut";
import { NumberFinding } from "../FindingNumber/Container/NumberFinding";
import { RenderQuestion } from "../LeftRightGame/renderQuestion";
import { updatesessionStorage } from "../Redux/Slice";
export const Game = () => {
   const count = useSelector((state) => state.game.currentCount);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(updatesessionStorage());
      count === 8 && navigate("/");
   }, []);

   return (
      <>
         {count === 1 ? (
            <FigureOut></FigureOut>
         ) : count === 2 ? (
            <BrickInFrame></BrickInFrame>
         ) : count === 3 ? (
            <UpDownGame></UpDownGame>
         ) : count === 4 ? (
            <NumberFinding></NumberFinding>
         ) : count === 5 ? (
            <BaRaven></BaRaven>
         ) : count === 6 ? (
            <RenderQuestion></RenderQuestion>
         ) : count === 7 ? (
            <Interface></Interface>
         ) : (
            ""
         )}
      </>
   );
};
