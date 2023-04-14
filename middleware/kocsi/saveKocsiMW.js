/**
 * Save or update a kocsi
 */

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (!req.body.sorszam || !req.body.szam || !req.body.ulohelyek) {
      if (req.body.sorszam || req.body.szam || req.body.ulohelyek)
        res.locals.error = { type: 'warning', text: 'Nem töltött ki minden mezőt!' };
      return next();
    }
    if (res.locals.kocsi._id)
      console.log(
        'SAVE kocsi - ' +
          res.locals.vonat._id +
          ' ' +
          res.locals.kocsi._id +
          ' - ' +
          req.body.sorszam +
          ' ' +
          req.body.szam +
          ' ' +
          req.body.ulohelyek +
          ' ' +
          req.body.helyjegy +
          ' ',
      );
    else
      console.log(
        'NEW kocsi - ' +
          res.locals.vonat._id +
          ' - ' +
          req.body.sorszam +
          ' ' +
          req.body.szam +
          ' ' +
          req.body.ulohelyek +
          ' ' +
          req.body.helyjegy +
          ' ',
      );
    res.redirect(`/kocsi/${res.locals.vonat._id}`);
  };
};
