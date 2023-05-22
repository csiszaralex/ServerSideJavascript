const requireOption = require('../requireOption');

/**
 * Get a vonat by id
 */
module.exports = objectrepository => {
  const VonatModel = requireOption(objectrepository, 'vonat');

  return async (req, res, next) => {
    if (!req.params['vonatid']) {
      res.locals.vonat = {};
      return next();
    }

    try {
      const vonat = await VonatModel.findById(req.params['vonatid']);
      res.locals.vonat = vonat || {};
      return next();
    } catch (err) {
      if (err.name === 'CastError') {
        res.locals.vonat = {};
        return next();
      }
      return next(err);
    }
  };
};
