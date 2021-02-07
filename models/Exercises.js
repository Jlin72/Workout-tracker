// Using mongoose to create a collection
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema ({
  type: {
    type: String,
    trim: true,
    required: 'Type of exercise is required'
  },

  name: {
    type: String,
    trim: true,
    required: 'Enter the name of the exercise'
  },

  duration: Number,

  weight: Number,

  reps: Number,

  sets: Number
});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;