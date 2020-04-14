const mongoose = require('mongoose');

const Room = mongoose.Schema({
    room: String,
    created_date: String,
    edit_date: String,
    status: String
});

module.exports = mongoose.model('Room', Room);