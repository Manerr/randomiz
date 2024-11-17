
try{
	module.exports = { randFloor,randInt,choice,shuffle,pick,pickPop };
}
catch(e){
	randomiz = { randFloor,randInt,choice,shuffle,pick,pickPop };
}


function missingArg(a,b){

	return !( a != null && b != null );

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

function randBytes(n){

	let output = [];
	for (var i = 0; i < n; i++) {
		output.push( randInt(0,255) );
	}

	return output;

}

function randBits(n){

	return randomBytes(n).map(function(x){if(x > 127){return 1}return 0})

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
	return choice(l,1);

}

function pickPop(l){
	if( typeof l == "string" ){ return pick(l) }
	return l.splice( randInt(0,l.length - 1) ,1);	

}

