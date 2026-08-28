const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const mymappingfunction = (item,i) => i + 1 + "#choice is " + item
const c = colors.map(mymappingfunction);
console.log(c);
console.log(colors.some(item => item === "Violet")? "Yeah":"No.....")


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
const arrayindexfunction = (i) => {
    if (i > 2) {
    return ordinal[0]
    }
    else
    {
    return ordinal[i+1]    
    }
    
}
 const mymappingfunction = (item,i) => " the " + (i + 1)  + arrayindexfunction(i) + " choice is " + item
const c = colors.map(mymappingfunction);
console.log(c);



exercise 3
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

["bread", "carrot", "potato", "chicken", "apple", "orange"]
------2------
const country = "USA";
console.log([...country]);
["U", "S", "A"]
------Bonus------

let newArray = [...[,,]];
console.log(newArray);
[undefined, undefined]


const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const myUsersMapFunction = item => "Hello " + item.firstName;
const c =  users.map(myusersmmapfunction);
console.log(c);


 const myfilterfunction = (item) => item.role === "Full Stack Resident";
 const d = users.filter(myfilterfunction);

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const result = epic.reduce((accumulator, item) => {
    return accumulator + ' ' + item;
});

console.log(result);


const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


 const myfilterfunction = (item) => item.IsPassed  === true;
  const d = students.filter(myfilterfunction);