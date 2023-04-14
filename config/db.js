const mongoose = require('mongoose');
mongoose.connect('mongodb://root:example@localhost:27017/pl4xkm?authSource=admin', {
  useNewUrlParser: true,
});

module.exports = mongoose;
