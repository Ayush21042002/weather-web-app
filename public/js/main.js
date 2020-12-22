const form = document.getElementById("search-form");

form.onsubmit = async(event) => {
    event.preventDefault();

    const city = document.getElementById("city").value;

    document.getElementById("city").value = "";

    const response = await fetch("/weather/" + city,{
        method: "GET"
    });

    const json = await response.json();

    // fetch json and data and change data in the respective span in html using dom
    document.getElementById('temp').innerHTML=json.temp;
    document.getElementById('wind').innerHTML=json.windSpeed;
    document.getElementById('pres').innerHTML=json.pressure;
    document.getElementById('humid').innerHTML=json.humid;
    // document.getElementById('image').src=json.iconurl;
    document.getElementById('place').innerHTML=json.city +" "+json.country + "<img class='weather-cond' src=' "+json.iconurl+"'>";
    console.log(json);
};