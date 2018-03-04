Javascript Array Help
=========

javascript functions to help with arrays


[![Build Status](https://travis-ci.org/iannazzi/array-help.svg?branch=master)](https://travis-ci.org/iannazzi/array-help) [![Coverage Status](https://coveralls.io/repos/iannazzi/array-help/badge.svg)](https://coveralls.io/r/iannazzi/array-help)

## Installation

  `npm install @iannazzi/array-help`

## Usage
    require(@iannazzi/array-help)
    import {is_array} from array-help
    
    //or use the browser ready script
    <script src="dist/array-help.umd.js"></script>
    let a = 'string';
    let c = array_help.is_array(a);
    console.log(c);

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.



## Some info that helped me get this done...

https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738


    git add .
    git commit -m “Initial release”
    git tag v0.1.0
    git push origin master --tags
    npm publish --access=public 
    
    