/**
 * Load all kocsi from the database
 */

module.exports = function (objectrepository) {
  return function (req, res, next) {
    res.locals.kocsik = [
      { _id: 'asd', sorszam: 1, szam: 401, ulohelyek: 96, helyjegy: true, vonat: '1' },
      { _id: 'dededc', sorszam: 2, szam: 402, ulohelyek: 96, helyjegy: true, vonat: '1' },
      { _id: 'demcne', sorszam: 3, szam: 403, ulohelyek: 130, helyjegy: false, vonat: '1' },
    ];
    next();
  };
};
