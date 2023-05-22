const requireOption = require('../requireOption');

/**
 * Load a kocsi from the database
 */

module.exports = objectrepository => {
  const KocsiModel = requireOption(objectrepository, 'kocsi');

  return async (req, res, next) => {
    try {
      const kocsi = await KocsiModel.findById(req.params['kocsiid']);
      res.locals.kocsi = kocsi || {};
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
