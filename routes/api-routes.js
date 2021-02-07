module.exports = (app) => {
  app.get('/api/workouts', (req,res) => {
    console.log('hello');
  });
  app.post('/api/workouts', (req,res) => {
    console.log('hello');
  })
}