let bodyStyle, skillsStyle = null;

let hue = 0;

let brightness = 0;

const saturaton = 50;
const lightness = 80;

function main()
{
	// get body style 
	bodyStyle = document.body.style;

	// get skills if it exists
	skills = document.getElementById("skills");
	if (skills) // get style if skills exists
		skillsStyle = document.getElementById("skills").style;

	setInterval(function() {

		bodyStyle.background = `hsl(${hue++ % 360}, 60%, 80%)`;

		// modify style if skills exists
		if (skills)
			skillsStyle.border = `2px dotted hsl(0, 0%, ${brightness++ % 100}%)`

	}, 500);

}