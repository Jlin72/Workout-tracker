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
    
      duration: {
        type: Number,
        trim: true,
        required: 'Enter the duration of the exercise'
      },
    
      weight: {
        type: Number,
        trim: true,
        required: 'Weight is required'
      },
    
      reps: {
        type: Number,
        trim: true,
        required: 'Number of reps is required'
      },
    
      sets: {
        type: Number,
        trim: true,
        required: 'Number of sets is required'
      },

      distance: {
        type: Number,
        trim: true,
        required: 'Distance run is required'
      }
    }
  ],
});

const Workout = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workout;