
// Exercise 1: Object Destructuring & Output


const person = { 
  name: 'John Doe', 
  age: 25, 
  location: { 
    country: 'Canada', 
    city: 'Vancouver', 
    coordinates: [49.2827, -123.1207] 
  } 
};

const {name, location: {country, city, coordinates: [lat, lng]}} = person; 
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`); 

// ###the output is I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207) 


// Exercise 2: Destructuring Function Parameters


function displayStudentInfo(objuser){ 
  const {first, last} = objuser; 
  console.log(`Your full name ${first} ${last}`); 
} 

displayStudentInfo({first: 'Elie', last:'Schoppik'}); 


// ==========================================
// Exercise 3: Object to Array Transformation
// ==========================================

const users = { user1: 18273, user2: 92833, user3: 90315 }; 

// Converts the object into an array of [key, value] pairs
const usersArray = Object.entries(users); 
console.log(usersArray); 

// Maps through the array and doubles each user ID value
const usersMap2 = usersArray.map(e => { 
  return [e[0], e[1] * 2]; 
}); 
console.log(usersMap2);


// ==========================================
// Exercise 4: Classes and Typings
// ==========================================

class Person { 
  constructor(name) { 
    this.name = name; 
  } 
} 

const member = new Person('John'); 
console.log(typeof member); 

// ### the output would be "object" 


// ==========================================
// 🌟 Exercise 5 : Dog class Instructions
// ==========================================

class Dog { 
  constructor(name) { 
    this.name = name; 
  } 
}

// ### 
// Analyze the options below. Which constructor will successfully extend the Dog class? 
// 1 class Labrador extends Dog { constructor(name, size) { this.size = size; } };
// 2 class Labrador extends Dog { constructor(name, size) { super(name); this.size = size; } };
// 3 class Labrador extends Dog { constructor(size) { super(name); this.size = size; } };
// 4 class Labrador extends Dog { constructor(name, size) { this.name = name; this.size = size; } };
// ### correct initialization is 2 

class Labrador extends Dog { 
  constructor(name, size) { 
    super(name); 
    this.size = size; 
  } 
}


// Exercise 6: Object References & OOP Inheritance


console.log([2] === [2]); ///false 
console.log({} === {});   ///false 

const object1 = { number: 5 }; ///number : 5 
const object2 = object1;        ///number : 5 
const object3 = object2;        ///number : 5 
const object4 = { number: 5};  ///number : 5 

object1.number = 4; //number : 4 

///why? object2 = object1 does not copy the object. It copies the reference to the same object. 

class Animal { 
  constructor(name, type, color) { 
    this.name = name; 
    this.type = type; 
    this.color = color; 
  } 
} 

class Mammal extends Animal { 
  constructor(name, type, color) { 
    super(name, type, color); 
  } 
  
  sound(sound) { 
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`; 
  } 
} 

const farmerCow = new Mammal("Lily", "cow", "brown and white"); 
console.log(farmerCow.sound("Moooo"));

