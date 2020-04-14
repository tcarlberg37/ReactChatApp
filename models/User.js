const mongoose = require('mongoose');

const User = mongoose.Schema({
    username: String,
    password: String,
    date_created: String
});

module.exports = mongoose.model('User', User);