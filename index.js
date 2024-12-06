__r = Math.random;

function randBits(n){

	let s = "";let r;
	
	for (var i = 0; i < n; i++) {
		r = "0";
		if( __r() < .5){ r = "1" }
		s += r;
	}

	return s;

}

function randBool(w = .5){return __r() < w ;}

function randBytes(n){

	let output = new Array(n);
	for (var i = output.length - 1; i >= 0; i--) {
		output[i] = randInt(0,255);
	}
	return output;

}

function randFloat(a,b){

	if( a > b ){let c = a;a = b;b = c;}
	return a + (b - a) * __r();

}

function randID(n){
	let s = "123456789"[randInt(0,8)];
	for (var i = 0; i < n - 1; ++i) {
		s += "0123456789"[randInt(0,9)];
	}
	return s;
}

function randInt(a,b){

	if( a > b ){let c = a;a = b;b = c;}
	return Math.floor( a + ( (b + 1) - a) * __r());

}

function randSign(w = .5){
	if(__r() >= w ){return 1}return -1;
}

function randToken(n){

	let s = "";
	for (var i = 0; i < n; i++) {
		s += "-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[randInt(0,63)];
	}
	return s;

}

function shuffle(l){

	if( typeof l == "string" ){	l = l.split("") }

	let copy = l.map((n) => n);
	let len = l.length;
	let output = [];

	let i = 0;
	for(let i = 0; i < len;i++){

		output.push( copy.splice(randInt(0,copy.length - 1),1)[0] );

	}

	return output;

}

function choice(l,count){

	if( typeof l == "string" ){	l = l.split("") }
	return shuffle(l).slice(0,count);

}

function pick(l){

	if( typeof l == "string" ){	l = l.split("") }
	let i =	randInt(0,l.length - 1);
	return l.slice( i , i + 1)[0];

}

function pickPop(l){
	if( typeof l == "string" ){ return pick(l) }
	let i =	randInt(0,l.length - 1)
	return l.splice( i , i + 1)[0];	

}

function randEmoji() {
    return pick(["😀", "😂", "🥰", "😎", "🤔", "🙃", "😭", "😞", "🫠", "😍", "🤩", "🥳", "🤯"]);
}


// What a naming mistake I've done here...
randFloor = randFloat;




try{
	module.exports = { randBits,randBool,randBytes,randFloat,randFloor,randID,randInt,randSign,randToken,choice,pick,pickPop,shuffle, randEmoji};
}
catch(e){
	
}


