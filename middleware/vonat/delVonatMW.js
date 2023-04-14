const requireOption = require('../requireOption');

/**
 * Remove a vonat from the database
 */

module.exports = function (objectrepository) {
  const KocsiModel = requireOption(objectrepository, 'kocsi');
  return async function (req, res, next) {

    if (!res.locals.vonat._id) return res.redirect('/');

    try {
      await KocsiModel.deleteMany({ _vonat: res.locals.vonat._id });
      await res.locals.vonat.deleteOne();
    } catch (err) {
      return next(err);
    }
    res.redirect('/');
  };
};
