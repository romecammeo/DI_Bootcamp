const http = require('http'); 

// const server = http.createServer((request, response) => { 
//     response.end("Hello world "); 
// });
// const server = http.createServer((request, response) => { 
//     response.end("Hello world 2"); 
// });

// const server = http.createServer((request, response) => { 
//     if (request.url === '/about') {
//         response.statusCode = 404; 
//          response.end("<h1>My about page</h1><p>Hello!</p>"); 
//     } else {
//           response.end("Hello world 1"); 
//     }
// });


// server.listen(5000, 'localhost', () => {
//     console.log("Our Server is running")
// })






const express = require('express');
const app = express()

const getWelcome =(requese, response) => {
    response.send("Welcome!")
}

const getAbout =(requese, response) => {
    response.send("About us!")
}


app.get("/", getWelcome);
app.get("/about", getAbout);


app.listen(3333, 'localhost', () => {
    console.log("server is listening on port 5000")
});

