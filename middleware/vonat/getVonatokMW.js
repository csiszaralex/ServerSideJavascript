const requireOption = require('../requireOption');

/**
 * Get all vonat from the database
 */

module.exports = objectrepository => {
  const VonatModel = requireOption(objectrepository, 'vonat');

  return async (req, res, next) => {
    try {
      res.locals.vonatok = await VonatModel.find({});
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
