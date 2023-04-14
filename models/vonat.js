const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Vonat = db.model('Vonat', {
  szam: Number,
  uzemanyag: String,
  km: Number,
});

module.exports = Vonat;
