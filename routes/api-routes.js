// Telling the app to use the different collections.
const db = require('../models');

// Adding mongoose as a requirement
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: true });

module.exports = (app) => {
  // This api route will be used to display the last workout
  app.get('/api/workouts', (req,res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDistance: {$sum: "$exercises.distance"},
          totalDuration: {$sum: "$exercises.duration"},
          totalSets: {$sum: "$exercises.sets"},
          totalReps: {$sum: "$exercises.reps"},
          totalWeight: {$sum: "$exercises.weight"}
        }
      }
    ])
      .then((response) => {
        res.json(response)
        console.log(response);
      }).catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.get('/api/workouts/range', (req,res) => {
    // db.Workout.find({})
    //   .then(dbWorkout => {
    //     console.log(dbWorkout);
    //     res.json(dbWorkout);
    //   })
    //   .catch(err => {
    //     res.json(err);
    //   })
    db.Workout.aggregate([
      {
        $addFields: {
          totalDistance: {$sum: "$exercises.distance"},
          totalDuration: {$sum: "$exercises.duration"},
          totalSets: {$sum: "$exercises.sets"},
          totalReps: {$sum: "$exercises.reps"},
          totalWeight: {$sum: "$exercises.weight"}
        }
      }
    ])
      .then((response) => {
        res.json(response)
        console.log(response);
      }).catch(err => {
        console.log(err);
        res.json(err);
      });
  })
  
  // This api route will create the workout on the database
  app.post('/api/workouts', ({body},res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        console.log(err);
      })
  });

  // This route will update the workout on the database based on the id
  app.put('/api/workouts/:id', ({params, body}, res) => {
    db.Workout.findByIdAndUpdate({_id: params.id}, {$push: {exercises: body}}, {new: true})
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
  });
}