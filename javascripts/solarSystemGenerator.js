"use strict";

const earth = require('./earth');
const jupiter = require('./jupiter');
const mars = require('./mars');
const mercury = require('./mercury');
const neptune = require('./neptune');
const saturn = require('./saturn');
const uranus = require('./uranus');
const venus = require('./venus');


const greetingGenerator = {
	earth, jupiter, mars, mercury, neptune, saturn, uranus, venus
};
module.exports = greetingGenerator;
