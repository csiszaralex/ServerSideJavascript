/**
 * Get a vonat by id
 */

module.exports = function (objectrepository) {
  // TODO Ha van vonatid, de nincs DB-ben
  return function (req, res, next) {
    if (!req.params['vonatid']) res.locals.vonat = {};
    else
      res.locals.vonat = {
        _id: 1,
        szam: 1,
        uzemanyag: 'diesel',
        km: 100,
      };
    next();
  };
};
