function $(selector)
{
	var self = {};  //This wil work the same as "this"
	var allchar = "0123456789ABCDEF"; //Color code numbers and letters
	self.selector = selector; //Anything passed into the $("") in the html script, will be taken as the selector
	self.element = document.querySelector(self.selector); //In order to use the functions, I need to get the first element in the document
	//in between the $('') in order to make a fuction work. To do that I use a querySelector


/*
	//Using this to test and see if the libary.js is working
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
		
		//Sets Attribute of the style to the selector
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

	//Changes background-color of the selector by intervals
	self.randomcol = function ()
	{
		var rgb = ['255', '0', '0']; //Default rbg property list consisting of 3 numbers between 0 and 255

		//Changes color every interval
		setInterval(function()
		{

		rgb[0] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color red
		rgb[1] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color green
		rgb[2] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color blue

		//Stores the random generated rgb color code into bgcol variable by using the ['255', '0', '0'] given above.
		var bgcol = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
		//return bgcol; <--- use to check if the rgb code generating works

		//Sets the rgb value from bgcol into the css style background-color
		//And changes the bg color every second (1000), change the 1000 to make it slower or faster.
		self.element.setAttribute("style", "background-color:" +bgcol);
		}, 1000);
		return self
	}

	//Changes color when hovered over.
	self.hover = function(name, value)
	{
		if (!value) self.element.setAttribute("style", "color: green;");
		self.element.setAttribute(name, value);
		return self;
	
	}

	//Changees Contrast when background is lighther or darker
	//This code uses a part of the randomcol function above 
	self.contr = function(name, value)
	{
		var rgb = ['255', '0', '0']; //Default rbg property list

		//return rgb[0]; <--- use to check if list items work

		setInterval(function()
		{

		//Stores the random generated rgb color code into bgcol variable by using the ['255', '0', '0'] given above.
		var bgcol = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
		//return bgcol; <--- use to check if the rgb code generating works

		//This is an algorythm I found on 
		//http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx 
		//To calculate the brightness of a color
		var contrast = Math.floor(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587)+(parseInt(rgb[0]) * 114))/1000);
		//return contrast; //<--- use to check if getting the contrast value works
		

		//Sets the rgb value from bgcol into the css style background-color
		//And changes the bg color every second (1000), change the 1000 to make it slower or faster.
		self.element.setAttribute("style", "background-color:" +bgcol);

		//If the color's brightness is above 125 (A bright color according to the algorythm) it will change the text color to black
		//If the color's brightness is below 125 (A dark color according to the algorythm) it will change the text color to white
		//The bgcol here is to change the background color in intervals
		if (contrast > 125)
		{
			self.element.setAttribute("style", "color: black; background-color:" +bgcol);
		}
		else
		{
			self.element.setAttribute("style", "color: white; background-color:" +bgcol);
		}
		
		rgb[0] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color red
		rgb[1] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color green
		rgb[2] = Math.floor(Math.random() * 255); //Returns a random number between 0 and 255 for the color blue
		

		}, 1000);
		return self;
	}
	return self
}