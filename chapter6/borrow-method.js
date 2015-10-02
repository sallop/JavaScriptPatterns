function f(){
	var args = [].slice.call(arguments, 1, 3);
	return args;
}

var list = f(1, 2, 3, 4, 5, 6);
console.log( list );


var one = {
	name: "object",
	say: function (greet) {
		return greet + ", " + this.name;
	}
};

var two = {
	name: "another object"
};

console.log( one.say.apply(two, ['hello']) ); // "hello, another object

var say = one.say; // "this" will refer to global object
say('hoho'); // "hoho, undefined"

// to path as callback
var yetanother = {
	name: "Yet another object",
	method: function ( callback ){
		return callback('Hola');
	}
};

yetanother.method( one.say ); // "Holla, undefined"

function bind(o, m){
	// o: object, m: method
	return function (){
		return m.apply(o, [].slice.call(arguments));
	};
}

var twosay = bind(two, one.say); // global function, but it refer to two object which is passed by bind()
console.log( twosay('yo') ); // "yo, another object"

