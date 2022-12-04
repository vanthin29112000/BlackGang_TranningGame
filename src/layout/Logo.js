import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { resetGame } from "../components/Test/Redux/Slice";

export const Logo = () => {
   const dispatch = useDispatch();
   const onResetGame = () => {
      dispatch(resetGame());
   };
   return (
      <NavLink to="/" onClick={onResetGame}>
         <img
            className="logo-image "
            src="assets/img/DatLaptoplogo.png"
            alt=".png"
            style={{
               height: "100%",
               width: "100%",
               objectFit: "cover",
               position: "relative",
            }}
         ></img>
      </NavLink>
   );
};
