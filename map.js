var map = 
{
	width: 11,
	height: 9,
	cells: [],
	draw: function()
	{
		if (this.cells.length == 0)
		{
			this.generate();
		}
		var tableHTML = "";
		for (h = -1; h < this.height + 1; h++)
		{
			tableHTML += "<tr>";
			for (w = -1; w < this.width + 1; w++)
			{
				if ((w == -1) || (h == -1) || (w == this.width) || (h == this.height))
				{
					tableHTML += "<td>X</td>";
				}
				else if ((player.position.x == w) && (player.position.y == h))
				{
					tableHTML += "<td>@</td>";
				}
				else if (this.cells[h][w].length > 0)
				{
					tableHTML += "<td>" + this.cells[h][w] + "</td>";
				}
				else if ((goblinCells.length > 0) && (goblinCells[h][w].length > 0))
				{
					tableHTML += "<td>" + goblinCells[h][w] + "</td>";
				}
				else if ((bulletCells.length > 0) && (bulletCells[h][w].length > 0))
				{
					tableHTML += "<td>" + bulletCells[h][w] + "</td>";
				}
				else
				{
					tableHTML += "<td></td>";
				}
			}
			tableHTML += "</tr>";
		}
		$('#mapTable').html(tableHTML);
		this.drawUI();
	},
	generate: function()
	{
		for (h = 0; h < this.height; h++)
		{
			var row = [];
			for (w = 0; w < this.width; w++)
			{
				row.push("");
			}
			this.cells.push(row);
		}
	},
	drawUI()
	{
		var healthCountHtml = "";
		for (let i = 0; i < player.health; i++)
		{
			healthCountHtml += "I ";
		}
		$('#healthSpan').html(healthCountHtml);
		
		var ammoCountHtml = "";
		for (let i = 0; i < player.ammo; i++)
		{
			if (player.reloading)
			{
				ammoCountHtml += "+"
			}
			else
			{
				ammoCountHtml += "*";
			}
		}
		$('#ammoSpan').html(ammoCountHtml);
	}
};