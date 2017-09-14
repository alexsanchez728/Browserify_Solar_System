"use strict";

const SolarSystemGenerator = require('./solarSystemGenerator');

document.getElementById("buttons").addEventListener("click", (event) => {
	let planetSelected;
	if (event.target.id === "buttons") {
		planetSelected = "earth";
	} else {
		planetSelected = event.target.id;
	}
	document.getElementById("output").innerHTML = SolarSystemGenerator[planetSelected]();
});
