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