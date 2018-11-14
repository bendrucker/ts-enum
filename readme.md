# ts-enum [![Build Status](https://travis-ci.org/bendrucker/ts-enum.svg?branch=master)](https://travis-ci.org/bendrucker/ts-enum) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/ts-enum.svg)](https://greenkeeper.io/)

> Create TypeScript enums in JS


## Install

```
$ npm install --save ts-enum
```


## Usage

```js
var tsEnum = require('ts-enum')

tsEnum({foo: 'bar'})
//=> {foo: 'bar', bar: 'foo'}
```

## API

#### `tsEnum(obj)` -> `object`

##### obj

*Required*  
Type: `object`

The JavaScript object from which to create a pseudo-enum.


## License

MIT © [Ben Drucker](http://bendrucker.me)
