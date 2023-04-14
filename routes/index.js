const renderMW = require('../middleware/renderMW');
const getVonatMW = require('../middleware/vonat/getVonatMW');
const getVonatokMW = require('../middleware/vonat/getVonatokMW');
const saveVonatMW = require('../middleware/vonat/saveVonatMW');
const delVonatMW = require('../middleware/vonat/delVonatMW');
const getKocsiMW = require('../middleware/kocsi/getKocsiMW');
const getKocsikMW = require('../middleware/kocsi/getKocsikMW');
const saveKocsiMW = require('../middleware/kocsi/saveKocsiMW');
const delKocsiMW = require('../middleware/kocsi/delKocsiMW');

const KocsiModel = require('../models/kocsi');
const VonatModel = require('../models/vonat');

const express = require('express');

/**
 * @param {express.Express} app
 */
module.exports = function (app) {
  const objRepo = {
    kocsi: KocsiModel,
    vonat: VonatModel,
  };

  app.get('/', getVonatokMW(objRepo), renderMW(objRepo, 'index'));
  app.use(
    '/vonat/edit/:vonatid?',
    getVonatMW(objRepo),
    saveVonatMW(objRepo),
    renderMW(objRepo, 'vedit'),
  );
  app.use('/vonat/delete/:vonatid', getVonatMW(objRepo), delVonatMW(objRepo));
  app.use(
    '/kocsi/delete/:vonatid/:kocsiid',
    getVonatMW(objRepo),
    getKocsiMW(objRepo),
    delKocsiMW(objRepo),
  );
  app.use(
    '/kocsi/edit/:vonatid/:kocsiid?',
    getVonatMW(objRepo),
    getKocsiMW(objRepo),
    saveKocsiMW(objRepo),
    renderMW(objRepo, 'kedit'),
  );
  app.use(
    '/kocsi/:vonatid',
    getVonatMW(objRepo),
    getKocsikMW(objRepo),
    saveKocsiMW(objRepo),
    renderMW(objRepo, 'kocsi'),
  );
};
