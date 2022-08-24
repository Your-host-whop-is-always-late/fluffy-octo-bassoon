canvas=document.getElementById("myCanvas");
ctx=.getContext("2d")

greencar_width = 75;
greencar_hieght = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	background_imagetag=new Image();
	background_imagetag.onload = uploadBackground;
	background_imagetag.src = background_image;


	ackground_imagetag=new Image();
	background_imagetag.onload = uploadgreencar;
	background_imagetag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawimage(background_imagetag, 0, canvas.width, canvas.hieght);
}

function uploadgreencar() {
	ctx.drawimage(greencar_imagetag, greencar_x,greencar_y, canvas.width, canvas.hieght);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
