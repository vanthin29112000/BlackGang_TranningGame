import FlagIcon from "@mui/icons-material/Flag";
import { red, green } from "@mui/material/colors";
import { useState } from "react";
const Square = ({
   value,
   index,
   isChecked,
   findNumber,
   isSubmitted,
   currentIndex,
}) => {
   const [randomPic, setRandomPic] = useState(
      Math.floor(5 * Math.random()) + 1
   );

   return (
      <div
         className={
            index == currentIndex
               ? "col-cus-test square rounded text-center ratio ratio-1x1 rounded border border border-dark border-3"
               : "col-cus-test square rounded text-center ratio ratio-1x1 rounded border border-1"
         }
         style={{
            backgroundImage: `url(assets/img/game-img/GAME/${value}/${randomPic}.jpg)`,
         }}
         value={value}
      >
         {!isSubmitted && isChecked && <FlagIcon />}
         {isSubmitted && isChecked && value !== findNumber && (
            <FlagIcon sx={{ color: red[500] }} />
         )}
         {isSubmitted && isChecked && value === findNumber && (
            <FlagIcon sx={{ color: green[500] }} />
         )}
      </div>
   );
};
export default Square;
