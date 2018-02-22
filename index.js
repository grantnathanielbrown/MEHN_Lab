const express = require('express')

const Models = require('./models/qanda')
const Question = Models.Question
const Answer = Models.Answer

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('the test worked');
});