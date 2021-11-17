
import Player from "./modules/player.js";
import GameState from "./modules/gameState.js";
import enemyController from "./modules/enemies.js";
import {starsArray, starUpdater} from "./modules/stars.js";

const gameState = new GameState();
const player = new Player();



enemyController.spawn();

console.log(enemyController);


document.addEventListener("visibilitychange", function() {
	if(!document.hidden) {
		gameState.now = Date.now();
	};
});

function loop() {
	gameState.ctx.clearRect(0,0, gameState.width, gameState.height);
	const loopTime = Date.now();

	const delta = loopTime - gameState.now;

	starUpdater(delta,gameState.ctx,starsArray);
	gameState.now = loopTime;

	if(!gameState.start && !gameState.gameOver) {
		
		enemyController.update(delta, gameState.ctx, player);
		player.update(delta, gameState.ctx, enemyController.enemyArray);
		player.updateHealth(gameState);

		if(enemyController.enemyArray < 1) {
			if(enemyController.spawnTimer <= 0) {
				enemyController.spawn();
				enemyController.spawnTimer = 5000;
			}

			enemyController.spawnTimer -= delta;
		}

	}else if(gameState.start) {
		gameState.startUi(delta)
		window.onkeydown = function(e) {
			const {keyCode} = e;

			if(keyCode === 13) {
				gameState.start = false;
			}
		}
	}else if(gameState.gameOver) {

		if(gameState.gameOverTimer <= 0) {
			gameState.gameOverUi(delta)
			window.onkeydown = function(e) {
			const {keyCode} = e;
			if(keyCode === 13) {
					enemyController.enemyArray = [];
					enemyController.projectiles = [];
					enemyController.spawn();
					player.reset()
					gameState.gameOver = false;
					gameState.gameOverTimer = 1500;
				}
			}
		}else{
			enemyController.update(delta, gameState.ctx, player);
			player.update(delta, gameState.ctx, enemyController.enemyArray);
			player.updateHealth(gameState);
			gameState.gameOverTimer -= delta;

		}

		
	}
	

	requestAnimationFrame(loop);


}

requestAnimationFrame(loop);