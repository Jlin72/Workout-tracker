const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema( {
  day: {
    type: Date,
    default: Date.now()
  },

  exercises: [
    {
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
    }
  ]
});

const Workout = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workout;