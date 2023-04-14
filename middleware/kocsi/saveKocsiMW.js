const requireOption = require('../requireOption');

/**
 * Save or update a kocsi
 */

module.exports = function (objectrepository) {
  const KocsiModel = requireOption(objectrepository, 'kocsi');

  return function (req, res, next) {
    if (!req.body.sorszam || !req.body.szam || !req.body.ulohelyek) {
      if (req.body.sorszam || req.body.szam || req.body.ulohelyek)
        res.locals.error = { type: 'warning', text: 'Nem töltött ki minden mezőt!' };
      return next();
    }

    const kocsi = res.locals.kocsi._id ? res.locals.kocsi : new KocsiModel();
    kocsi.sorszam = req.body.sorszam;
    kocsi.szam = req.body.szam;
    kocsi.ulohelyek = req.body.ulohelyek;
    kocsi._vonat = res.locals.vonat;
    kocsi.helyjegy = req.body.helyjegy ? true : false;

    try {
      kocsi.save();
    } catch (err) {
      return next(err);
    }

    res.redirect(`/kocsi/${res.locals.vonat._id}`);
  };
};
