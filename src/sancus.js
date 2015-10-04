/**
 * Sancus class, acts as better api for ES6 promises.
 * @class
 * @param {object} context - If provided, will be used to bind functions to context.
 *
 */
export class Sancus {
  constructor (context = null) {
    let resolve, reject;
    this._context = context;

    this._promise = new Promise((resolver, rejector) => {
      resolve = resolver.bind(context);
      reject = rejector.bind(context);
    });

    this._resolve = resolve;
    this._reject = reject;
    this._fulfilled = false;
    this._resolved = false;
    this._rejected = false;
  }
  /**
   * Resolves promise.
   * @param {object} result - Result of a successful promise.
   * @returns {Promise} Returns {Promise} or ther "thennable" object.
   */
  resolve (result) {
    this._fulfilled = true;
    this._resolved = true;
    return this._resolve(result);
  }
  /**
   * Rejects promise.
   * @method
   * @param {Object|Error} reason - Object or Error, reason why promise was rejected.
   * @returns {Promise} Returns {Promise} or other "thennable" object.
   */
  reject (reason) {
    this._fulfilled = true;
    this._rejected = true;
    return this._reject(reason);
  }
  /**
   * Reference to instance of {Promise}.
   * @property
   * @returns {Promise} Reference to instance of {Promise}.
   */
  get promise () {
    return this._promise;
  }
  /**
   * Indicates whether promise was fulfilled or not.
   * @property
   * @returns {boolean} Returns `true` if promise was fulfilled, othewise `false`.
   */
  get fulfilled() {
    return this._fulfilled;
  }
  /**
   * Indicates whether promise was resolved or not.
   * @property
   * @returns {boolean} Returns `true` if promise was resolved, othewise `false`.
   */
  get resolved() {
    return this._resolved;
  }
  /**
   * Indicates whether promise was rejected or not.
   * @property
   * @returns {boolean} Returns `true` if promise was rejected, othewise `false`.
   */
  get rejected() {
    return this._rejected;
  }
  /**
   * Returns string representation of Horkus.
   * @method
   * @returns {string} String representation of object, can be helful in debugging.
   */
  toString() {
    const {resolved, rejected} = this;
    return `[Sancus resolved=${resolved} rejected=${rejected}]`;
  }
}

/**
 * In case you don't like names of cool gods (or personificatons) in your code
 * here is boring alias to Horkus - Deferred.
 * @class
 */
export const Deferred = Sancus;
