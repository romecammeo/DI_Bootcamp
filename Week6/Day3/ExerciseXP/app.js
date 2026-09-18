
import {people} from "./data.js";


function averageAge(people) {
  let total = 0;

  people.forEach(person => {
    total += person.age;
  });

  return total / people.length;
}

console.log(averageAge(people));