

// --- #1 ---
// #1.1 - Output in console/alert:
// "inside the funcOne function 3"

// #1.2 - What happens if 'let' is replaced with 'const'?
// It will throw a "TypeError: Assignment to constant variable" at the line `a = 3;`.
// Inside the function, you are trying to reassign the value of a single declared variable 'a'. 
// It does not create a different 'a'.


// --- #2 ---
// #2.1 - Output in console:
// "inside the funcTrree function 0" (from the first funcThree call)
// "inside the funcTrree function 5" (from the second funcThree call, after funcTwo ran)

// #2.2 - What happens if 'let' is replaced with 'const'?
// It will throw a "TypeError: Assignment to constant variable" when `funcTwo()` executes `a = 5;`. 
// Global variables declared with 'const' cannot be reassigned.


// --- #3 ---
// #3.1 - Output in console/alert:
// "inside the funcFive function hello"
// Why? `window.a = "hello"` creates a global variable. `funcFive` can access it because it looks 
// in the global scope when 'a' is not found locally.


// --- #4 ---
// #4.1 - Output in console/alert:
// "inside the funcSix function test"

// #4.2 - What happens if 'let' is replaced with 'const'?
// Nothing changes; it works exactly the same way without throwing any errors.
// This is because the inner `let a = "test"` creates a completely separate block-scoped local 
// variable (called "shadowing"). It never attempts to reassign the outer 'a', regardless of 
// whether the outer 'a' is a 'let' or a 'const'.


// --- #5 ---
// #5.1 - Output in console/alert:
// First alert: "in the if block 5"
// Second alert: "outside of the if block 2"

// #5.2 - What happens if 'let' is replaced with 'const'?
// Nothing changes; it works exactly the same way without throwing any errors.
// Inside the `if` block, a brand new variable is being declared, not reassigned. 
// Since 'let' and 'const' both respect block scope, they both create a local 'a' inside 
// the curly braces `{}` that safely coexists with the outer 'a'.







###exercise 2

const winBattle = () => {
    return true;
};

let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


###exercise 3

const checkPass = (value) => {
    if (typeof value === "string") {
        return true;
    } else {
        return false;
    }
};

console.log(checkPass("hello"));     
console.log(checkPass([1, 2, 4]));   

### exercise 4

const add = (a, b) => a + b;

### exercise 5

function kgtograms(kg) {
    return kg * 1000;
}


 const kgtograms2 = function(kg){
    return kg * 1000;
}

const kgtograms3 = kg >= kg * 1000;

// ### my opinion -
// ### Function declaration: defines a named function directly.
// Function expression: creates a function as a value and assigns/stores it in a variable


### exercise 6

(function(numberOfChildren, partnerName, location, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids`);
})(2, "Maya", "Paris", "Developer");
