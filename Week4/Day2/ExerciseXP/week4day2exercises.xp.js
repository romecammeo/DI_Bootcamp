// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// ###the output is I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// function displayStudentInfo(objuser){
//     const {first,name} = objuser
//     console.log('Your full name ${first} ${last}')
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});




// ##Exercise 3

const users = {
    user1: 18273,
    user2: 92833,
    user3: 90315
};

const usersArray = Object.entries(users);
console.log(usersArray);

const usersMap2 = usersArray.map(e => {
    return [e[0], e[1] * 2];
});

console.log(users)