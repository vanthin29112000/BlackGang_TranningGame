const { renderData } = require("../../../seeder");

const question = renderData();

const countQuestion = 10;

module.exports = { question, countQuestion };
