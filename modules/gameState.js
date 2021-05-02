class GameState {
	constructor() {
		this.now = Date.now();
		this.canvas = document.querySelector("canvas");
		this.width = 600;
		this.height = window.innerHeight;
		this.ctx = this.canvas.getContext("2d");
		this.canvas.height = this.height;
		this.canvas.width = this.width;
	} 

	
}

export default GameState;