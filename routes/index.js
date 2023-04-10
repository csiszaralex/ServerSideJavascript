const renderMW = require('../middleware/renderMW');
const getVonatMW = require('../middleware/vonat/getVonatMW');
const getVonatokMW = require('../middleware/vonat/getVonatokMW');
const saveVonatMW = require('../middleware/vonat/saveVonatMW');
const delVonatMW = require('../middleware/vonat/delVonatMW');
const getKocsiMW = require('../middleware/kocsi/getKocsiMW');
const getKocsikMW = require('../middleware/kocsi/getKocsikMW');
const saveKocsiMW = require('../middleware/kocsi/saveKocsiMW');
const delKocsiMW = require('../middleware/kocsi/delKocsiMW');

const Kocsi = require('../models/kocsi');
const Vonat = require('../models/vonat');

const express = require('express');

/**
 * @param {express.Express} app
 */
module.exports = function (app) {
  const objRepo = {
    kocsiModel: Kocsi,
    vonatModel: Vonat,
  };

  app.get('/', renderMW(objRepo, 'index'));
  app.get('/vonat', getVonatokMW(objRepo));
  app.post('/vonat', saveVonatMW(objRepo));
  app.get('/vonat/:vonatid', getVonatMW(objRepo));
  app.patch('/vonat/:vonatid', getVonatMW(objRepo), saveVonatMW(objRepo));
  app.delete('/vonat/:vonatid', getVonatMW(objRepo), delVonatMW(objRepo));
  app.get('/kocsi', renderMW(objRepo, 'kocsik'));
  app.get('/kocsi/:vonatid', getVonatMW(objRepo), getKocsikMW(objRepo));
  app.post('/kocsi/:vonatid', getVonatMW(objRepo), saveKocsiMW(objRepo));
  app.get('/kocsi/:vonatid/:kocsiid', getVonatMW(objRepo), getKocsiMW(objRepo));
  app.patch('/kocsi/:vonatid/:kocsiid', saveKocsiMW(objRepo));
  app.delete('/kocsi/:vonatid/:kocsiid', delKocsiMW(objRepo));
};
