#!/usr/bin/node
// 6.3 classical pattern 5
// p132 Holly Grails

// Parent Constructor
function Parent(name){
	this.name = name || 'Adam';
}

// add function to prototype
Parent.prototype.say = function(){
	return this.name;
};

// empty child constructor
function Child(name){};

// function inherit(C, P){
// 	// 6.7.2 p132
// 	var F = function(){};
// 	F.prototype = P.prototype;
// 	C.prototype = new F();
// 	C.uber = P.prototype;
// 	C.prototype.constructor = C;
// }

// 6.7.2 p132 holly grail
var inherit = (function (){
	var F = function(){}; // proxy constructor
	return function (C, P){ // closure
		F.prototype = P.prototype;
		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;
	}
}());

// make a magick
inherit(Child, Parent);


var kid = new Child();
console.log( kid.say()); // undefined

console.log( kid.name ); // undefined 
kid.name = "Patrick";
console.log( kid.name ); // "Patrick"
console.log( kid.say()); // "Patrick"

delete kid.name;
console.log( kid.say()); // undefined

console.log( kid.constructor.name ); // "Parent"
console.log( kid.constructor === Parent ); // false 
