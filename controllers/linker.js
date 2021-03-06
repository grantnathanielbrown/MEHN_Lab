const express = require('express')
const router = express.Router()

const Models = require('../models/qanda')
const Question = Models.Question
const Answer = Models.Answer

// localhost:3000/questions
router.get("/", (req, res) =>{
    res.render('../views/pages/new')
})

router.post('/', (req, res) => {
    console.log(req.body.title)
})
// router.get('/new', (req, res) => {
//     res.render('pages/new')
// })

// 1. link to /questions/new that render new.hbs
// 2. add form to new.hbs
// 3. make it so form submits to route in controller
// 4. make it so route saves new question to DB

module.exports = router