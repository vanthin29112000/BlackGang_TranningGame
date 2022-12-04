import React from "react";
import { answer } from "./database/Answer";

export function Sample({ id }) {
   return (
      <div className="flex mr-5">
         <img
            className="h-[400px] w-auto"
            src={answer[id - 1].sample}
            alt="template"
         />
      </div>
   );
}
