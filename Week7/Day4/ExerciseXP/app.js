///exercise 1


const express = require('express');
const app = express();

const router = require('./routes/index.js');


app.use('/', router);

app.listen(3000, 'localhost' , () => {
       console.log("Our Server is running")

});

