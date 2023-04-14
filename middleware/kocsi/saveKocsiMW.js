const requireOption = require('../requireOption');

/**
 * Save or update a kocsi
 */

module.exports = objectrepository => {
  const KocsiModel = requireOption(objectrepository, 'kocsi');

  return (req, res, next) => {
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
