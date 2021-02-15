![NPM](https://img.shields.io/npm/l/express) ![npm](https://img.shields.io/npm/v/npm) ![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-green)

# Workout-tracker
## Table of contents
  1.[Description](#Description)

  2.[Deployed application link](#Deployed-application-link)

  3.[Installation](#Installation)

  4.[Usage](#Usage)

  5.[Screenshots or video](#Screenshots-or-video)

  6.[Credits](#Credits)

  7.[License](#License)
## Description 
  This repository contains all the required code for the a web browser application that tracks an user workout to work properly.
## Deployed application link
  Link to the deployed heroku app: https://stark-springs-19756.herokuapp.com/
## Installation
  No installation required to run the app. Simply just click on the deployed application link to use the app on online.

  However, if you want to run the app as a localhost:
  1. Download the files from the repo as a zip or clone them directly to your pc.
  2. Make sure to have mongoDB installed and running on your pc.
  3. Then on your console find the location of the files and run npm install to download all dependencies.
  4. Lastly, type node server to run the app on localhost:8080;
## Usage
  To use the app, press on new workout to create a new workout. However, if there is already a workout on the database, click on continue to continue from the last workout.
  Once either is done, select the type of exercise: 'Cardio' or 'resistance' and proceed to enter the appropiate information. Next, you can click on add exercise to add a new one, or simply click on complete to finsih adding exercises. 
  Lastly, if you want to check your workout, you can also click on dashboard to see a series of data about your workout.
## Weaknesses
  Currently there is no way to delete data, workouts, after they have been sent to the database.
## Screenshots or video
  Screenshot of the App on the browser:

  Homepage:
  ![Index](https://raw.githubusercontent.com/Jlin72/Workout-tracker/main/readme_images/Screenshot%20(193).png)

  Adding a new exercise:
  ![Adding a new exercise](https://raw.githubusercontent.com/Jlin72/Workout-tracker/main/readme_images/Screenshot%20(194).png)

  Graphs showing user workout:
  ![Graphs of the user workout](https://raw.githubusercontent.com/Jlin72/Workout-tracker/main/readme_images/Screenshot%20(195).png)
  Video of the application in use: https://youtu.be/1weUKN6nJj4
## Credits
  Made by: Jhonny Lin (Github: Jlin72 https://github.com/Jlin72)
## License
  MIT License
