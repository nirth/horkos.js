import {Horkos, Deferred} from '../src/horkos';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;


// Sync tests.
describe('Horkos should', () => {
  it('exist', () => expect(Horkos).to.be.a('function'));
  it('have alias "Deferred"', () => expect(Deferred).to.equal(Horkos));
});

// Async tests.
describe('Horkos should', () => {
  let horkos;

  beforeEach(() => {
    horkos = new Horkos();
  });

  it('initially indicate that promise is not fulfilled', () => {
    expect(horkos.fulfilled).to.equal(false);
  });

  it('initially indicate that promise is not resolved', () => {
    expect(horkos.resolved).to.equal(false);
  });

  it('initially indicate that promise is not rejected', () => {
    expect(horkos.rejected).to.equal(false);
  });

  it('indicate that it was resolved and fullfilled but not rejected', () => {
    horkos.resolve(true);
    expect(horkos.fulfilled).to.equal(true);
    expect(horkos.resolved).to.equal(true);
    expect(horkos.rejected).to.equal(false);
  });

  it('indicate that it was rejected and fullfilled but not resolved', () => {
    horkos.reject(false);
    expect(horkos.fulfilled).to.equal(true);
    expect(horkos.rejected).to.equal(true);
    expect(horkos.resolved).to.equal(false);
  });

  it('return instance of promise to allow chaining', () => {
    const resolveResult = {result: 'myResult'};

    expect(horkos.promise.then((result) => result))
      .to.eventually.have.property('result');

    horkos.resolve(resolveResult);
  });
});
