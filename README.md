# Sancus.js better api for ES6 promises.
[![Build Status](https://travis-ci.org/nirth/horkos.js.svg?branch=master)](https://travis-ci.org/nirth/horkos.js)

### Summary
I always found [es6 promise api] to be counter counterintuitive, so I decided
to create something akin to Futures in other languages. This micro-library
named after roman god of oaths and truth - [Sancus].

### Usage

Basic example:

  ```javascript
  import {Deferred} from 'sancus';
  const deferred = new Deferred();
  deferred.promise.then((result) => console.log(`result is ${result}`));
  deferred.resolve('Awesome');
  ```

Async example:
  ```javascript
  // Function connects to mongo, and returns promise.
  import {Deferred} from 'sancus';

  function connect(uri) {
    // Create instance of deferred.
    const deferred = new Deferred();
    // Perform connection.
    MongoClient.connect(uri, (error, db) => {
      if (error !== null) {
        deferred.reject(error);
      } else {
        deferred.resolve(db);
      }
    });
    // Return reference to promise.
    return deferred.promise;
  }

  // Usage example:
  connect('mongodb://localhost:27017')
    .then(doSomethingWithDatabase);
  ```


[es6 promise api]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
[Sancus]: https://en.wikipedia.org/wiki/Sancus
