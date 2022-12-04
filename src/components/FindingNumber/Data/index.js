const {
   countQuestion_training,
} = require("../../../Data/FindingNumber/SettingGame");
const { shuffle } = require("../seeder");
const countMax = countQuestion_training;
// Cell
let cell = [];
const renderCell = () => {
   let tempArr = [];
   let cellBig = [];
   let cellSmall = [];
   for (let i = 1; i <= countMax; i++) {
      cellBig.push(i);
      cellSmall.push(i);
   }

   cellBig = shuffle(cellBig);
   cellSmall = shuffle(cellSmall);

   for (let i = 0; i < cellBig.length; i++) {
      let temp = [cellBig[i], cellSmall[i]];
      tempArr.push(temp);
   }

   cell = tempArr;
};

const shuffleCell = () => {
   shuffle(cell);
};

const getCell = () => {
   return cell;
};

renderCell();

// Ranking
let ranking = [];
// sample Data
/*
   {
      countFail : 1 => number
      timer : {
         minutes : 0 => number
         seconds : 0 => number
      } => Object
   }
 */

const saveResult = (countFail, minutes, seconds) => {
   let result = {
      countFail: countFail,
      timer: {
         minutes: minutes,
         seconds: seconds,
      },
      dateSubmit: new Date(),
   };
   ranking.unshift(result);
   // console.log(ranking);
};
module.exports = {
   cell,
   getCell,
   shuffleCell,
   saveResult,
   ranking,
   renderCell,
   countMax,
};
