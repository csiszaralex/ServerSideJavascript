import express from 'express';
const app = express();

//TODO make the route to static
app.use('/', express.static('static'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
