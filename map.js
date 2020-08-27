var map = 
{
	width: 8,
	height: 8,
	cells: []
};

function drawMap()
{
	if (map.cells.length == 0)
	{
		generateMap();
	}
	var tableHTML = "";
	for (h = -1; h < map.height + 1; h++)
	{
		tableHTML += "<tr>";
		for (w = -1; w < map.width + 1; w++)
		{
			if ((w == -1) || (h == -1) || (w == map.width) || (h == map.height))
			{
				tableHTML += "<td>X</td>";
			}
			else if ((player.position.x == w) && (player.position.y == h))
			{
				tableHTML += "<td>@</td>";
			}
			else
			{
				tableHTML += "<td>" + map.cells[h][w] + "</td>";
			}
		}
		tableHTML += "</tr>";
	}
	$('#mapTable').html(tableHTML);
}

function generateMap()
{
	for (h = 0; h < map.height; h++)
	{
		var row = [];
		for (w = 0; w < map.width; w++)
		{
			row.push("");
		}
		map.cells.push(row);
	}
}
