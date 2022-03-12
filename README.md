# quick-int

>

Simply generate a random integer with this utility method.

The generator is inclusive on both ends, so `quick_int(0, 10)` could produce `0`, `100`, or any whole number in between.


[![NPM](https://img.shields.io/npm/v/quick-int.svg)](https://www.npmjs.com/package/quick-int)

[NPM Repository](https://npmjs.org/quick-int)

## CDN

You can use the CDN version of this plugin for fast and easy setup.

```html
<script src="https://unpkg.com/quick-int@latest/index.js"></script>
```

## Installation
You can install quick-int with just one command and you're good to go
```shell

# with npm
npm i quick-int

# with yarn
yarn add quick-int

```

## Examples

```js
import quick_int from "quick-int";

const my_int_01 = quick_int({ min: 0, max: 100 });

const my_int_02 = quick_int(0, 100);

const my_int_03 = quick_int();
```
