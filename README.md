# Colorfy
Colorfy is a Javascript Library which can change the CSS of your HTML 
elements. Every function is customizable to your liking and style and 
can be easily added to your projects

# Live Demo
You can view the live demo right here: [View the Live Demo](https://i300323.hera.fhict.nl/library/index.html)

# Tutorial
The folder <b>tutorial</b> includes a small tutorial of a how to code a Javascript Module Library. To use it, download 
the entire folder and its files. All the files necessary are included in the folder. All files have
comments included to explain usage of functions.

[View the Live Demo](https://i300323.hera.fhict.nl/library/tutorial/)


## Functions
The Colorfy Library includes the following functions:
*.html() 
*.on()
*.css()
*.changeBG()
*.randomcol()
*.hover()
*.contr()

All functions parameters can be customized to create your own custom colors except <b>.randomcol(), .on(),
.html() and .contr(). The Colorfy Library also includes comments which will explain how to the function.


## Getting Started

### Step 1
Download the ZIP file from this repository

### Step 2

Include the Javascript Library file and the CSS file in the <head> of your HTML file. Make sure to
also add the __<script> "onload"__ as shown below.
```
  <head>
		<title>Library</title>
		
		<!--Stylesheet-->
		<link rel="stylesheet" type="text/css" href="css/index.css">

		<!--Scripts-->
		<script src="js/library.js"></script>
		<script type="text/javascript">
			window.onload = function()
			{

			}
		</script>
```
The CSS file can be changed to your liking and does not intervene with the library script.


##How to Use

In order to use the functions in the Colorfy Library you have to include the function together with
the html element as shown below:
```
  <head>
		<script type="text/javascript">
			window.onload = function()
			{
				//Changes color of the selector every interval
				$('#box2').randomcol()
			}
		</script>
```
Here the HTML element is the ID box2 and the function is called .randomcol()


###Custom Parameters


##How to Install
