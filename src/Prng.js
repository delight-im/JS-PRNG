/*
 * JS-PRNG (https://github.com/delight-im/JS-PRNG)
 * Copyright (c) delight.im (https://www.delight.im/)
 * Licensed under the MIT License (https://opensource.org/licenses/MIT)
 */

"use strict";

/**
 * Pseudorandom number generator (PRNG) that may optionally be seeded
 *
 * @constructor
 * @param {number} [seed] - the value that this PRNG will be seeded with
 */
function Prng(seed) {

	/**
	 * The seed for this generator
	 *
	 * @type {number}
	 * @private
	 */
	this._seed = seed || undefined;

	this._sanitizeSeed();

}

/**
 * Returns whether a seed has been provided for this instance or not
 *
 * @return {boolean} whether a seed has been provided
 * @private
 */
Prng.prototype._hasSeed = function () {
	return typeof this._seed !== "undefined";
};

/**
 * Ensures that the seed (if any) is valid and will provide meaningful results
 *
 * @private
 */
Prng.prototype._sanitizeSeed = function () {
	// if a seed has been provided
	if (this._hasSeed()) {
		// if the seed is a multiple of pi
		if ((this._seed % Math.PI) === 0) {
			// modify the seed to guarantee a meaningful first result
			this._seed += 0.1;
		}
	}
};

/**
 * Returns a random floating-point number between the specified lower (inclusive) and upper (exclusive) bound
 *
 * @return {number} the random floating-point number
 */
Prng.prototype.getRandom = function () {
	if (this._hasSeed()) {
		// get the sine of the seed
		var digits = Math.sin(this._seed);

		// move the first five digits before the comma
		digits *= Math.pow(10, 5);

		// discard everything before the comma
		digits = digits - Math.floor(digits);

		// advance the seed by one step
		this._seed++;

		// return the "random" digits
		return digits;
	}
	else {
		return Math.random();
	}
};

/**
 * Returns a random floating-point number between the specified lower (inclusive) and upper (exclusive) bound
 *
 * @param {number} min - the minimum bound
 * @param {number} max - the maximum bound
 * @return {number} the random floating-point number
 */
Prng.prototype.getRandomFloat = function (min, max) {
	return this.getRandom() * (max - min) + min;
};

/**
 * Returns a random integer between the specified lower (inclusive) and upper (inclusive) bound
 *
 * @param {number} min - the minimum bound
 * @param {number} max - the maximum bound
 * @return {number} the random integer
 */
Prng.prototype.getRandomInt = function (min, max) {
	return Math.floor(this.getRandom() * (max - min + 1)) + min;
};

module.exports = Prng;
