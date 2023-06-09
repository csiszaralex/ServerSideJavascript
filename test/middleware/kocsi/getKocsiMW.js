const expect = require('chai').expect;
const getKocsiMW = require('../../../middleware/kocsi/getKocsiMW');

describe('GetKocsiMW', () => {
  let res;

  beforeEach(() => {
    res = {
      locals: {},
    };
  });

  it('Should return a kocsi', done => {
    const mw = getKocsiMW({
      kocsi: {
        findById: kId => {
          return { _id: kId };
        },
      },
    });

    mw({ params: { kocsiid: 1 } }, res, err => {
      expect(res.locals).to.be.eql({ kocsi: { _id: 1 } });
      expect(err).to.be.undefined;
      done();
    });
  });
  it('Should return an empty kocsi if kocsiID is not given', done => {
    const mw = getKocsiMW({
      kocsi: {
        findById: kId => {
          return { _id: kId };
        },
      },
    });

    mw({ params: {} }, res, err => {
      expect(res.locals).to.be.eql({ kocsi: {} });
      expect(err).to.be.undefined;
      done();
    });
  });
  it('Should return an empty kocsi if kocsiID is not found', done => {
    const mw = getKocsiMW({
      kocsi: {
        findById: kId => {
          return null;
        },
      },
    });

    mw({ params: { kocsiid: 1 } }, res, err => {
      expect(res.locals).to.be.eql({ kocsi: {} });
      expect(err).to.be.undefined;
      done();
    });
  });
  it('Should return an error if there is a problem with the db', done => {
    const mw = getKocsiMW({
      kocsi: {
        findById: kId => {
          throw new Error('Hiba');
        },
      },
    });

    mw({ params: { kocsiid: 1 } }, res, err => {
      expect(err).to.be.eql(new Error('Hiba'));
      done();
    });
  });
});
