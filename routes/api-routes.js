// Telling the app to use the different collections.
const db = require('../models');

// Adding mongoose as a requirement
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: true });

module.exports = (app) => {
  app.get('/api/workouts', (req,res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      }).catch(err => {
        res.json(err);
      });
  });
  
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

  app.put('/api/workouts/:id', ({params, body}, res) => {
    db.Workout.findByIdAndUpdate({_id: params.id}, {$push: {exercises: body}}, {new: true})
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
  })

  app.get('/api/workouts/:id', ({params, body}, res) => {
    console.log(params.id)
  })
}