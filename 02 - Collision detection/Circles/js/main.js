var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cx = canvas.getContext('2d');

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


function animate(time) {
	var progress = time - game.start;

	cx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = game.circles.length - 1; i >= 0; i--) {
		game.circles[i].run(game.circles);
	}

	window.request = requestAnimationFrame(animate);
}

