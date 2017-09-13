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