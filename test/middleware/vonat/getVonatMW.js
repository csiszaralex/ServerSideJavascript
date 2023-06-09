const expect = require('chai').expect;
const getVonatMW = require('../../../middleware/vonat/getVonatMW');

describe('GetVonatMW', () => {
  let res;

  beforeEach(() => {
    res = {
      locals: {},
    };
  });

  it('Should return a vonat', done => {
    const mw = getVonatMW({
      vonat: {
        findById: vId => {
          return { _id: vId };
        },
      },
    });

    mw({ params: { vonatid: 1 } }, res, err => {
      expect(res.locals).to.be.eql({ vonat: { _id: 1 } });
      expect(err).to.be.undefined;
      done();
    });
  });
  it('Should return an empty vontat if vonatID is not given', done => {
    const mw = getVonatMW({
      vonat: {
        findById: vId => {
          return { _id: vId };
        },
      },
    });

    mw({ params: {} }, res, err => {
      expect(res.locals).to.be.eql({ vonat: {} });
      expect(err).to.be.undefined;
      done();
    });
  });
  it('Should return an empty vonat if vonatID is not found', done => {
    const mw = getVonatMW({
      vonat: {
        findById: vId => {
          return null;
        },
      },
    });

    mw({ params: { vonatid: 1 } }, res, err => {
      expect(res.locals).to.be.eql({ vonat: {} });
      expect(err).to.be.undefined;
      done();
    });
  });
  it('Should return an error if there is a problem with the db', done => {
    const mw = getVonatMW({
      vonat: {
        findById: vId => {
          throw new Error('Hiba');
        },
      },
    });

    mw({ params: { vonatid: 1 } }, res, err => {
      expect(err).to.be.eql(new Error('Hiba'));
      done();
    });
  });
});
