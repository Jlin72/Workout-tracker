// Adding express as requirement
const express = require('express');
const app = express();

// Telling the app to use mongoose npm
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: true });

// Setting the PORT for express to use, either is 8080 or a port decided by the server.
const PORT = process.env.PORT || 8080;

// Setting path as a requirement for the server to run
const path = require('path');

// Using express to encode any post information
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Telling express to use the public folder
app.use(express.static('public'));


// Setting the routes for html
require('./routes/html-routes')(app, path);

// Setting the routes for the api calls
require('./routes/api-routes')(app);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is connected`);
});