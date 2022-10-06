import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function History() {
  const playerName=sessionStorage.getItem("playerName")

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center py-14 sm:py-0 bg-gradient-to-r from-slate-200 to-black">
      <div className="flex items-center justify-center w-1/3 min-w-[400px] text-5xl font-bold text-white mb-5">
        HISTORY
      </div>
      <div className="flex flex-col items-center w-1/3 min-w-[400px] pb-5 bg-white border-4 border-solid border-black rounded">
        {JSON.parse(sessionStorage.getItem("drawHistory")).length > 0 &&
          JSON.parse(sessionStorage.getItem("drawHistory")).map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-3 rounded w-11/12 h-11 text-black bg-white mt-4 cursor-default"
            >
              <span className="">{index + 1}.&ensp;</span>
              <span className="">{playerName}.&ensp;</span>
              <span className="">Incorrect: {item.wrong}</span>
              <span className="flex items-center">
                <span className="mr-1 h-[24px] text-xl">
                  <ion-icon name="stopwatch-outline"></ion-icon>
                </span>

                <span className="flex items-center">
                  {item.time.hour.toString().padStart(2, "0")}:
                  {item.time.minute.toString().padStart(2, "0")}:
                  {item.time.second.toString().padStart(2, "0")}
                </span>
              </span>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-between w-1/3 min-w-[400px] mt-5">
        <Link
          to="/"
          className="w-[140px] h-12 flex items-center justify-center text-xl font-bold text-black bg-white border-4 border-solid border-black rounded-xl"
        >
          Menu
        </Link>
        <Link
          to="/drawinggame"
          className="w-[140px] h-12 flex items-center justify-center text-xl font-bold text-black bg-white border-4 border-solid border-black rounded-xl"
        >
          Replay
        </Link>
      </div>
    </div>
  );
}
