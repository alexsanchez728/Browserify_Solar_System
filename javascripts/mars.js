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