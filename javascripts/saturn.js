"use strict";

const outputSaturn = () => {
	let saturnString = "";
	saturnString += 	`<div class="col-md-6 col-md-offset-3">`;
	saturnString += 		`<h3>Name: Saturn</h3>`;
	saturnString += 		`<p>Year discovered: First Observation: ~700BCE</p>`;
	saturnString += 		`<p>Mass: 5.683 × 10^26 kg</p>`;
	saturnString += 		`<p>Diameter: 116,464</p>`;
	saturnString += 		`<p>Distance from Sun: 1.429 billion km</p>`;
	saturnString += 		`<p>Atmosphere composition: 96.3% molecular hydrogen and 3.25% helium by volume</p>`;
	saturnString += 		`<p>Satellites: 62</p>`;
	saturnString += 		`<p>Name of any probes/orbiters that have visited or landed on that planet: Pioneer 10 & 11, Voyager 1 & 2, Galileo, Ulysses, Cassini, New Horizon, Juno</p>`;
	saturnString += 	`</div>`;
	return saturnString;
};
module.exports = outputSaturn;