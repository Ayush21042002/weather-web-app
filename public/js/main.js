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

    console.log(json);
};