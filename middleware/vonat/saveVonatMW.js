/**
 * Save or update a vonat
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const VonatModel = requireOption(objectrepository, 'vonat');

  return function (req, res, next) {
    if (!req.body.szam || !req.body.uzemanyag || !req.body.km) {
      if (req.body.szam || req.body.uzemanyag || req.body.km)
        res.locals.error = { type: 'warning', text: 'Nem töltött ki minden mezőt!' };
      return next();
    }
    //TODO Ha csak egyik üres akkkor a többit töltse vissza
    //TODO validate number
    //TODO audit DB (who, when, what)

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
