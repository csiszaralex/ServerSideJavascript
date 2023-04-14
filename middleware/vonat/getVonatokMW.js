/**
 * Get all vonat from the database
 */

module.exports = function (objectrepository) {
  return function (req, res, next) {
    res.locals.vonatok = [
      { _id: 1, szam: 1, uzemanyag: 'Diesel', km: 688 },
      { _id: 2, szam: 2, uzemanyag: 'Elektromos', km: 0 },
    ];

    next();
  };
};
