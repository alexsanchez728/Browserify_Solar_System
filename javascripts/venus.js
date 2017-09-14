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