//Import Express
const express = require('express');
const app = express();

//define the route
app.get('/', (req,res) => {
    res.send("My first express server ");
});

//start the server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

