// const Kocsi2 = {
//   Sorszam: Number,
//   Szam: Number,
//   Ulohelyek: Number,
//   Helyjegy: Boolean,
//   //TODO vonat majd Vonat típus lesz
//   vonat: String,
// };

// module.exports = Kocsi;

/**
 * Kocsi model (mock)
 * @constructor
 */
const Kocsi = function () {};

const KocsiInstanceMock = {
  id: 'kocsi1',
  Sorszam: 1,
  Szam: 1,
  Ulohelyek: 100,
  Helyjegy: true,
  vonat: 'vonat1',
};

/**
 * Find one element with criteria
 * @param criteria
 * @param  cb
 * @returns {*}
 */
Kocsi.findOne = function (criteria, cb) {
  return cb(null, KocsiInstanceMock);
};

/**
 * Find all elements with criteria
 * @param  criteria
 * @param  cb
 * @returns {*}
 */
Kocsi.find = function (criteria, cb) {
  return cb(null, [KocsiInstanceMock, KocsiInstanceMock, KocsiInstanceMock]);
};

/**
 * Save the item to DB
 * @param cb
 * @returns {*}
 */
Kocsi.prototype.save = function (cb) {
  return cb(null, this);
}

/**
 * Delete an object
 * @param cb
 * @returns {*}
 */
Kocsi.prototype.remove = function (cb) {
  return cb(null);
}

module.exports = Kocsi;


