const Models = require('../models/qanda')
const Question = Models.Question
const Answer = Models.Answer
const seedData = require("./seeds.json")
const seedData2 = require("./seed.json")

Question.remove({})
  .then(() => {
    return Question.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
  console.log("hi")