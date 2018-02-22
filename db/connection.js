const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/qanda');

// install promise?
mongoose.Promise = Promise;

module.exports = mongoose;
