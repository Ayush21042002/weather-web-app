const express = require("express");
const path = require("path");
//const request = require("request");
const https = require("https") ; 

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get("/weather/:city",(req,res) => {
    var city = req.params.city;
    const appid = "33d92e56156fee541dac0c7b78ad2285" ;
    url  =  "https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+appid ;
    // fetch weather from openweather
    https.get(url, (response) =>{

         response.on("data"  , (data)=>{
             const weatherData = JSON.parse(data) ;
             console.log(weatherData);

             // send icon uri/url
             
             const weatherObject = {
                iconurl:"http://openweathermap.org/img/w/" +weatherData.weather[0].icon + ".png",
                temp: Number(weatherData.main.temp)-273,
                windSpeed:weatherData.wind.speed,
                pressure:weatherData.main.pressure,
                humid:weatherData.main.humidity,
                country:weatherData.sys.country,
                city:weatherData.name
             };
              
             res.send(weatherObject);
         } )
         
    } )
   
});


const port = 3000 || process.env.PORT;
app.listen(port,console.log("Server running on port " + port));
