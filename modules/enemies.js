import {randomMinMax,clamp} from "./helpers.js";;

class Enemy {
	constructor(x, y, position) {
		this.x = x;
		this.y = y;
		this.width = 30;
		this.height = 30;
		this.shotTime = randomMinMax(1000, 5000);
		this.projectiles = [];
		this.position = position;
		this.moveTimer = 2000;
		this.moveRight = true;
	}

	update(dt,ctx) {
		this.updateProjectiles(dt, ctx)

		if(this.shotTime <= 0) {
			this.shoot();
			this.shotTime = randomMinMax(2000, 7000);
		};

		this.shotTime -= dt;
		this.moveTimer -= dt;
		

		if(this.moveTimer <= 0) {
			if( this.x + (10 - this.position) * 40 < 600 && this.moveRight) {
			this.x += 20;
			
			}else if(this.x < 10 + this.position * 40) {
				this.moveRight = true;
			}else if(!this.moveRight) {
				this.x -= 20;
			}else {
				this.moveRight = false;
			}

			this.moveTimer = 2000;
		}

		



		



		ctx.fillStyle = "green";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	updateProjectiles(dt, ctx) {
		for(let i = 0; i < this.projectiles.length; i++) {
			ctx.fillStyle = "red";
			ctx.fillRect(this.projectiles[i].x, this.projectiles[i].y += 5, 1, 10)
		};
		
	};

	shoot() {
		this.projectiles.push({
			x: this.x + this.width / 2,
			y: this.y
		});
	};


	hit() {
		console.log("im hit!")
	}
}


export default Enemy;