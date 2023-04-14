/**
 * Remove a vonat from the database
 */

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (!res.locals.vonat._id) return res.redirect('/');

    try {
      res.locals.vonat.deleteOne();
    } catch (err) {
      return next(err);
    }
    res.redirect('/');
  };
};
