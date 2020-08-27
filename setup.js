function setup()
{
	drawMap();
	document.addEventListener('keydown', (e) => {
			if (e.code == "ArrowUp")
			{
				player.Up();
			}
			else if (e.code == "ArrowDown")
			{
				player.Down();
			}
			else if (e.code == "ArrowLeft")
			{
				player.Left();
			}
			else if (e.code == "ArrowRight")
			{
				player.Right();
			}
		}
	);
}
