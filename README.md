# JS-PRNG

Pseudorandom number generator (PRNG) for JavaScript

## Installation

 * In the browser

   ```html
   <script type="text/javascript" src="dist/browser-bundle.min.js"></script>
   ```

 * In Node.js

   ```
   $ npm install @delight-im/prng
   ```

   and

   ```javascript
   var Prng = require("@delight-im/prng");
   ```

## Usage

 * Creating a new instance

   ```javascript
   var prng = new Prng();
   ```

 * Seeding the instance for reproducible results (optional)

   ```javascript
   var seed = 42;
   var prng = new Prng(seed);
   ```

 * Getting a random floating-point number between 0 (inclusive) and 1 (exclusive)

   ```javascript
   var randomNumber = prng.getRandom();
   ```

 * Retrieving a random floating-point number between a specified lower (inclusive) and upper (exclusive) bound

   ```javascript
   var randomFloat = prng.getRandomFloat(2, 6);
   ```

 * Generating a random integer between a specified lower (inclusive) and upper (inclusive) bound

   ```javascript
   var randomInt = prng.getRandomInt(25, 75);
   ```

## Development

 * Prerequisites

   ```
   $ npm install -g uglify-js
   $ npm install -g browserify
   ```

 * Building the browser bundle

   ```
   $ browserify src/Prng.js --standalone Prng > dist/browser-bundle.js
   $ uglifyjs dist/browser-bundle.js --compress --preamble "$(< src/header.js)" > dist/browser-bundle.min.js
   $ rm dist/browser-bundle.js
   ```

## Contributing

All contributions are welcome! If you wish to contribute, please create an issue first so that your feature, problem or question can be discussed.

## License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
