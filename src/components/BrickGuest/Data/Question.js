const { shuffle } = require("../../FindingNumber/seeder");

const questionAndAnswer = [
   {
      image: "./assets/img/game-img/BrickGuestGame/Capture1.PNG",
      question: [
         " 4 sang phải và 2 xuống ",
         " 4 sang phải và 3 xuống ",
         " 5 sang phải và 2 xuống ",
         " @ sang phải và @ xuống ",
      ],
      result: 1,
   },
   {
      image: "./assets/img/game-img/BrickGuestGame/Capture2.PNG",
      question: [
         " 2 sang phải và 2 xuống ",
         " 3 sang phải và 2 xuống ",
         " 2 sang phải và 3 xuống ",
         " @ sang phải và @ xuống ",
      ],
      result: 2,
   },
   {
      image: "./assets/img/game-img/BrickGuestGame/Capture3.PNG",
      question: [
         " 5 lên và 2 sang phải ",
         " 5 lên và 3 sang phải ",
         " 4 lên và 1 sang phải ",
         " @ lên và @ sang phải ",
      ],
      result: 0,
   },
];
shuffle(questionAndAnswer);
const countQuestion = 3; //=> Số câu hỏi muốn trả lời

const arrayAnswer = { YES: true, No: false };

const random = () => {
   return Math.floor(Math.random() * 4);
};

module.exports = {
   questionAndAnswer,
   countQuestion,
   random,
   arrayAnswer,
};
