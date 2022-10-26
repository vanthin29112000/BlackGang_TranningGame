const { renderData } = require("../seeder");

const question = renderData();

const countQuestion = 49;
const limitedTime = 300; //=> time finish
module.exports = { question, countQuestion, limitedTime };
