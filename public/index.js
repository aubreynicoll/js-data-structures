'use strict';

const fs = require('fs');
const path = require('path');

const re = /^[a-z]+$/i;

for (const item of fs.readdirSync(__dirname)) {
  if (re.test(item)) {
    exports[item] = require(path.resolve(__dirname, item));
  }
}
