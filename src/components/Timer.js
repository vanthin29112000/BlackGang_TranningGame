import { useEffect, useState } from "react";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Timer = ({ isSubmitted, isSelecting, timeRef }) => {
   const [miliSeconds, setMiliSeconds] = useState(0);

   useEffect(() => {
      const timeCounter = setInterval(() => {
         if (isSubmitted) {
            clearInterval(timeCounter);
         } else if (isSelecting) {
            clearInterval(timeCounter);
            setMiliSeconds(0);
         } else {
            setMiliSeconds((prev) => prev + 10);
            timeRef.current = miliSeconds;
         }
      }, 10);
      return () => clearInterval(timeCounter);
   }, [isSubmitted, isSelecting]);
   timeRef.current = miliSeconds;
   let time = miliSeconds;
   const minutes = Math.floor(time / (60 * 1000));
   timeRef.currentMinutes = minutes;
   time -= minutes * 60 * 1000;
   const seconds = Math.floor(time / 1000);
   timeRef.currentSeconds = seconds;
   time -= seconds * 1000;
   const mili = time;
   timeRef.currentMili = mili;

   return (
      <>
         {!isSelecting && !isSubmitted ? <AccessAlarmIcon /> : <AlarmOffIcon />}
         {("0" + minutes).slice(-2)}:{("0" + seconds).slice(-2)}:
         {("0" + mili).slice(-2)}
         {/* {minutes > 9
                ? mili / 10 > 9
                    ? ` ${minutes}:${seconds}:${mili / 10}`
                    : ` ${minutes}:${seconds}:0${mili / 10}`
                : mili / 10 > 9
                ? ` 0${minutes}:${seconds}:${mili / 10}`
                : ` 0${minutes}:${seconds}:0${mili / 10}`} */}
      </>
   );
};
export default Timer;
