"use strict";

const outputEarth = () => {
	let earthString = "";
	earthString += 	`<div class="col-md-6 col-md-offset-3">`;
	earthString += 		`<h3>Name: Earth</h3>`;
	earthString += 		`<p>Year discovered: 2017 years ago</p>`;
	earthString += 		`<p>Mass: 5.972 x 10^24 kg</p>`;
	earthString += 		`<p>Diameter: 7,926 miles</p>`;
	earthString += 		`<p>Distance from sun: 92.96 million miles </p>`;
	earthString += 		`<p>Atmosphere composition: 78% nitrogen, 21% oxygen, 1% argon </p>`;
	earthString += 		`<p>Satellites: Moon</p>`;
	earthString += 		`<p>Explorers: Matt Damon & Friends</p>`;
	earthString += 	`</div>`;
	return earthString;
};

module.exports = outputEarth;