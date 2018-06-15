function $(selector)
{
	var self = {};
	self.selector = selector;
	self.element = document.querySelector(self.selector);

	self.html = function()
	{
		// If.html()is placed behind a function, in this case a console log
		// it will put the selected item in html markup
		return self.element;
	}

	//Changes the attribute of the selected item and returns it
	self.attr = function(name,value)
	{
		if(!value) return self.element.getAttribute(name)

		self.element.setAttribute(name,value);
		return self;
	}

	//Returns properties of a"on" event handler
	self.on = function(type, callback)
	{
		self.element['on' + type] = callback;
		return self;
	}

	//Returns the width of the selected item.
	self.width = function()
	{
		return self.element.offsetWidth;	
	}

	//Changes the css of the selected item
	self.css = function(name, value)
	{
		if (!value) self.element.setAttribute("style", "color:red; border: 1px solid blue;");
		
		self.element.setAttribute(name, value);
		return self;
	}

	return self;
}	
