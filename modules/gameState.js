class GameState {
	constructor() {
		this.now = Date.now();
		this.canvas = document.querySelector("canvas");
		this.width = 600;
		this.height = window.innerHeight;
		this.ctx = this.canvas.getContext("2d");
		this.canvas.height = this.height;
		this.canvas.width = this.width;
		this.wave = 1;
		this.start = true;
		this.gameOver = false;
		this.gameOverTimer = 1500;
		this.blink = 0;
		this.blinkCooldown = 500;
	} 

	startUi(delta) {
		this.ctx.font = "30px test";
		const titleWidth = this.ctx.measureText("Block Invaders.");
		this.ctx.fillStyle = "White";
		this.ctx.fillText("Block Invaders.", 600 / 2 - titleWidth.width / 2, window.innerHeight / 2);

		if(this.blink <= 0) {
			this.ctx.font = "14px test";
			const enterWidth = this.ctx.measureText("Press enter to play.");
			this.ctx.fillStyle = "White";
			this.ctx.fillText("Press enter to play.", 600 / 2 - enterWidth.width / 2, (window.innerHeight / 2) + 40);
			if(this.blinkCooldown <= 0) {
				this.blink = 500;
				this.blinkCooldown = 500;
			}
			this.blinkCooldown -= delta;
		};

		
		this.blink -= delta;

		
	}

	gameOverUi(delta) {
		this.ctx.font = "30px test";
		const titleWidth = this.ctx.measureText("Game Over");
		this.ctx.fillStyle = "red";
		this.ctx.fillText("Game Over", 600 / 2 - titleWidth.width / 2, window.innerHeight / 2);

		if(this.blink <= 0) {
			this.ctx.font = "14px test";
			const enterWidth = this.ctx.measureText("Press enter to play again.");
			this.ctx.fillStyle = "White";
			this.ctx.fillText("Press enter to play again.", 600 / 2 - enterWidth.width / 2, (window.innerHeight / 2) + 40);
			if(this.blinkCooldown <= 0) {
				this.blink = 500;
				this.blinkCooldown = 500;
			}
			this.blinkCooldown -= delta;
		};

		
		this.blink -= delta;
	}
}

export default GameState;