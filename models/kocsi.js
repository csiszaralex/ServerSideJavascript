const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Kocsi = db.model('Kocsi', {
  sorszam: Number,
  szam: Number,
  ulohelyek: Number,
  helyjegy: Boolean,
  _vonat: {
    type: Schema.Types.ObjectId,
    ref: 'Vonat',
  },
});

module.exports = Kocsi;
