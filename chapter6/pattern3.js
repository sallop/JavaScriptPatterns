#!/usr/bin/node

// Parent constructor
function Parent(name){
	this.name = name || 'Adam';
}
// add a function at prototype
Parent.prototype.say = function(){
	return this.name;
};
// child constructor
function Child(name){
	Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child("Patrick");
console.log( kid.name ); // "Patrick"
console.log( kid.say() ); // "Patrick"
delete kid.name;
console.log( kid.say() ); // "Adam"
