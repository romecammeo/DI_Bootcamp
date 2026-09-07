
// Description:

// Create a function with an optional parameter for a greeting. Use conditional logic to apply a default greeting if none is provided.

// Instructions
// Create the Function:
// Write a function welcomeUser that takes a required name and an optional greeting.
// If no greeting is provided, use "Hello" as the default.

// Test the Function:

// Test welcomeUser with and without a custom greeting.


// function WelcomeUser (name?: string): string {
//     if (name) {
//         return "Hello " + name + "!";
//     }

//     return "Hello to you!";
// }

// console.log(WelcomeUser("rome"));
// console.log(WelcomeUser())


// function Myfunction(): never {
//     while (true) {

//     }
//  return 1
// }


// function Myfunction(): never {
//    throw new Error ("")
// }


// function Myfunction(a : boolean): any {
//     if (a) {
//         return "Hello"
//     }
//     else {
//         return 1
//     }
// }


// type MyType = (string | number);
// type MyObjectType = {
//     name: string,
//     age: number,
//     isStudent?: boolean
// };
// let a: MyType = 5;
// let b: MyObjectType = { name: "Joe", age: 14 }



// class MyClass {
//     private greeting: string;

//     constructor(greeting) {
//         this.greeting = greeting;
//     }
//     myMethod() {
//         console.log(this.greeting);
//     }
// }


// class MyClass {
//     private greeting: string;
//     public goodbye: string; 

//     constructor(greeting: string) {
//         this.greeting = greeting;
//         this.goodbye = "Bye"
//     }

//     private myOtherMethod(): void {
//         console.log(this.goodbye)

//     }
//     myMethod(): void {
//         this.myOtherMethod
//         console.log(this.greeting);
//     }
// }

// const myClassinstance = new MyClass("Hello");
// myClassinstance.myMethod()


///my draft 
// class Employee {
//     private salary: string;
//     public name: string; 
//     public lastname: string; 
//     public position: string; 

//     constructor(name: string, lastname: string, salary: number, position: string) {
//         this.name = name
//         this.lastname = lastname
//         this.salary = salary 
//         this.position = position 
//     }

//     public mygreeting(): void {
//         console.log("I am ${name}, my role is ${position}")
//         this.compare

//     }
//     private compare(): void {
//        if (salary => 20000) {
//         console.log("Wow!");
//        }
//        else {
//         console.log("${name} need a raise!"); 
//        }
//     }
// }

// const Rome = new Employee("Rome", "Cammeo", 15000 , "Developer");
// Rome.mygreeting()


///Instructor's solution 

// class Employee {
    
//     public name: string;
//     public lastname: string;
//     private salary: number;
//     public position: string;
    
//     constructor(
//         name: string,
//         lastname: string,
//         salary: number,
//         position: string
//     ) {
//         this.name = name;
//         this.lastname = lastname;
//         this.salary = salary;
//         this.position = position;
//     }

//     public getGreeting(): void {
//         console.log(`I'm ${this.name} ${this.lastname}, my role is ${this.position}`);
//     }

//     public compareMySalary(theOtherSalary: number): string {
//         return this.salary > theOtherSalary ? "I'm happy" : "Give me a raise, now!"
//     }
// }

// const myClassInstance = new Employee("John", "Doe", 10000, "developer");
// myClassInstance.getGreeting();
// console.log(myClassInstance.compareMySalary(20000));
// console.log(myClassInstance.compareMySalary(5000));




// class Employee {
    
//     readonly name: string;
//     readonly lastname: string;
//     private salary: number;
//     protected position: string;
    
//     constructor(
//         name: string,
//         lastname: string,
//         salary: number,
//         position: string
//     ) {
//         this.name = name;
//         this.lastname = lastname;
//         this.salary = salary;
//         this.position = position;
//     }

//     public getGreeting(): void {
//         this.lastname = "Mary"
//     }

//     public compareMySalary(theOtherSalary: number): string {
//         return this.salary > theOtherSalary ? "I'm happy" : "Give me a raise, now!"
//     }
// }


// class Intern extends Employee {

//     private internship: number;

//     constructor(name: string,
//         lastname: string,
//         salary: number,
//         position: string) {
//             super(name, lastname, salary, position);
//             this.internship = 100;
//         }
    
//     public getDaysLeft(daysSpent: number): number {
//         console.log(this.position);
//         console.log(this.salary);
//         return this.internship - daysSpent;
//     }

//     override getGreeting(): void {
//          console.log(`I'm an intern ${this.name} ${this.lastname}, my role is ${this.position}`);
//     }
// }


// const myClassInstance = new Employee("John", "Doe", 10000, "developer");
// myClassInstance.getGreeting();
// console.log(myClassInstance.compareMySalary(20000));
// console.log(myClassInstance.compareMySalary(5000));
// const MyIntern = new Intern("Mary", "Doe", 3000, "designer")
// MyIntern.getGreeting()
// console.log(MyIntern.getDaysLeft(30))



// type MyType = "Hello" | "Goodbye" | "Hi";
// type MyType2 = number | string | true;
// let a: MyType2 = false; 

// let myType3 = "GET" | "POST" | "DELETE"; 

// interface User {
//     name: string;
//     email: string;
//     readonly id: number; 

// }

// interface UserPremium extends User {
//     membership: string
// }

// let b: UserPremium = {
//     membership:"GOLD",
//     name:"Joe",
//     email: "joedoe@joe.com",
//     id:1
// }

// interface MathOperation {
//     (a: number, b: number): number;

// }

// const add: MathOperation = (a, b) => a + b;
// const sub: MathOperation = (a, b) => a - b;
// const mul: MathOperation = (a, b) => a * b;
// const crazy: MathOperation = (a, b) => {console.log("I'm crazy"); return a / b};


// interface identifiable  {
//      readonly id: number; 
//      name: string; /// can't be a number
// }


// interface User {
//     name: string;
//     email: string;

// }

// interface UserPremium extends identifiable, User {
//     membership: string
// }

// let b: UserPremium = {
//     membership:"GOLD",
//     name:"Joe",
//     email: "joedoe@joe.com",
//     id:1
// }






// interface Book {
//     title: string,
//     author: string,
//     publishedYear: number,
//     isbn: string,
//     genre?: string
// }

// class Library {

//     private books: Book[];

//     constructor(books: Book[]) {
//         this.books = books;
//     }

//     getBookAuthor(isbn: string): string {
//         const book = this.books.find(book => book.isbn === isbn); ///I would have tried  getBookAuthor(this.isbn: string )
//         return book?.author || "";///return this.author is what we tried 
        
//     }

//     getBookTitles() {
//         return this.books.map(book => book.title);
//     }

// }

// const genericBooks = [
//     {
//     title: "Jews vs. Rome: Two Centuries of Rebellion Against the World's Mightiest Empire",
//     author: "Barry Strauss",
//     publishedYear: 2025,
//     isbn: "9781668009598",
//     genre: "History / Non-Fiction"
//     },
//     {
//     title: "1984",
//     author: "George Orwell",
//     publishedYear: 1949,
//     isbn: "9780451524935",
//     genre: "Dystopian"
//   },
//   {
//     title: "The Hobbit",
//     author: "J. R. R. Tolkien",
//     publishedYear: 1937,
//     isbn: "9780547928227",
//     genre: "Fantasy"
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     publishedYear: 1960,
//     isbn: "9780061120084",
//     genre: "Fiction"
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     publishedYear: 1925,
//     isbn: "9780743273565",
//     genre: "Classic"
//   },
//   {
//     title: "Brave New World",
//     author: "Aldous Huxley",
//     publishedYear: 1932,
//     isbn: "9780060850524",
//     genre: "Dystopian"
//   },
//   {
//     title: "Fahrenheit 451",
//     author: "Ray Bradbury",
//     publishedYear: 1953,
//     isbn: "9781451673319",
//     genre: "Science Fiction"
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J. D. Salinger",
//     publishedYear: 1951,
//     isbn: "9780316769488",
//     genre: "Fiction"
//   },
//   {
//     title: "The Little Prince",
//     author: "Antoine de Saint-Exupéry",
//     publishedYear: 1943,
//     isbn: "9780156012195"
//   },
//   {
//     title: "Animal Farm",
//     author: "George Orwell",
//     publishedYear: 1945,
//     isbn: "9780451526342",
//     genre: "Satire"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     publishedYear: 1988,
//     isbn: "9780061122415"
//   }
// ]

// const myLibrary = new Library(genericBooks);
// console.log(myLibrary.getBookTitles().join("\n"));
// console.log(myLibrary.getBookAuthor("9781668009598"))








