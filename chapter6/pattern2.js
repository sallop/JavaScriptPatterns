#!/usr/bin/node
// 6.4 classical pattern 2

// Parent Constructor
function Parent(name){
	this.name = name || 'Adam';
}

// add function to prototype
Parent.prototype.say = function(){
	return this.name;
};

// empty child constructor
function Child(name){
	Parent.apply(this, arguments);
}


var kid = new Child("Patrick");
console.log( kid.name ); // "Patrick" 
console.log( typeof kid.say); // undefined" 

