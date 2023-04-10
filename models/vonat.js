// const Vonat = {
//   Szam: Number,
//   Uzemanyag: String,

// };

// module.exports = Vonat;

const Vonat = function () {};

const VonatInstanceMock = {
  id: 'vonat1',
  Szam: 1,
  Uzemanyag: 'diesel',
};

/**
 * Find one element with criteria
 * @param  criteria
 * @param  cb
 * @returns {*}
 */
Vonat.findOne = function (criteria, cb) {
  return cb(null, VonatInstanceMock);
};

/**
 * Find all elements with criteria
 * @param  criteria
 * @param  cb
 * @returns {*}
 */
Vonat.find = function (criteria, cb) {
  return cb(null, [VonatInstanceMock, VonatInstanceMock, VonatInstanceMock]);
};

/**
 * Save the item to DB
 * @param cb
 * @returns {*}
 */
Vonat.prototype.save = function (cb) {
  return cb(null, this);
};

/**
 * Delete an object
 * @param cb
 * @returns {*}
 */
Vonat.prototype.remove = function (cb) {
  return cb(null);
};

module.exports = Vonat;
