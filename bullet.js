function newBullet()
{
	return {
		markedForDelete: false,
		xMove: player.mostRecentMove.x,
		yMove: player.mostRecentMove.y,
		position: 
		{
			x: player.position.x + player.mostRecentMove.x,
			y: player.position.y + player.mostRecentMove.y,
		},
		moveCountdown: 5,
		maxMoveCountdown: 5
	};
}

var activeBullets = [];
var bulletCells = [];

function moveBullets()
{
	bulletCells = [];
	for (h = 0; h < map.height; h++)
	{
		var row = [];
		for (w = 0; w < map.width; w++)
		{
			row.push("");
		}
		bulletCells.push(row);
	}
	
	for (let i = activeBullets.length - 1; i >= 0; i--)
	{
		var activeBullet = activeBullets[i];
		checkBulletForDelete(activeBullet);
		
		activeBullet.moveCountdown--;
		if (activeBullet.moveCountdown <= 0)
		{
			activeBullet.moveCountdown = activeBullet.maxMoveCountdown;
			activeBullet.position.x = activeBullet.position.x + activeBullet.xMove;
			activeBullet.position.y = activeBullet.position.y + activeBullet.yMove;
			checkBulletForDelete(activeBullet);
		}
		
		if (activeBullet.markedForDelete)
		{
			activeBullets.splice(i, 1);
		}
		else
		{
			if (activeBullet.xMove == -1)
			{
				bulletCells[activeBullet.position.y][activeBullet.position.x] = "<";
			}
			else if (activeBullet.xMove == 1)
			{
				bulletCells[activeBullet.position.y][activeBullet.position.x] = ">";
			}
			else if (activeBullet.yMove == -1)
			{
				bulletCells[activeBullet.position.y][activeBullet.position.x] = "^";
			}
			else if (activeBullet.yMove == 1)
			{
				bulletCells[activeBullet.position.y][activeBullet.position.x] = "v";
			}
		}
	}
}

//Delete a bullet if it's in an occupied space or outside the map
function checkBulletForDelete(activeBullet)
{
	if ((activeBullet.position.x < 0)
	|| (activeBullet.position.x > map.length - 1)
	|| (activeBullet.position.y < 0)
	|| (activeBullet.position.y > map.height - 1)
	|| (map.cells[activeBullet.position.y][activeBullet.position.x]))
	{
		activeBullet.markedForDelete = true;
	}
}