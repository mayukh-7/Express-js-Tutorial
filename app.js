//Import Express
const express = require('express');
const app = express();
const path = require('path')

//define for the  GET route
app.get('/hello', (req,res) => {
    res.set('content-Type', 'text/html');
    res.status(200).send("<h1>Hello, My name is Mayukh Maity</h1>");
});

app.use(express.json());
app.post('/', (req,res) =>{
    const {name} = req.body;
    res.send(`Welcome ${name}`);
});
app.get('/file', (req, res)=>{
    res.sendFile(path.join(__dirname,'2.png'));
});
app.use('/static', express.static(path.join(__dirname, 'static files')));

//start the server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

