$(document).ready( function() {
	var c = document.getElementById("timeline");
	//- var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	drawGraphGuides();

	function drawGraphGuides() {
		var gradient = ctx.createLinearGradient(50, 0, 910, 0);
		gradient.addColorStop("0", "rgba(255,255,255,0.0)");
		gradient.addColorStop("0.8", "rgba(255,255,255,0.85)");
		gradient.addColorStop("1.0", "rgba(255,255,255,0.0)");

		// Fill with gradient
		ctx.strokeStyle = gradient;
		ctx.lineWidth = 2;

		ctx.beginPath();
		ctx.moveTo(50, 350);
		ctx.lineTo(910, 350);
		ctx.stroke();
		ctx.closePath();

		var todayX = 960 * 0.8;
		var gradient = ctx.createLinearGradient(0, 50, 0, 350);
		gradient.addColorStop("0", "rgba(255,255,255,0.0)");
		gradient.addColorStop("0.8", "rgba(255,255,255,1)");

		ctx.strokeStyle = gradient;
		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(todayX, 50);
		ctx.lineTo(todayX, 350);
		ctx.stroke();
		ctx.closePath();
	}

});