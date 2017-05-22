# linux-batteries [![Build Status](https://travis-ci.org/kevva/linux-batteries.svg?branch=master)](https://travis-ci.org/kevva/linux-batteries)

> List batteries on Linux


## Install

```
$ npm install --save linux-batteries
```


## Usage

```js
const linuxBatteries = require('linux-batteries');

linuxBatteries().then(batteries => {
	console.log(batteries);
	//=> ['BAT0']
});
```


## License

MIT © [Kevin Martensson](https://github.com/kevva)
