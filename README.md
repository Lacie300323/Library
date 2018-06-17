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
* .html() 
* .on()
* .css()
* .changeBG()
* .randomcol()
* .hover()
* .contr()

All functions parameters can be customized to create your own custom colors except <b>.randomcol(), .on(),
.html() and .contr()</b>. The Colorfy Library also includes comments which will explain how to the function.


## Getting Started

### Step 1
Download the ZIP file of this repository. You can use the default files that come with the ZIP file or just add the
__library.js__ to your js folder. The CSS and HTML are not necessary, but there are changes you need to make to your
own HTML file. If youre using the default files, you can skip the steps ahead an continue to the __"How to Use" section__.

### Step 2

Include the Javascript Library file and the CSS file (in case used) in the <head> of your HTML file. Make sure to
also add the __<script> "onload"__ to your html as shown below.
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
Here the HTML element is the element with the ID __box2__ and the function is called __.randomcol()__. The downloaded
ZIP and files will also include example code lines in case needed.


###Custom Parameters

In case the "How to Use" did not explain the custom parameters part enough, this part will explain it just in case.
To change certain parameters to your own liking, you can do the following. Let's take the __.css()__ function as an example:

If you want to change the color and height of your div, you can change the parameters 
of the .css() function.

Example:
```
$('#box3').css('style','color: green; height: 40vh;')
				
```
If the parameters of the function is empty, the funtion will fall back to default settings given by
the css file or other style changes you included.

