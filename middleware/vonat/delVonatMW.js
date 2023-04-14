/**
 * Remove a vonat from the database
 */

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (res.locals.vonat._id) console.log('DEL vonat - ' + req.params['vonatid']);
    res.redirect('/');
  };
};
