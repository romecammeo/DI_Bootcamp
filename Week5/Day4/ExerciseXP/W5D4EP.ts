
// class Employee {
//     private name: string;
//     private salary: number;
//     public position: string;
//     protected department: string;

//     constructor(
//         name: string,
//         salary: number,
//         position: string,
//         department: string
//     ) {
//         this.name = name;
//         this.salary = salary;
//         this.position = position;
//         this.department = department;
//     }

//     public getEmployeeInfo(): string {
//        return `${this.name} works as ${this.position}`;
//     }
// }


// const mybestemployee = new Employee("rome", 1000, "HR coordinator", "HR");
// console.log(getEmployeeInfo(mybestemployee));




// class Product {
//     readonly id: number; 
//     public name: string;
//     public price: number; 


//     constructor(
//         id: number,
//         name: string,
//         price: number, 
//     ) {
//         this.id = id;
//         this.name = name;
//         this.price = price
//     }


//     // changeId(newIdvariablename: number): void {
//     //     this.id = newIdvariablename; // TypeScript error for me to observe 
//     // }

//     getProductInfo(): string {
//                return `${this.name} costs ${this.price}`;
        
//     }

// }


// const myproduct = new Product(123456, "M5STUDIO512GB", 50000);

// const myproduct2 = new Product(123457, "M5STUDIO256GB", 20000);

// console.log(myproduct)
// console.log(myproduct2)




// ֿclass Product {
//     readonly id: number; 
//     public name: string;
//     public price: number; 


//     constructor(
//         id: number,
//         name: string,
//         price: number, 
//     ) {
//         this.id = id;
//         this.name = name;
//         this.price = price
//     }




// ///exercise 4


interface MathOperation {
    (a : number, b: number) : number 
}
class Calculator {
    static add: MathOperation = (a, b) => a + b;
    static substract: MathOperation = (a, b) => a - b;

}

Calculator.add (1, 9); 

Calculator.substract (10, 1); 

console.log(Calculator.add(1,9))


///exercise 5 

interface User {
    readonly id: number;
    name: string;
    email: string;
}


interface PremiumUser extends User {
    membershiplevel?: string
}

let userPrime: PremiumUser = {
    membershiplevel: "VIP",
    name: "Shawn",
    email: "Shawn123.com",
    id: 1,
}



function printUserDetails(user: PremiumUser): void {
    console.log(user)
}

printUserDetails(userPrime);