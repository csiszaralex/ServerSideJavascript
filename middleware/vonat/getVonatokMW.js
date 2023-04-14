const requireOption = require('../requireOption');

/**
 * Get all vonat from the database
 */

module.exports = objectrepository => {
  const VonatModel = requireOption(objectrepository, 'vonat');

  return async (req, res, next) => {
    try {
      const vonatok = await VonatModel.find({});
      res.locals.vonatok = vonatok;
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
