const requireOption = require('../requireOption');

/**
 * Save or update a kocsi
 */

module.exports = objectrepository => {
  const KocsiModel = requireOption(objectrepository, 'kocsi');

  return function (req, res, next) {
    if (req.body.sorszam) res.locals.kocsi.sorszam = req.body.sorszam;
    if (req.body.szam) res.locals.kocsi.szam = req.body.szam;
    if (req.body.ulohelyek) res.locals.kocsi.ulohelyek = req.body.ulohelyek;
    if (req.body.helyjegy) res.locals.kocsi.helyjegy = req.body.helyjegy;
    if (!req.body.sorszam || !req.body.szam || !req.body.ulohelyek) {
      if (req.body.sorszam || req.body.szam || req.body.ulohelyek)
        res.locals.error = { type: 'warning', text: 'Nem töltött ki minden mezőt!' };
      return next();
    }
    if (isNaN(req.body.sorszam)) {
      res.locals.error = { type: 'info', text: 'A sorszám csak szám lehet!' };
      return next();
    }
    if (isNaN(req.body.szam)) {
      res.locals.error = { type: 'info', text: 'A kocsiszám csak szám lehet!' };
      return next();
    }
    if (isNaN(req.body.ulohelyek)) {
      res.locals.error = { type: 'info', text: 'Az ülőhelyek száma csak szám lehet!' };
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
