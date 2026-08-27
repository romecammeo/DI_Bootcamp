// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const mymappingfunction = (item,i) => i + 1 + "#choice is " + item
// const c = colors.map(mymappingfunction);
// console.log(c);

// // console.log("some: " + sampleArray.some(e => e > 21))
// // console.log("some: " + colors.some(item => item === "Violet"))
// console.log(colors.some(item => item === "Violet")? "Yeah":"No.....")


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
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// arrayindexfunction(i) + "choice is" 
