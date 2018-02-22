const mongoose = require('../db/connection');

const ASchema = new mongoose.Schema({
    username: String,
    answerText: String
});

const Answer = mongoose.model('Answer', ASchema)

const QSchema = new mongoose.Schema({
    username: String,
    questionTitle: String,
    questionText: String,
});

const Question = mongoose.model('Question', QSchema)

module.exports = {
    Question,
    Answer
}