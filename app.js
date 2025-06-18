const express = require('express');
const routes = require('./routes/index.js');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(routes);

const cors = require('cors');


// CORS para permitir desde tu frontend (ej. localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000'
}));


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);