/**
 * Save or update a vonat
 */

const requireOption = require('../requireOption');

module.exports = objectrepository => {
  const VonatModel = requireOption(objectrepository, 'vonat');

  return function (req, res, next) {
    if (req.body.szam) res.locals.vonat.szam = req.body.szam;
    if (req.body.uzemanyag) res.locals.vonat.uzemanyag = req.body.uzemanyag;
    if (req.body.km) res.locals.vonat.km = req.body.km;
    if (!req.body.szam || !req.body.uzemanyag || !req.body.km) {
      if (req.body.szam || req.body.uzemanyag || req.body.km)
        res.locals.error = { type: 'warning', text: 'Nem töltött ki minden mezőt!' };

      return next();
    }
    if (isNaN(req.body.szam)) {
      res.locals.error = { type: 'info', text: 'A vonatszám csak szám lehet!' };
      return next();
    }
    if (isNaN(req.body.km)) {
      res.locals.error = { type: 'info', text: 'A kilométer csak szám lehet!' };
      return next();
    }

    const vonat = res.locals.vonat._id ? res.locals.vonat : new VonatModel();
    vonat.szam = req.body.szam;
    vonat.uzemanyag = req.body.uzemanyag;
    vonat.km = req.body.km;

    try {
      vonat.save();
    } catch (err) {
      return next(err);
    }
    res.redirect('/');
  };
};
