import {randomMinMax,clamp} from "./helpers.js";;

class Enemy {
	constructor(x, y, position, controller) {
		this.x = x;
		this.y = y;
		this.width = 30;
		this.height = 30;
		this.shotTime = randomMinMax(1000, 5000);
		this.projectiles = [];
		this.position = position;
		this.moveTimer = 2000;
		this.moveRight = true;
		this.moveDown = false;
		this.controller = controller;
	}

	update(dt,ctx) {
		if(this.shotTime <= 0) {
			this.shoot();
			this.shotTime = randomMinMax(2000, 7000);
		};

		this.shotTime -= dt;
		this.moveTimer -= dt;
		this.moveDownTimer -= dt;

		this.move();

		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	

	move() {
		if(this.moveTimer <= 0) {

			if(!this.moveDown) {

				if( this.x + (10 - this.position) * 40 < 600 && this.moveRight) {
					this.x += 10;
				}else if(this.x < 10 + this.position * 40) {
					this.moveRight = true;
				}else if(!this.moveRight) {
					this.x -= 10;
				}else {
					this.moveRight = false;
					this.moveDown = true;
				}

				this.moveTimer = 1000;
			}else{
				this.y += 40;
				this.moveDown = false;
			}

			
		}
	}

	shoot() {
		this.controller.projectiles.push({
			x: this.x + this.width / 2,
			y: this.y
		});
	};


	hit() {
		console.log("im hit!")
	}
}


class EnemyController {
	constructor() {
		this.projectiles = [];
		this.enemyArray = [];
		this.spawnTimer = 5000;
	}

	spawn() {
		for(let i = 0; i < 4; i++) {
			for(let j = 0; j < 10; j++) {
				this.enemyArray.push(new Enemy(j * 40 + ((600 / 2) - (390 / 2) ) ,100 + (40 * i),j, this))
			}
		}
	}

	updateProjectiles(dt, ctx, player) {
		for(let i = 0; i < this.projectiles.length; i++) {
			ctx.fillStyle = "red";
			ctx.fillRect(this.projectiles[i].x, this.projectiles[i].y += 5, 1, 10);

			
		};

		for(let i = 0; i < this.projectiles.length; i++) {
				if(this.projectiles[i].x >= player.x && this.projectiles[i].x <= player.x + player.width && this.projectiles[i].y > player.y && this.projectiles[i].y <= player.y + player.height) {
					player.hit();
					this.projectiles.splice(i,1);
					break;
				}else if(this.projectiles[i].y > window.innerHeight) {
					this.projectiles.splice(i,1);
					break;
				}
		}
		
	};

	update(dt, ctx, player) {
		this.updateProjectiles(dt, ctx, player);
		for(let i = 0; i < this.enemyArray.length; i++) {
			this.enemyArray[i].update(dt, ctx);
		}
	}

}

const enemyController = new EnemyController();

export default enemyController;