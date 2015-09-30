#!/usr/bin/node
// 6.3 classical pattern 1

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
	C.prototype = new P();
}

var kid = new Child();
console.log( kid.say()); // Adam

kid.name = "Patrick";
console.log( kid.say()); // "Patrick"

delete kid.name;
console.log( kid.say()); // "Adam"
