const form = document.getElementById("search-form");

window.onload = async() => {
    const city = 'New Delhi';

    document.getElementById("city").value = "";

    const response = await fetch("/weather/" + city,{
        method: "GET"
    });

    if(response.status == 200){
        const json = await response.json();
        // fetch json and data and change data in the respective span in html using dom
        document.getElementById('temp').innerHTML=json.temp + " &#8451;";
        document.getElementById('wind').innerHTML=json.windSpeed + " m/s";
        document.getElementById('pres').innerHTML=json.pressure + " hPa";
        document.getElementById('humid').innerHTML=json.humid +  " %";
        // document.getElementById('image').src=json.iconurl;
        document.getElementById('place').innerHTML=json.city +", "+json.country + "<img class='weather-cond' src=' "+json.iconurl+"'>";
        // console.log(json);
        
        document.querySelector('.card-body').style = "display:block;";
    }
};

form.onsubmit = async(event) => {
    event.preventDefault();

    const city = document.getElementById("city").value;

    document.getElementById("city").value = "";

    const response = await fetch("/weather/" + city,{
        method: "GET"
    });

    if(response.status == 200){
        const json = await response.json();
        // fetch json and data and change data in the respective span in html using dom
        document.getElementById('temp').innerHTML=json.temp + " &#8451;";
        document.getElementById('wind').innerHTML=json.windSpeed + " m/s";
        document.getElementById('pres').innerHTML=json.pressure + " hPa";
        document.getElementById('humid').innerHTML=json.humid +  " %";
        // document.getElementById('image').src=json.iconurl;
        document.getElementById('place').innerHTML=json.city +", "+json.country + "<img class='weather-cond' src=' "+json.iconurl+"'>";
        // console.log(json);
        
        document.querySelector('.card-body').style = "display:block;";
    }else{
        alert("Please enter correct city");
    }
};
