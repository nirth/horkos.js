import {Sancus, Deferred} from '../src/sancus';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;


// Sync tests.
describe('Sancus should', () => {
  it('exist', () => expect(Sancus).to.be.a('function'));
  it('have alias "Deferred"', () => expect(Deferred).to.equal(Sancus));
});

// Async tests.
describe('Sancus should', () => {
  let sancus;

  beforeEach(() => {
    sancus = new Sancus();
  });

  it('initially indicate that promise is not fulfilled', () => {
    expect(sancus.fulfilled).to.equal(false);
  });

  it('initially indicate that promise is not resolved', () => {
    expect(sancus.resolved).to.equal(false);
  });

  it('initially indicate that promise is not rejected', () => {
    expect(sancus.rejected).to.equal(false);
  });

  it('indicate that it was resolved and fullfilled but not rejected', () => {
    sancus.resolve(true);
    expect(sancus.fulfilled).to.equal(true);
    expect(sancus.resolved).to.equal(true);
    expect(sancus.rejected).to.equal(false);
  });

  it('indicate that it was rejected and fullfilled but not resolved', () => {
    sancus.reject(false);
    expect(sancus.fulfilled).to.equal(true);
    expect(sancus.rejected).to.equal(true);
    expect(sancus.resolved).to.equal(false);
  });

  it('return instance of promise to allow chaining', () => {
    const resolveResult = {result: 'myResult'};

    expect(sancus.promise.then((result) => result))
      .to.eventually.have.property('result');

    sancus.resolve(resolveResult);
  });
});
