function setup()
{
	map.draw();
	document.addEventListener('keydown', (e) => {
			if ((e.code == "ArrowUp") || (e.code == "KeyW"))
			{
				player.Up();
			}
			else if ((e.code == "ArrowDown") || (e.code == "KeyS"))
			{
				player.Down();
			}
			else if ((e.code == "ArrowLeft") || (e.code == "KeyA"))
			{
				player.Left();
			}
			else if ((e.code == "ArrowRight") || (e.code == "KeyD"))
			{
				player.Right();
			}
			else if (e.code == "Space")
			{
				player.Shoot();
			}
		}
	);
	
	setInterval(loop, 35);
}
