let secureRandom;
let _arry = new Uint32Array(1);

// Browser or node js supportting window.crypto 
if (crypto !== undefined) {
	
	secureRandom = function(){
		return crypto.getRandomValues(_arry)[0] / 0xffffffff;
	}
	
}
// Unsafe environment
else{
	console.warn("Seems that your browser/nodeJS environment doesn't support the crypto module, which is needed for security.Try to update.");
	secureRandom = Math.random;
}




__r = secureRandom;


function randArray(n,min,max,float=false){

	let r__intern = randInt;

	if(float){	r__intern = randFloat;	}

	let a = new Array(n);
	for (var i = 0; i < a.length; i++) {
		a[i] = r__intern(min,max);
	}

}


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

	let output = new Uint8Array(n);
	for (var i = output.length - 1; i >= 0; i--) {
		output[i] = randInt(0,255);
	}
	return output;

}

function randMat(rows, cols, min = 0, max = 255) {

	let l = new Array(rows);
	for (var x = 0; x < rows; x++) {
		l[x] = new Array(cols);
		for (var y = 0; y < cols; y++) {
			l[x][y] = randInt(min,max);
		}
	}
	return l;

}

function randMultiple(n,mx){
	return n * Math.ceil( mx  * __r() );
}


function randFloat(a,b){

	if( !b ){ b = a ; a = 0; }
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

	if( !b ){ b = a ; a = 0; }
	if( a > b ){let c = a;a = b;b = c;}
	return Math.floor( a + ( (b + 1) - a) * __r());

}

function randSign(w = .5){
	if(__r() >= w ){return 1}return -1;
}

function randToken(n,type = "all"){

	let s = "";
	let og = "-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	if( type == "ABC"){
		og = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	else if( type == "abc"){
		og = "abcdefghijklmnopqrstuvwxyz";
	}
	else if(type == "ABC123"){
		og = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	}
	else if(type == "abc123"){
		og = "abcdefghijklmnopqrstuvwxyz0123456789";
	}

	length = og.length();

	for (var i = 0; i < n; i++) {
		s += og[randInt(0,length)];
	}
	return s;

}

function shuffle(l){

	if( typeof l == "string" ){ 
		l = l.split("") 
		isstring = true;
	}

	let copy = l.map((n) => n);
	let len = l.length;
	let output = new Array(len);

	for(let i = 0; i < len;i++){
		output[i] = copy.splice(randInt(0,copy.length - 1),1)[0];
	}

	if(!isstring){return output;}
	l = "";
	for (var i = output.length - 1; i >= 0; i--) {
		l += output[i]
	}
	return l;


}

function choice(l,count){

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

function randSlice(l,count){

	let len = l.length;
	if(count > len || !len){return}
	let i;
	do{
		i =	Math.floor( (count + 1) * __r() );
	}
	while (i + count > len);
	return l.slice( i , i + count);

}

function randEmoji() {
	return pick(["😀", "😂", "🥰", "😎", "🤔", "🙃", "😭", "😞", "🫠", "😍", "🤩", "🥳", "🤯"]);
}




try{
	module.exports = { randArray,randBits,randBool,randBytes,randMat,randMultiple,randFloat,randID,randInt,randSign,randToken,choice,pick,pickPop,shuffle,randSlice,randEmoji};
}
catch(e){
}

