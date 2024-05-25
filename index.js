/*                                   ✨✨***-:Key-Words:-***✨✨                                       */

// befor today what we used-to use

let name1 = "Geetesh";

// now ES6 introduced a new keyword

const name2 = "Geetesh";

//when we assigned by let we can reassign a value like

name1 = "Ram";
console.log(name1);

// but when we assign value to a variable using const keyword we can't reassign it -

//name2 = "ram";
//console.log(name2);
//"Uncomment to check"☝️
//in above execution we can see typo

/************************************************/

// Now  we have one more keyword
// general declairetion of function
function generalFunc() {
	console.log("I am ES5 Function");
}
generalFunc();

// but in ES6 we declair a function like that  👇👇

let ES6Func = () => {
	console.log(
		"I am Advance Function & This is Advance Way To Write A Function"
	);
};

ES6Func();

// but there is a loopwhole in arrow function that arrow function do not have it's own this keyword

// let ES6_Fun = (n, a) => {
// 	this.name = n;
// 	this.age = a;
// }

// let obj = new ES6_Fun("Geetesh", "19");
// console.log(obj);

// uncomment above peace of code from 44-50 to check ☝️☝️

// if you have less or only one parameter to perform task than () & {} are optional
// example

let double = (x) => x * 2; // it returns value
console.log(double(14));

/***************************************************************/

// for of loop

const car = ["BMW", "Mercedes-Benz", "Land Rover", "Bantley"];

for (x of car) {
	console.log(x);
}

const myFavs = ["Acharya Prashant", "Lord Krishna", "Arjun"];

for (i of myFavs) {
	console.log(i, ", Your are really-really Greate");
}

/*                                 ✨✨***-:Destucring:-***✨✨                                        */

// Destructuring helps programmers to get spacific data from availabale

let obj = {};

obj.name = "Geetesh";
obj.age = 19;

console.log(obj);

// assigning value one by one or giving one by one

// another way

const name = "Ram";

const age = 19;

const city = "Indore";

obj.name = name;
obj.age = age;
obj.city = city;

console.log(obj);

// one more way to create an object

function createObj(n, a, c) {
	this.name = n;
	this.age = a;
	this.city = c;
}

let person1 = new createObj("Geetesh", 19, "Indore");
let person2 = new createObj("Sonu", 14, "Jabalpur");
let person3 = new createObj("Monu", 6, "Jabalpur");

console.log(person1);
console.log(person2);
console.log(person3);

// we will see later about destructuring

/*                                     ✨✨**-:Classes:-**✨✨                                        */

class showObj {
	constructor(n, a, c) {
		this.name = n;
		this.age = a;
		this.city = c;
	}

	showName = () => {
		let name = this.name;
		console.log(name);
	};
}

const person = new showObj("Geetesh", 19, "Indore");
console.log(person);
person.showName();

/*                                     ✨✨**-:LLD:-**✨✨                                        */

class Vehicle {
	constructor(type, regNumber) {
		this._type = type;
		this._regNumber = regNumber;
	}

	get type() {
		return this._type;
	}

	get regNumber() {
		return this._regNumber;
	}

	set type(value) {
		this._type = value;
	}

	set regNumber(value) {
		this._regNumber = value;
	}
}

const v1 = new Vehicle("Car", "mp05");

// but there is one catch here
// if we try to change the value of any key

v1.regNumber = "MH44";
console.log(v1);

// in the above case we can see it is not a good design aproach that we can change the value directly
// so to overcome these problems we have something that is called getter and setter in class
// now we have made changes to class ☝️☝️
