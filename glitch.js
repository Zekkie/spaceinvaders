const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const img = new Image();
img.src = './assets/sqr.png'


const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

let pos = 20;

window.addEventListener("keydown", function(e){
	const {keyCode} = e;
	
	if(keyCode === 37){
		pos -= 5
	}if(keyCode === 39){
		pos += 5
	}
});


let glitchtimer = 0;

const glitchCooldown = 100;


let timeNow = Date.now();

function loop() {
	
	ctx.clearRect(0,0,width,height);


	const loopTime = Date.now();

	const delta = (loopTime - timeNow) ;

	timeNow = loopTime;

	console.log(delta);

	
	

	if(glitchtimer <= 0) {
		const rangeX = randomInt(-10, 20);
		const rangeY = randomInt(10, 30);
		const rangeW = randomInt(5,19);
		const rangeH = randomInt(5,30);

		const playerH = randomInt(5,20);
		const playerW = randomInt(5,20)


		ctx.fillStyle = "cyan";
		ctx.fillRect(rangeX+pos-2, rangeY-2, rangeW, rangeH);
		ctx.fillStyle = "red";
		ctx.fillRect(rangeX+pos+2, rangeY+2, rangeW, rangeH);
		ctx.fillStyle = "white";
		ctx.fillRect(rangeX+pos, rangeY, rangeW, rangeH);
		

		ctx.fillRect(pos,20, playerH, playerW);

		glitchtimer = randomInt(50, 1000);
	}else {
		ctx.fillStyle = "white";
		ctx.fillRect(pos,20,20,20);
	}

	

	if(glitchtimer > 0) {
		glitchtimer -= delta;
		console.log(glitchtimer);
	}
	
	
	requestAnimationFrame(loop)
}

requestAnimationFrame(loop)



