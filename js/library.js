function $(selector)
{
	var self = {};  //This wil work the same as "this"
	var allchar = "0123456789ABCDEF";
	self.selector = selector; //Anything passed into the $("") in the html script, will be taken as the selector
	self.element = document.querySelector(self.selector);


/*
	//Using this to test and see if the libary is working
	self.html = function()
	{
		// If html()is placed behind a function, in this case a console log
		// it will put the selected item in html markup inside the console log
		return self.element;
	}
*/	
	
	//event listener for all "on" type events
	self.on = function(type, callback)
	{
		self.element['on' + type] = callback;
		return self;
	}

	//Changes background-color of the selector
	self.css = function(name, value)
	{
		//If there's no set value it will change css to default css below
		if (!value) self.element.setAttribute("style", "color:red; border: 1px solid blue;");
		
		self.element.setAttribute(name, value);
		return self;
	}

	//Changes background-color of the selector
	self.changeBg = function(name, value)
	{
		var rdmcol = ""; //container variable for the background color code

		//Generates 6 numbers or letters
		for(var i=0; i<6; i++)
		{
			rdmcol += allchar[Math.floor(Math.random()*16)];
		}
		//return rdmcol;  <--- use to check if the generator works

		//If there's no color set, it will change the color by default down below
		if (!value) self.element.setAttribute("style", "background-color: #"+rdmcol);
		return self;
	}

	self.randomcol = function (name, value)
	{
		var rgb = ['255', '0', '0']; //Default rbg property list consisting of 3 numbers between 0 and 255


		setInterval(function()
		{

		rgb[0] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color red
		rgb[1] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color green
		rgb[2] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color blue

		var bgcol = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
		//return bgcol; <--- use to check if the rgb code generating works

		//Sets the rgb value from bgcol into the css style background-color
		self.element.setAttribute("style", "background-color:" +bgcol);
		}, 1000);
		return self
	}

	/*self.contr = function(name, value)
	{
		var rgb = ['255', '0', '0']; //Default rbg property list

		rgb[0] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color red
		rgb[1] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color green
		rgb[2] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color blue
		
		//return rgb[0]; <--- use to check if list items work

		//This is an algoritme I found on 
		//http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx 
		//To calculate the brightness of a color
		var contrast = Math.floor((parseInt(rgb[0] * 299) + (parseInt(rgb[1] * 587))+(parseInt(rgb[0] * 114))/1000));
		//return contrast; //<--- use to check if getting the contrast value works
		
		if (contrast > 125)
		{
			self.element.setAttribute("style", "color: black;");
		}
		else
		{
			self.element.setAttribute("style", "color: white;");
		}
		return self; 
	}*/
	return self
}