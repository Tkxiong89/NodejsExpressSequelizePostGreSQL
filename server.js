const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var corsOption = {
    origin: "http://localhost:8081"
};

const app = express();

// parse content-type application/json
app.use(bodyParser.json());
// parse content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption));

// simple route
app.get('/', (req, res)=> {
    res.json({ message: "Welcome to my application!"});
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});