const express = require("express");
const path = require("path");
//const request = require("request");
const https = require("https") ; 

const app = express();

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get("/weather/:city",(req,res) => {
    var city = req.params.city;
    const appid =  process.env.APPID;
    url  =  "https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid="+appid ;
    // fetch weather from openweather
    https.get(url, (response) =>{

         response.on("data"  , (data)=>{
             const weatherData = JSON.parse(data) ;
            //  console.log(weatherData);

             // send icon uri/url
             
             const weatherObject = {
                iconurl:"http://openweathermap.org/img/w/" +weatherData.weather[0].icon + ".png",
                temp: (Number(weatherData.main.temp)-273).toFixed(2),
                windSpeed:weatherData.wind.speed,
                pressure:weatherData.main.pressure,
                humid:weatherData.main.humidity,
                country:weatherData.sys.country,
                city:weatherData.name
             };
              
             res.status(200).send(weatherObject);
         } )
         
    } )
   
});


const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Weather app listening on port ${port}!`));
