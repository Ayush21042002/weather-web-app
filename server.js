const express = require("express");
const path = require("path");
const request = require("request");

const app = express();

const port = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get("/weather/:city",(req,res) => {
    const city = req.params.city;
    // fetch weather from openweather
    
    //send weather data to frontend

    // send icon uri 
    // send temperature
    // send wind speed
    // send pressure
});

app.listen(port,console.log("Server running on port " + port));
