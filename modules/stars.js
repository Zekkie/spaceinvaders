import {randomMinMax, randomMinMaxDec} from "./helpers.js";

class Star {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = randomMinMaxDec(0.1,0.5);
		this.speed = randomMinMaxDec(0.2,1.5);
		this.opacity = randomMinMaxDec(0.2,0.5);
	};

	update(dt, ctx) {
		ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
		ctx.fillRect(this.x, this.y += dt * this.speed, this.width, 20 * this.speed );
		if(this. y > window.innerHeight) {
			this.y = 0;
		}
	};
};

const starsArray = [];

function generate() {
	for(let i = 0; i < 75; i++) {
		starsArray.push(new Star(randomMinMax(0, 600),randomMinMax(0, window.innerHeight)));

	};
};

generate()

function starUpdater(dt, ctx, array) {
	for(let i = 0; i < array.length; i++) {
		array[i].update(dt, ctx);
	};
};


export {starsArray, starUpdater};
