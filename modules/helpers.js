function clamp(v, min, max) {
	if(v < min) {
		return min
	}else if(v > max) {
		return max
	}else {
		return v;
	}
}

function randomMinMax(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function randomMinMaxDec(min, max) {
	return Math.random() * (max - min) + min;
}

export {clamp, randomMinMax, randomMinMaxDec};