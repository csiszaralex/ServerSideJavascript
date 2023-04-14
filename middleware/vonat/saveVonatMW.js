/**
 * Save or update a vonat
 */

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (!req.body.szam || !req.body.uzemanyag || !req.body.km) {
      if (req.body.szam || req.body.uzemanyag || req.body.km)
        res.locals.error = { type: 'warning', text: 'Nem töltött ki minden mezőt!' };
      return next();
    }
    //TODO Ha csak egyik üres akkkor a többit töltse vissza
    if (res.locals.vonat._id)
      console.log(
        'SAVE vonat - ' +
          res.locals.vonat._id +
          ' ' +
          req.body.szam +
          ' ' +
          req.body.uzemanyag +
          ' ' +
          req.body.km,
      );
    else console.log('NEW vonat - ' + req.body.szam + ' ' + req.body.uzemanyag + ' ' + req.body.km);
    res.redirect('/');
  };
};
