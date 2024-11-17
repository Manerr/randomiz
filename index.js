
try{
	module.exports = { randBits,randBytes,randFloor,randInt,randToken,choice,shuffle,pick,pickPop };
}
catch(e){
	randomiz = { randBits,randBytes,randFloor,randInt,randToken,choice,shuffle,pick,pickPop };
}


function missingArg(a,b){

	return !( a != null && b != null );

}

function randBits(n){

	return randBytes(n).map(function(x){if(x > 127){return 1}return 0})

}

function randBytes(n){

	let output = [];
	for (var i = 0; i < n; i++) {
		output.push( randInt(0,255) );
	}

	return output;

}


function randFloor(a,b){

	if(missingArg(a,b)){ return }
	if( a > b ){let c = a;a = b;b = c;}
	
	return a + (b - a) * Math.random();

}

function randInt(a,b){

	if(missingArg(a,b)){ return }
	if( a > b ){let c = a;a = b;b = c;}
	
	return Math.floor(a + ( (b + 1) - a) * Math.random());

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

	let copy = l.flat();
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


