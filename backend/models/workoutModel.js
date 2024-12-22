const mongoose = require('mongoose')
const validator = require('validator');

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true,
    validate: {validator: validator.isTime, message: 'Time should be filled in format HH:MM or 00:00'}
  },
  distance: {
    type: Number,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false
  }
}, { timestamps: true })


module.exports = mongoose.model('Workout', workoutSchema)
