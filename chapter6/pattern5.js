#!/usr/bin/node
// 6.3 classical pattern 5
// fig 6-8

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

// make a magick
inherit(Child, Parent);

function inherit(C, P){
	// 6.7 p130
	var F = function(){};
	F.prototype = P.prototype;
	C.prototype = new F();
}

var kid = new Child();
console.log( kid.say()); // undefined

console.log( kid.name ); // undefined 
kid.name = "Patrick";
console.log( kid.name ); // "Patrick"
console.log( kid.say()); // "Patrick"

delete kid.name;
console.log( kid.say()); // undefined

console.log( kid.constructor.name ); // "Parent"
console.log( kid.constructor === Parent ); // true
