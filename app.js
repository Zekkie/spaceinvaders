import Player from "./modules/player.js";
import GameState from "./modules/gameState.js";
import Enemy from "./modules/enemies.js";

const gameState = new GameState();
const player = new Player();

const enemies = [];

for(let i = 0; i < 4; i++) {
		for(let j = 0; j < 10; j++) {
			enemies.push(new Enemy(j * 40 + ((600 / 2) - (390 / 2) ) ,100 + (40 * i),j))
		}
}





function loop() {
	gameState.ctx.clearRect(0,0, gameState.width, gameState.height);
	const loopTime = Date.now();

	const delta = loopTime - gameState.now;

	gameState.now = loopTime;

	


	
	for(let i = 0; i < enemies.length; i++) {
		enemies[i].update(delta, gameState.ctx, enemies)
	}

	player.update(delta, gameState.ctx, enemies);

	requestAnimationFrame(loop);


}

requestAnimationFrame(loop);