const { shuffle } = require("../../../seeder");
let dataImport = [];
const listResult = [
   { id: "1", result: 1 },
   { id: "2", result: 3 },
   { id: "3", result: 4 },
   { id: "4", result: 1 },
   { id: "5", result: 2 },
   { id: "6", result: 1 },
   { id: "7", result: 5 },
   { id: "8", result: 1 },
   { id: "9", result: 2 },

   { id: "10", result: 5 },
   { id: "11", result: 5 },
   { id: "12", result: 5 },
   { id: "13", result: 5 },
   { id: "14", result: 5 },
   { id: "15", result: 5 },
   { id: "16", result: 5 },
   { id: "17", result: 5 },
   { id: "18", result: 5 },

   { id: "19", result: 5 },
   { id: "20", result: 5 },
   { id: "21", result: 5 },
   { id: "22", result: 5 },
   { id: "23", result: 5 },
   { id: "24", result: 5 },
   { id: "25", result: 5 },
   { id: "26", result: 5 },
   { id: "27", result: 5 },

   { id: "28", result: 5 },
   { id: "29", result: 5 },
   { id: "30", result: 5 },
   { id: "31", result: 5 },
   { id: "32", result: 5 },
   { id: "33", result: 5 },
   { id: "34", result: 5 },
   { id: "35", result: 5 },
   { id: "36", result: 5 },

   { id: "37", result: 5 },
   { id: "38", result: 5 },
   { id: "39", result: 5 },
   { id: "40", result: 5 },
   { id: "41", result: 5 },
   { id: "42", result: 5 },
   { id: "43", result: 5 },
   { id: "44", result: 5 },
   { id: "45", result: 5 },

   { id: "46", result: 5 },
   { id: "47", result: 5 },
   { id: "48", result: 5 },
   { id: "49", result: 5 },
   { id: "50", result: 5 },
   { id: "51", result: 5 },
   { id: "52", result: 5 },
   { id: "53", result: 5 },
   { id: "54", result: 5 },

   { id: "55", result: 5 },
   { id: "56", result: 5 },
   { id: "57", result: 5 },
   { id: "58", result: 5 },
   { id: "59", result: 5 },
   { id: "60", result: 5 },
   { id: "61", result: 5 },
   { id: "62", result: 5 },
   { id: "63", result: 5 },

   { id: "64", result: 5 },
   { id: "65", result: 5 },
   { id: "66", result: 5 },
   { id: "67", result: 5 },
   { id: "68", result: 5 },
   { id: "69", result: 5 },
   { id: "70", result: 5 },
   { id: "71", result: 5 },
   { id: "72", result: 5 },

   { id: "73", result: 5 },
   { id: "74", result: 5 },
   { id: "75", result: 5 },
   { id: "76", result: 5 },
   { id: "77", result: 5 },
   { id: "78", result: 5 },
   { id: "79", result: 5 },
   { id: "80", result: 5 },
   { id: "81", result: 5 },

   { id: "82", result: 5 },
   { id: "83", result: 5 },
   { id: "84", result: 5 },
   { id: "85", result: 5 },
   { id: "86", result: 5 },
   { id: "87", result: 5 },
   { id: "88", result: 5 },
   { id: "89", result: 5 },
   { id: "90", result: 5 },

   { id: "91", result: 5 },
   { id: "92", result: 5 },
   { id: "93", result: 5 },
   { id: "94", result: 5 },
   { id: "95", result: 5 },
   { id: "96", result: 5 },
   { id: "97", result: 5 },
   { id: "98", result: 5 },
   { id: "99", result: 5 },
];

const renderData = () => {
   let tempArr = [];
   let section1Length = 49; //Số lượng ảnh ở section 1
   for (let i = 1; i <= section1Length; i++) {
      let tempObj = {
         id: i,
         question: "",
         questionImg: `assets/img/game-img/FigureOutGame/Section 1/${i}.png`,
         result: listResult[i - 1].result,
      };
      tempArr.push(tempObj);
   }
   let j = 50;
   for (let i = 1; i <= 50; i++) {
      let tempObj = {
         id: j,
         question: "",
         questionImg: `assets/img/game-img/FigureOutGame/Section 2/${i}.png`,
         result: listResult[j - 1].result,
      };
      tempArr.push(tempObj);
      j++;
   }
   return shuffle(tempArr);
};

dataImport = renderData();

const listAnswer = ["( A )", "( B )", "( C )", "( D )", "( E )"]; // Tùy chỉnh hình thức hiện đáp án

const amountQuestion = 99; // Số lượng câu hỏi

const limitedTime = 990; //Thời gian giới hạn (giây)

// ==============
// Bảng xếp hạng

// sample data
/*
    {
        daySubmitted : "" => Day,
        timeFinish : "" => Minutes / seconds,
        countCorrect : 0 => Number,
        countQuestion : 0 => Number,
    }
 */
let ranking = [];

const getRanking = () => {
   return ranking;
};

const setRanking = (value) => {
   ranking.unshift(value);
};

module.exports = {
   dataImport,
   listAnswer,
   amountQuestion,
   getRanking,
   setRanking,
   limitedTime,
};
