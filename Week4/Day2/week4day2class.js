const myobject = {
    name: 'John',
    lastname: 'Doe'

};

console.log(Object.keys(myobject));
console.log(Object.values(myobject));

console.log(Object.entries(myobject));



const myArray = [
 ['Student','Joe']
 ['Teacher','Rose']

] 

console.log(Object.fromEntries(myArray));


###Exercise 
// Use the methods above to :
// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

###My draft -
// const myObj2 = Object.entries(myObj);
// total = 0;
//  for (let i = 0; i < length; i++)
//     total = total + 1

// console.log("The key is Object.keys(myObj2)) + The  value is (Object.values(myObj2))");


// ### Instructor's
const Myobjkeys = Object.keys(myObj);
const Myobjvalues = Object.values(myObj)

console.log('We have ${Myobjkeys.length} keys and $ {Myobjvalues.length} values');

// ### Or
console.log(Myobjkeys.map((e , i) => 'The ' + (i + 1) + ' Key is ' + e));
console.log(Myobjvalues.map((e , i) => 'The ' + (i + 1) + ' Value is ' + e));



const myobject = {
    name: 'John',
    lastname: 'Doe'
    address: 'Tel Aviv'

};

const name = myobject.name;
const lastname = myobject.lastname;


const { name , lastName} = myobject;


console.log(...myobject); ### not working 

console.log(...Object.entries(myobject));

console.log(myobject.name);
console.log(myobject['name']);
console.log(myobject.mybestkeyever); ### undefined 

for (const key in myobject) {
    console.log[key, myobject[key]] 
}



### Small exercise 

const nick = {
    week1: 1,
    week2: 0,
    week3: 2, 
    week4: 0,
    week5: 4,
    week6: 3,
    week7: 7,
    week8: 20,
}

const rose = {
    week1: 3,
    week2: 12,
    week3: 10, 
    week4: 10,
    week5: 10,
    week6: 10,
    week7: 10,
    week8: 10
}



// ### My draft - 
const nickvalues = Object.values(nick);
const rosevalues = Object.values(rose);

const nickresult = nickvalues.reduce((accumulator, exercises) => {
    return accumulator + ' ' + exercises;
});

const roseresult = rosevalues.reduce((accumulator, exercises) => {
    return accumulator + ' ' + exercises;
});


### Rogario solution
const sumnick = object.values(nick)reduce((total, value) = total + value, 0);
const sumrose = object.values(rose)reduce((total, value) => total + value, 0);
console. log(sumnick);


### Shawn solution
connst sumTotal = (studentobject) => {return Object.values(studentobject).reduce((total, value) => total + value, 0)}



const nick = {
    week1: 1,
    week2: 0,
    week3: 2, 
    week4: 0,
    week5: 4,
    week6: 3,
    week7: 7,
    week8: 20,
    Mytotal:  function () {
        return Object.values(this).reduce((a , b ) => typeof b == 'number'? a + b : a, 0)

    }

    console.log(nick.Mytotal())




### my draft 

const work = {
    work: [, , , , , , ,]
    freetime: [, , , , , , ,]
    Mytotalwork: function () {
        return work.values(this).reduce((a , b ) => a + b , 0)
}
  Mytotalrelaxtime: function () {
        return Mytotalrelaxtime.values(this).reduce((a , b ) => a + b , 0)
}


}


###Shawn
const schedule = {
    work: [8, 4, 8, 12, 8, 0, 0],
    free: [16, 20, 12, 16, 24, 24],
    hoursSorted: function () {
        const reduceFunc = (key) => { return Object.values(this[key]).reduce((total, value) => total + value, 0) }
        return Total hours of work:  ${reduceFunc("work")} Total hours of freetime: ${reduceFunc("free")}
    }
}