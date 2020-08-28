var player =
{
	reloading: false,
	reloadCounter: 8,
	maxReloadCounter: 5,
	health: 5,
	ammo: 6,
	maxAmmo: 6,
	position: {x: 5, y: 8},
	mostRecentMove: {x: 0, y: -1},
	Up: function() { this.Move(0, -1); },
	Down: function() { this.Move(0, 1); },
	Left: function() { this.Move(-1, 0); },
	Right: function() { this.Move(1, 0); },
	Move: function(x, y)
	{
		var newX = this.position.x + x;
		var newY = this.position.y + y;
		if ((newX < 0) || (newX > map.width - 1))
		{
			return false;
		}
		else if ((newY < 0) || (newY > map.height - 1))
		{
			return false;
		}
		else if (map.cells[newY][newX].length != 0)
		{
			return false;
		}
		else
		{
			this.position.x = newX;
			this.position.y = newY;
			this.mostRecentMove.x = x;
			this.mostRecentMove.y = y;
			map.draw();
			return true;
		}
	},
	Shoot: function()
	{
		if (this.reloading == false)
		{
			if (this.ammo > 0)
			{
				activeBullets.push(newBullet());
				this.ammo--;
				map.draw();
				return true;
			}
			
			if (this.ammo == 0)
			{
				this.reloading = true;
				return false;
			}
		}
		else
		{
			return false;
		}
	},
	Loop: function()
	{
		//Reload
		if (this.reloading)
		{
			this.reloadCounter--;
			if (this.reloadCounter <= 0)
			{
				this.reloadCounter = this.maxReloadCounter;
				{
					this.ammo++;
					if (this.ammo == this.maxAmmo)
					{
						this.reloading = false;
					}
				}
			}
		}
	},
};