import toggleMenu from "./modules/header/toggleMenu";
import streetMap from "./modules/streetMap";

window.addEventListener("DOMContentLoaded", function () {
	console.log("some thing for me");
	if (toggleMenu) {
		toggleMenu();
	}
	if (streetMap) {
		streetMap();
	}
});
