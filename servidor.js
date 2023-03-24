const express = require("express");
const app = express();



app.listen(3001, () => console.log("Escuchando el servidor"));

app.get('/puto',(req, res)=> {
    res.json({mensaje:'Ines Diaz Alegria'}).status(200)
});
 
