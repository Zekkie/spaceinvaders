import {clamp} from "./helpers.js";

class Player {
	constructor() {
		this.leftKeyDown = false;
		this.rightKeyDown = false;
		this.spaceKeyDown = false;
		this.projectiles = [];
		this.attackCooldown = 300;
		this.keyDownHandler = window.addEventListener("keydown", this.keyDown.bind(this));
		this.keyUpHandler = window.addEventListener("keyup", this.keyUp.bind(this));
		this.width = 20;
		this.height = 20;
		this.x = Math.floor(600 / 2 - 10);
		this.y = window.innerHeight - 80;
		this.moveSpeed = 0.4;
		this.projectileSpeed = 0.5;
		this.shotTime = 0;
	}

	

	shoot() {

	
			this.projectiles.push({
				x: clamp(this.x + this.width / 2, 10, window.innerWidth - 10),
				y: this.y
			});

			this.shotTime = this.cooldown;
		

		

	}

	updateProjectiles(dt, ctx, enemies) {
		
	
				

			for(let i = 0; i < this.projectiles.length; i++) {
				const y = Math.floor(this.projectiles[i].y -= (dt * this.projectileSpeed));
				ctx.fillStyle = "cyan";
				ctx.fillRect(this.projectiles[i].x, y, 1, 10);

				
				 
				if(this.projectiles[i].y < 10) {
					this.projectiles.splice(i,1)
				}


					for(let j = 0; j < enemies.length; j++) {

						if(this.projectiles[i].x >= enemies[j].x && this.projectiles[i].x <= enemies[j].x + enemies[j].width && this.projectiles[i].y <= enemies[j].y + enemies[j].height) {
							enemies[j].hit();
							enemies.splice(j,1);
							this.projectiles.splice(i,1);
							break;
						}else if(this.projectiles[i].y < 100) {
							this.projectiles.splice(i,1);
							break;
						}
					
					}

				

				

				

			}
		

		
	}

	keyDown(e) {


		const {keyCode} = e;

		if(keyCode === 37) {
			this.leftKeyDown = true;
		}
		if(keyCode === 39) {
			this.rightKeyDown = true;
		}
		if(keyCode === 32) {
			this.spaceKeyDown = true;
		}
	}

	keyUp(e) {
		const {keyCode} = e;

		if(keyCode === 37) {
			this.leftKeyDown = false;
		}
		if(keyCode === 39) {
			this.rightKeyDown = false;
		}
		if(keyCode === 32) {
			this.spaceKeyDown = false;
		}
	}

	update(dt,ctx, enemies) {

		if(this.leftKeyDown) {
			this.x -= Math.floor(this.moveSpeed * dt);
		}
		if(this.rightKeyDown) {
			this.x += Math.floor(this.moveSpeed * dt);
		}
		if(this.spaceKeyDown) {
			if(this.shotTime <= 0) {
				this.shoot();
				this.shotTime = this.attackCooldown;
			}
			
		}

		this.x = clamp(this.x, 0, 600 - this.width);

		this.updateProjectiles(dt, ctx, enemies);

		this.shotTime -= dt;

		ctx.fillStyle = "white"
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

}

export default Player;