function $(selector)
{
	var self = {};
	self.selector = selector;
	self.element = document.querySelector(self.selector);

	self.html = function()
	{
		//als er .html() achter de functie staat dan returned dedze functie
		//de variable in html markup in de console log
		return self.element;
	}
	self.attr = function(name,value)
	{
		if(!value) return self.element.getAttribute(name)

		self.element.setAttribute(name,value);
		return self;
	}

	self.on = function(type, callback)
	{
		self.element['on' + type] = callback;
		return self;
	}

	self.height = function()
	{
		return self.element.offsetWidth;	
	}

	self.css = function(name, value)
	{
		if (!value) self.element.setAttribute("style", "color:red; border: 1px solid blue;");
		
		self.element.setAttribute(name, value);
		return self;
	}

	return self;
}	
