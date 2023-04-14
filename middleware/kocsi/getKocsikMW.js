const requireOption = require('../requireOption');

/**
 * Load all kocsi from the database
 */

module.exports = objectrepository => {
  //TODO error handling
  const KocsiModel = requireOption(objectrepository, 'kocsi');

  return async (req, res, next) => {
    if (!res.locals.vonat._id) return next('ERROR: Vonat not found');

    try {
      res.locals.kocsik = await KocsiModel.find({ _vonat: res.locals.vonat._id });
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
