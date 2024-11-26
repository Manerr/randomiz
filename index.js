__r = Math.random;


function missingArg(a,b){

	return !( a != null && b != null );

}

function randBits(n){

	let s = "";let r;
	
	for (var i = 0; i < n; i++) {
		if( __r() < .5){ r = "1" }
		else{ r = "0" }
		s = s.concat(r);
	}

	return s;

}

function randBool(w = .5){return __r() < w ;}

function randBytes(n){

	let output = [];
	for (var i = 0; i < n; i++) {
		output.push( randInt(0,255) );
	}

	return output;

}

function randFloat(a,b){

	if(missingArg(a,b)){ return }
	if( a > b ){let c = a;a = b;b = c;}
	
	return a + (b - a) * __r();

}

function randID(n){
	return randInt( 10 ** (n - 1)  , (10 ** n) - 1);
}

function randInt(a,b){

	if(missingArg(a,b)){ return }
	if( a > b ){let c = a;a = b;b = c;}

	return Math.floor( a + ( (b + 1) - a) * __r());

}

function randSign(w = .5){
	if(__r() >= w ){return 1}return -1;
}

function randToken(n){

	let l = "";

	for (var i = 0; i < n; i++) {

		char = pick( [randInt(0x30,0x39) , randInt(0x40,0x5a) , randInt(0x61,0x7a) ]) ;

		l += String.fromCharCode( char );
	}

	return l;

}

function shuffle(l){

	if( typeof l == "string" ){	l = l.split("") }

	let copy = l.map((n)=>n);
	let len = l.length;
	let output = [];

	let i = 0;
	while( i < len ){

		output.push( copy.splice(randInt(0,copy.length - 1),1)[0] );
		i++;

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

