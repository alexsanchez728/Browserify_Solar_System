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
