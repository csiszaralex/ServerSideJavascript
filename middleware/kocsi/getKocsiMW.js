/**
 * Load a kocsi from the database
 */

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (!req.params['kocsiid']) res.locals.kocsi = {};
    else
      res.locals.kocsi = {
        _id: 'asd',
        sorszam: 1,
        szam: 401,
        ulohelyek: 96,
        helyjegy: true,
        vonat: '1',
      };
    next();
  };
};
