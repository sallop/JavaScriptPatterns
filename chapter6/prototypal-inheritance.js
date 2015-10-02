function object(o){
	function F(){}
	F.prototype = o;
	return new F();
}

function Person(){
	this.name = "Adam";
}

Person.prototype.getName = function(){
	return this.name;
};

var papa = new Person();
var kid = object(papa);

console.log(kid.getName());

kid = object(Person.prototype);
console.log(typeof kid.getName);
console.log(typeof kid.name);

child = Object.create(papa, {
	age: { value: 2 }
});

//child.prototype.getName = function(){
//	return this.name;
//}
// Cannot set getName of undefined

child.getName = function(){
	return this.name + ":" + this.age;
}

console.log(child.hasOwnProperty("age")); // true
console.log(child.getName()); // true
