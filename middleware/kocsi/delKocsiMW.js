/**
 * Removes a kocsi from the database
 */

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (res.locals.kocsi._id) console.log('DEL kocsi - ' + req.params['kocsiid']);
    res.redirect(`/kocsi/${res.locals.vonat._id}`);
  };
};
