/**
 * Save or update a vonat
 */

const requireOption = require('../requireOption');

module.exports = objectrepository => {
  const VonatModel = requireOption(objectrepository, 'vonat');

  return (req, res, next) => {
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
