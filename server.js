'use strict'; 

const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.writeHead(302, {
        location: 'https://wfchiang.github.io'
    }); 
    res.end(); 
}); 

const PORT = parseInt(process.env.PORT) || 8080; 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`); 
}); 

module.exports = app; 