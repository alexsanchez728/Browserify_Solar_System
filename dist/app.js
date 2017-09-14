(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const outputEarth = () => {
	let earthString = "";
	earthString += 	`<section>`;
	earthString += 		`<h3>Name: Earth</h3>`;
	earthString += 		`<p>Year discovered: 2017 years ago</p>`;
	earthString += 		`<p>Mass: 5.972 x 10^24 kg</p>`;
	earthString += 		`<p>Diameter: 7,926 miles</p>`;
	earthString += 		`<p>Distance from sun: 92.96 million miles </p>`;
	earthString += 		`<p>Atmosphere composition: 78% nitrogen, 21% oxygen, 1% argon </p>`;
	earthString += 		`<p>Satellites: Moon</p>`;
	earthString += 		`<p>Explorers: Matt Damon & Friends</p>`;
	earthString += 	`</section>`;
	return earthString;
};

module.exports = outputEarth;
},{}],2:[function(require,module,exports){
"use strict";

const outputJupiter = () => {
	let jupiterString = "";
	jupiterString +=	`<section>`;
	jupiterString +=		`<h3>Name: Jupiter</h3>`;
	jupiterString +=		`<p>First Detailed Observations: 1610 by Galileo</p>`;
	jupiterString +=		`<p>Mass: 1.8986×1027 kg</p>`;
	jupiterString +=		`<p>Diameter: 139,822 km</p>`;
	jupiterString +=		`<p>Distance from Sun: 778.5 million km</p>`;
	jupiterString +=		`<p>Atmosphere composition: Hydrogen, Helium</p>`;
	jupiterString +=		`<p>Satellites: 53 confirmed</p>`;
	jupiterString +=		`<p>Name of any probes/orbiters that have visited or landed on that planet: Pioneer 10 & 11, Voyager 1 & 2, Galileo, Ulysses, Cassini, New Horizon, Juno</p>`;
	jupiterString +=	`</section>`;
	return jupiterString;
};

module.exports = outputJupiter;
},{}],3:[function(require,module,exports){
"use strict";

const SolarSystemGenerator = require('./solarSystemGenerator');

document.getElementById("mercury").innerHTML = SolarSystemGenerator.mercury();
document.getElementById("venus").innerHTML = SolarSystemGenerator.venus();
document.getElementById("earth").innerHTML = SolarSystemGenerator.earth();
document.getElementById("mars").innerHTML = SolarSystemGenerator.mars();
document.getElementById("jupiter").innerHTML = SolarSystemGenerator.jupiter();
document.getElementById("saturn").innerHTML = SolarSystemGenerator.saturn();
document.getElementById("uranus").innerHTML = SolarSystemGenerator.uranus();
document.getElementById("neptune").innerHTML = SolarSystemGenerator.neptune();
	// document.getElementById("output").innerHTML = GreetingGenerator[languageSelected]();

},{"./solarSystemGenerator":8}],4:[function(require,module,exports){
"use strict";

const outputMars = () => {
	let marsString = "";
	marsString += 	`<section>`;
	marsString += 		`<h3>Name: Mars</h3>`;
	marsString += 		`<p>Year discovered: 1659</p>`;
	marsString += 		`<p>Mass: 6.39 x 10^23 kg</p>`;
	marsString += 		`<p>Diameter: 4,212 miles</p>`;
	marsString += 		`<p>Distance from sun: 141.6 million miles</p>`;
	marsString += 		`<p>Atmosphere composition: 95.32% Carbon Dioxide, 2.7% Nitrogen, 1.6% Argon, 0.13% Carbon Monoxide</p>`;
	marsString += 		`<p>Satellites: Phobos and Deimos</p>`;
	marsString += 		`<p>Explorers: Matt Damon</p>`;
	marsString += 	`</seciton>`;
	return marsString;
};
module.exports = outputMars;
},{}],5:[function(require,module,exports){
"use strict";

const oututMercury = () => {
	let mercuryString ="";
	mercuryString +=	`<section>`;
	mercuryString +=		`<h3>Name: Mercury </h3>`;
	mercuryString +=		`<p>Year discovered: One of the earliest records of Mercury comes from the Sumerians around 3,000 BC</p>`;
	mercuryString +=		`<p>Mass: 3.285 × 10^23 kg </p>`;
	mercuryString +=		`<p>Diameter: 4,878 km</p>`;
	mercuryString +=		`<p>Distance from Sun: 35.98 million miles</p>`;
	mercuryString +=		`<p>Atmosphere composition: contains small amounts of hydrogen, helium, and oxygen. It also has even tinier amounts of sodium, potassium, calcium, and magnesium</p>`;
	mercuryString +=		`<p>Satellites: no natural satellites </p>`;
	mercuryString +=		`<p>Name of any probes/orbiters/explorers that have visited or landed on that planet: United States' Mariner 10</p>`;
	mercuryString +=	`</section>`;
	return mercuryString;
};

module.exports = oututMercury;
},{}],6:[function(require,module,exports){
"use strict";

const outputNeptune = () => {
	let neptuneString = "";
	neptuneString +=	`<section>`;
	neptuneString +=		`<h3>Name: Neptune</h3>`;
	neptuneString +=		`<p>Year discovered: 1846</p>`;
	neptuneString +=		`<p>Mass: 1.0243×1026 kg</p>`;
	neptuneString +=		`<p>Diameter: 49,244 km</p>`;
	neptuneString +=		`<p>Distance from Sun: 4.5 billion kilometers</p>`;
	neptuneString +=		`<p>Atmosphere composition: hydrogen and helium, with trace amounts of methane, water, ammonia and other ices</p>`;
	neptuneString +=		`<p>Satellites: 13 known moons, Triton being the largest</p>`;
	neptuneString +=		`<p>Name of any probes/orbiters/explorers that have visited or landed on that planet: Voyager 2 has been the only man-made probe to approach Neptune</p>`;
	neptuneString +=	`</section>`;
	return neptuneString;
};
module.exports = outputNeptune;
},{}],7:[function(require,module,exports){
"use strict";

const outputSaturn = () => {
	let saturnString = "";
	saturnString += 	`<section>`;
	saturnString += 		`<h3>Name: Saturn</h3>`;
	saturnString += 		`<p>Year discovered: First Observation: ~700BCE</p>`;
	saturnString += 		`<p>Mass: 5.683 × 10^26 kg</p>`;
	saturnString += 		`<p>Diameter: 116,464</p>`;
	saturnString += 		`<p>Distance from Sun: 1.429 billion km</p>`;
	saturnString += 		`<p>Atmosphere composition: 96.3% molecular hydrogen and 3.25% helium by volume</p>`;
	saturnString += 		`<p>Satellites: 62</p>`;
	saturnString += 		`<p>Name of any probes/orbiters that have visited or landed on that planet: Pioneer 10 & 11, Voyager 1 & 2, Galileo, Ulysses, Cassini, New Horizon, Juno</p>`;
	saturnString += 	`</section>`;
	return saturnString;
};
module.exports = outputSaturn;
},{}],8:[function(require,module,exports){
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

},{"./earth":1,"./jupiter":2,"./mars":4,"./mercury":5,"./neptune":6,"./saturn":7,"./uranus":9,"./venus":10}],9:[function(require,module,exports){
"use strict";

const outputUranus = () => {
	let uranusString = "";
	uranusString +=	`<seciton>`;
	uranusString +=		`<h3>Name: Uranus</h3>`;
	uranusString +=		`<p>Year discovered: 1781</p>`;
	uranusString +=		`<p>Mass: (8.6810±0.0013)×1025 kg</p>`;
	uranusString +=		`<p>Size: 50,724 km</p>`;
	uranusString +=		`<p>Distance from Sun: 2.871 billion km</p>`;
	uranusString +=		`<p>Atmosphere composition: Molecular hydrogen: 82.5%, Helium: 15.2%, Methane: 2.3%</p>`;
	uranusString +=		`<p>Satellites: 27 Known Satellites</p>`;
	uranusString +=		`<p>Name of any probes/orbiters that have visited or landed on that planet: Voyager 2, closest approach in 1986</p>`;
	uranusString +=	`</section>`;
	return uranusString;
};
module.exports = outputUranus;
},{}],10:[function(require,module,exports){
"use strict";

const outputVenus = () => {
	let venusString = "";
	venusString +=	`<section>`;
	venusString +=		`<h3>Name: Venus </h3>`;
	venusString +=		`<p>Year discovered: Since Venus is so bright and noticable in the sky, it was probably seen by the first groups of humans</p>`;
	venusString +=		`<p>Mass: 4.867 × 10^24 kg </p>`;
	venusString +=		`<p>Diameter: 7,521 miles (12,104 km) </p>`;
	venusString +=		`<p>Distance from Sun: 67.689 million miles</p>`;
	venusString +=		`<p>Atmosphere composition: primarily of carbon dioxide </p>`;
	venusString +=		`<p>Satellites: No natural satellites </p>`;
	venusString +=		`<p>Name of any probes/orbiters/explorers that have visited or landed on that planet:United States' Mariner 10, Russian Venera 9</p>`;
	venusString +=	`</section>`;
	return venusString;
};
module.exports = outputVenus;
},{}]},{},[3]);
