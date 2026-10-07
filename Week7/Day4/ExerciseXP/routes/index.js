const express = require('express'); 
const router = express.Router(); 


router.get('/', (request, response) => { 
    response.send('Hello World');
}); 

router.get('/about', (request, response) => { 
    response.send('Yo it\'s about page'); 
}); 

module.exports = router;