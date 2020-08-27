var player =
{
	position: {x: 0, y: 7},
	Up: function() { if (this.position.y > 0) {this.position.y--; drawMap();} },
	Down: function() { if (this.position.y < map.height - 1) {this.position.y++; drawMap();} },
	Left: function() { if (this.position.x > 0) {this.position.x--; drawMap();} },
	Right: function() { if (this.position.x < map.width - 1) {this.position.x++; drawMap();} },
};
