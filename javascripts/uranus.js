"use strict";

const outputUranus = () => {
	let uranusString = "";
	uranusString +=	`<div class="col-md-6 col-md-offset-3">`;
	uranusString +=		`<h3>Name: Uranus</h3>`;
	uranusString +=		`<p>Year discovered: 1781</p>`;
	uranusString +=		`<p>Mass: (8.6810±0.0013)×1025 kg</p>`;
	uranusString +=		`<p>Size: 50,724 km</p>`;
	uranusString +=		`<p>Distance from Sun: 2.871 billion km</p>`;
	uranusString +=		`<p>Atmosphere composition: Molecular hydrogen: 82.5%, Helium: 15.2%, Methane: 2.3%</p>`;
	uranusString +=		`<p>Satellites: 27 Known Satellites</p>`;
	uranusString +=		`<p>Name of any probes/orbiters that have visited or landed on that planet: Voyager 2, closest approach in 1986</p>`;
	uranusString +=	`</div>`;
	return uranusString;
};
module.exports = outputUranus;