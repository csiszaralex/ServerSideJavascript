/**
 * Removes a kocsi from the database
 */

module.exports = objectrepository => {
  return (req, res, next) => {
    if (!res.locals.kocsi._id) return res.redirect(`/kocsi/${res.locals.vonat._id}`);

    try {
      res.locals.kocsi.deleteOne();
    } catch (err) {
      return next(err);
    }
    res.redirect(`/kocsi/${res.locals.vonat._id}`);
  };
};
