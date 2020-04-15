var express = require('express');
router = express.Router();
const Message = require('../models/MessageSchema.js');
const EventLog = require('../models/EventLog.js');
const Room = require('../models/Room.js');

router.get('/history', (req, res, next) => {
    Message.find((err, data) => {
      if (err) {
        return next(err);
      } else {
        res.json(data);
      }
    })
  })

router.post('/roomhistory/:roomname', (req, res) => {
    Message.find({room: req.params.roomname}, function(err, data) { // noSQL syntax to find with a WHERE clause
    if (err) {
        return next(err);
    } else {
        res.json(data);
    }
    })
})

router.get('/eventlog', (req, res) => {
    EventLog.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

router.get('/roomList', (req, res) => {
  Room.find((err, data) => {
      if (err) {
          return next(err);
      } else {
          res.json(data);
      }
  })
})

router.delete('/deleteRoom', (req, res) => {
  // this isn't actually deleting even though there's no errors! Couldn't figure out why
  Room.findOneAndDelete({room: req.params.roomname}, (err, data) => {
      if (err) {
          console.log(err);
          return next(err);
      } else {
          console.log('Room deleted');
          res.json(data);
      }
  })
})

module.exports = router;