const requireOption = require('../requireOption');

/**
 * Load a kocsi from the database
 */

module.exports = function (objectrepository) {
  const KocsiModel = requireOption(objectrepository, 'kocsi');

  return async function (req, res, next) {
    if (!req.params['kocsiid']) {
      res.locals.kocsi = {};
      return next();
    }

    try {
      const kocsi = await KocsiModel.findById(req.params['kocsiid']);
      res.locals.kocsi = kocsi;
      return next();
    } catch (err) {
      if (err.name === 'CastError') {
        res.locals.kocsi = {};
        return next();
      }
      return next(err);
    }
  };
};
