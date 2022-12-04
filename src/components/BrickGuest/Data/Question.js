const { question_training } = require("../../../Data/BrickGuest/Ques&Ans");
const {
   countQuestion_training,
   isShuffle_training,
} = require("../../../Data/BrickGuest/SettingGame");
const { shuffle } = require("../../FindingNumber/seeder");

const questionAndAnswer = question_training;

if (isShuffle_training) {
   shuffle(questionAndAnswer);
}
const countQuestion = countQuestion_training; //=> Số câu hỏi muốn trả lời

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
