"use strict";

const outputNeptune = () => {
	let neptuneString = "";
	neptuneString +=	`<div class="col-md-6 col-md-offset-3">`;
	neptuneString +=		`<h3>Name: Neptune</h3>`;
	neptuneString +=		`<p>Year discovered: 1846</p>`;
	neptuneString +=		`<p>Mass: 1.0243×1026 kg</p>`;
	neptuneString +=		`<p>Diameter: 49,244 km</p>`;
	neptuneString +=		`<p>Distance from Sun: 4.5 billion kilometers</p>`;
	neptuneString +=		`<p>Atmosphere composition: hydrogen and helium, with trace amounts of methane, water, ammonia and other ices</p>`;
	neptuneString +=		`<p>Satellites: 13 known moons, Triton being the largest</p>`;
	neptuneString +=		`<p>Name of any probes/orbiters/explorers that have visited or landed on that planet: Voyager 2 has been the only man-made probe to approach Neptune</p>`;
	neptuneString +=	`</div>`;
	return neptuneString;
};
module.exports = outputNeptune;