// const canvas = document.querySelector("canvas");
// const stars = document.querySelector("#stars");

// const ctx = canvas.getContext("2d");


// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// let leftkeyUp = false;
// let rightkeyUp = false;
// let spacekeyUp = false;


// let pos = Math.floor(canvas.width / 2);
// let posProjectile = 10;

// ctx.fillRect(pos, 10, 20, 20)

// let now = Date.now();

// const projectiles = [];

// let cooldown = 0.2;

// let playerCooldown = 0;

// let lastDelta = 0;

// function shoot(pos) {
// 	projectiles.push({
// 		x: pos + 10,
// 		y: canvas.height - 40,
// 	});

// }

// const starsArray = [];

// function randomX() {
// 	return Math.floor(Math.random() * window.innerWidth);
// }

// function randomY() {
// 	return Math.floor(Math.random() * window.innerHeight);
// }

// function randomMinMax(min, max) {
// 	return Math.floor(Math.random() * (max - min) + min);
// }

// function randomMinMaxFloat(min, max) {
// 	return Math.random() * (max - min) + min;
// }

// function createStars() {
// 	for(let i = 0; i < 50; i++) {
// 		starsArray.push({
// 			x: randomX(),
// 			y: randomY(),
// 			speed: randomMinMax(1000, 3000),
// 			length: randomMinMax(20,70),
// 			width: randomMinMaxFloat(0.1,0.3),
// 			opacity: randomMinMaxFloat(0.01, 0.5)
// 		})
// 	}
// }



// function updateStars(dt) {
// 	for(let i = 0; i < starsArray.length; i++) {
// 		ctx.fillStyle = `rgba(255,255,255,${starsArray[i].opacity})`;
// 		ctx.shadowBlur = 20;
// 		ctx.shadowColor = "white";

// 		ctx.fillRect(starsArray[i].x, starsArray[i].y += dt * starsArray[i].speed, starsArray[i].width, starsArray[i].length);
// 		if(starsArray[i].y > canvas.height) {
// 			starsArray[i].y = -50;
// 		}
// 	}
// }

// createStars();

// function keydownEvent(e) {
// 	console.log("fff")
// 	const {keyCode} = e;



// 	if(keyCode === 37){
// 		console.log(e);
// 		leftkeyUp = true
// 	}if(keyCode === 39) {
// 		rightkeyUp = true;
// 	}
// 	if(keyCode === 32) {
// 		spacekeyUp = true;
// 	}
// }

// function clamp(v, min, max) {
// 	if(v < min) {
// 		return min;
// 	}else if(v > max) {
// 		return max;
// 	} else {
// 		return v;
// 	}
// }

// function keyupEvent(e) {
// 	const {keyCode} = e;
// 	console.log(keyCode);
// 	if(keyCode === 37){
// 		console.log("wtf");
// 		leftkeyUp = false;
// 	}if(keyCode === 39) {
// 		rightkeyUp = false;
// 	}
// 	if(keyCode === 32) {
// 		spacekeyUp = false;
// 	}
// }

// function updateEnemy() {
// 	ctx.fillStyle = "#ffffff"
// 	ctx.shadowBlur = 0;
// 	ctx.fillRect(100, 800, 50, 50);
// } 

// function updatePlayer(dt) {
	
	

// 	if(leftkeyUp && (pos > 10)) {
// 		pos -= Math.floor(dt * 600);
// 	}if(rightkeyUp && (pos < canvas.width - 30)) {
// 		pos += Math.floor(dt * 600);
// 	}if(spacekeyUp) {
// 		if(playerCooldown <= 0) {
// 			shoot(pos);
// 			playerCooldown = cooldown;
// 		}if(playerCooldown > 0) {
// 			playerCooldown -= dt;
// 		}
// 	}
	
	
// 	//pos = clamp(pos, 10, canvas.width - 30);
// 	ctx.shadowBlur = 0;
// 	ctx.fillStyle = "#ffffff"
// 	ctx.fillRect(pos, canvas.height - 40, 20, 20);
// }

// function updateProjectile(dt) {
	

// 	for(let i = 0; i < projectiles.length; i++) {
// 		ctx.fillStyle = "red"
		
// 		ctx.shadowBlur = 20;
// 		ctx.shadowColor = "red";
// 		ctx.fillRect(projectiles[i].x, projectiles[i].y -= Math.floor(dt * 800), 2, 20);
		
		

// 		if(projectiles[i].y <= 850 && projectiles[i].x > 100 && projectiles[i].x <= 150 || projectiles[i].y <= 100) {
// 			projectiles.splice(i,1);
// 		}
// 	}
	
// }

// window.addEventListener("keydown", keydownEvent);

// window.addEventListener("keyup", keyupEvent);

// document.addEventListener("visibilitychange", function() {
// 	if(!document.hidden) {
// 		now = Date.now();
// 		console.log("yeet");
// 	};
// });






// function loop() {
// 	ctx.clearRect(0,0,canvas.width,canvas.height);
// 	const nowTwo = Date.now();
// 	let delta = (nowTwo - now) / 1000;
// 	now = nowTwo;

// 	updateStars(delta);
// 	updateProjectile(delta);
// 	updatePlayer(delta);
	
// 	updateEnemy();
	
// 	requestAnimationFrame(loop);

// }

// requestAnimationFrame(loop);
