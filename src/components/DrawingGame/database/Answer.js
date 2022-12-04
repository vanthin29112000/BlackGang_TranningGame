import { question_training } from "../../../Data/DrawingGame/Ques&Ans";
import { isShuffle_training } from "../../../Data/DrawingGame/SettingGame";

const Answer = question_training;

function shuffle(array) {
   let currentIndex = array.length,
      randomIndex;

   // While there remain elements to shuffle.
   while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
         array[randomIndex],
         array[currentIndex],
      ];
   }

   return array;
}
export let answer = [];
if (isShuffle_training) {
   answer = shuffle(Answer);
} else {
   answer = Answer;
}
