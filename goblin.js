var activeGoblins = [];
var goblinCells = [];

function newGoblin(x, y)
{
	return {
		position: {x: x, y: y},
		markedForDelete: false,
		Move: function() {  },
	};
}

var goblinSpawner =
{
	numGoblinsToSpawn: 1,
	goblinSpawnCounter: 90,
	maxGoblinSpawnCounter: 90,
	spawnGoblins: function()
	{
		for (let i = 0; i < this.numGoblinsToSpawn; i++)
		{
			if (this.spawnIndividualGoblin() == false)
			{
				i = this.numGoblinsToSpawn;
			}
		}
		this.numGoblinsToSpawn++;
	},
	spawnIndividualGoblin: function()
	{
		var validSpawnX = this.getValidGoblinSpawnLocations();
		if (validSpawnX.length > 0)
		{
			var goblinX = validSpawnX[Math.floor(validSpawnX.length * Math.random())];
			var goblin = newGoblin(goblinX, 0);
			activeGoblins.push(goblin);
			return true;
		}
		else
		{
			return false;
		}
	},
	getValidGoblinSpawnLocations: function()
	{
		var validSpawnX = [];
		for (let i = 0; i < map.cells[0].length; i++)
		{
			if (map.cells[0][i].length == 0)
			{
				validSpawnX.push(i);
			}
		}
		return validSpawnX;
	},
};

function goblinSpawnerLoop()
{
	if (activeGoblins.length == 0)
	{
		goblinSpawner.goblinSpawnCounter--;
		if (goblinSpawner.goblinSpawnCounter <= 0)
		{
			goblinSpawner.spawnGoblins();
			goblinSpawner.goblinSpawnCounter = goblinSpawner.maxGoblinSpawnCounter;
		}
	}
	
	goblinCells = [];
	for (h = 0; h < map.height; h++)
	{
		var row = [];
		for (w = 0; w < map.width; w++)
		{
			row.push("");
		}
		goblinCells.push(row);
	}
	
	for (let i = 0; i < activeGoblins.length; i++)
	{
		var activeGoblin = activeGoblins[i];
		activeGoblin.Move();
		goblinCells[activeGoblin.position.y][activeGoblin.position.x] = "G";
	}
}