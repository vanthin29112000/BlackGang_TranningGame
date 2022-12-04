const {
   countQuestion_training,
   isShuffle_training,
} = require("../../../Data/LeftRightGame/SettingGame");
const { renderData, shuffle } = require("../../../seeder");

const question = renderData();

if (isShuffle_training) {
   shuffle(question);
}

const countQuestion = countQuestion_training;

module.exports = { question, countQuestion };
