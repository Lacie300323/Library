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

	return self
}