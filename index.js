const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.locals.error = {};
  next();
});

require('./routes/index')(app);

app.use((err, req, res, next) => {
  res.end('Problem...');
  console.log(err);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
