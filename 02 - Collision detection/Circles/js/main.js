var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cx = canvas.getContext('2d');

/**
 * Initializes requestAnimationFrame functionality
 *
 * @param      {object}  window    The window object
 */
(function init(window) {

	var requestAnimationFrame = window.requestAnimationFrame || 
								window.mozRequestAnimationFrame ||
                            	window.webkitRequestAnimationFrame || 
                            	window.msRequestAnimationFrame;
	
	window.requestAnimationFrame = requestAnimationFrame;

	var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

	var circles = new Array(2);
	for (var i = circles.length - 1; i >= 0; i--) {
		circles[i] = new Circle(cx);
	}

	var start = new Date;

	window.game = {
		start: start,
		circles: circles
	}

	window.request = requestAnimationFrame(animate);

})(window);

/**
 * Runs each circle object function
 *
 * @param      {number}  time    The time
 */
function animate(time) {
	var progress = time - game.start;

	cx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = game.circles.length - 1; i >= 0; i--) {
		game.circles[i].run(game.circles);
	}

	window.request = requestAnimationFrame(animate);
}

