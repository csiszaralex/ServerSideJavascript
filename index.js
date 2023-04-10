const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('static'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require('./routes/index')(app);

// Error Handling
// app.use((err, req, res, next) => {
//   res.end('Problem...');
//   console.log(err);
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
