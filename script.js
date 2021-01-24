// DOG INFO

// 1.
// Create an empty object called dog

// 2.
// Add name, legs, color, age and bark properties for the dog object.

// 3.
// The bark property is a method which return woof woof

// 4.
// Print the dog object on the console

// 5.
// Set new properties the dog object: breed, getDogInfo

// 6.
// The getDogInfo property is a method which return Name and Age of the dog in a string.

// 7.
// Create a method called calcAge, returning humanAge as a property of this object.
// Remember our first day Project; animal years.
// Calculate humanAge according to the dog age. The formula looks like:

// if it is 2 years old or more,
// humanAge = (2 * 10.5) + (dogAge-2)*4;
// if it is 1 years old, returns only 10,5 for humanAge.

// 8.
// Change getDogInfo return to this string:
// Example: “My name is Max. I am 33 years old in human years which is 5 years old in dog years.”

let dog = {};

dog.name = 'fury';
dog.legs = 4;
dog.color = 'grey';
dog.age = 7;
dog.bark = function () {
	return 'Woof Woof';
};

dog.breed = 'bulldog';
dog.getDogInfo = function () {
	return `My name is ${
		dog.name
	}. I am ${dog.calcAge()} years old in human years which ${
		dog.age
	} years old in dog years...`;
};

dog.calcAge = function () {
	if (dog.age >= 2) {
		return 2 * 10.5 + (dog.age - 2) * 4;
	} else if (dog.age == 1) {
		return 10.5;
	}
};

console.log(dog.getDogInfo());
