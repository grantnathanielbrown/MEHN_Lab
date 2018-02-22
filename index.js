const express = require('express')
const hbs = require('hbs')

const Models = require('./models/qanda')
const Question = Models.Question
const Answer = Models.Answer

const app = express();

const linkerController = require('./controllers/linker')
// app.use('Question')
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    Question.find({})
        .then(questions => {
            res.render('index', { questions })
        })
});


//question.find({}) grabs all of the ?documents? in the model
//.then function
//renders the index.hbs page, with questions object

app.use("/questions", linkerController)

app.listen(3000, () => {
    console.log('the test worked');
});