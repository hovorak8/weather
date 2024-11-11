if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function getCityTemp(cityName, id){
    const key = "a642770427866b1ed321151dbf3043c3";
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key + "&units=metric&lang=cs")  
    .then(function(resp) {return resp.json()})
    .then(function(data) {
    console.log(data);
    if(data.cod == 200)
    {
        document.getElementById(id).textContent = data.name + ": " + data.main.temp + "°C";
    } else
    {
        console.log(data);  
    }
  })
  .catch(function(error) {
    console.log("Error ocured" + error);
    // catch any errors
  });
}

window.onload = function()
{
    getCityTemp("Dobronín", "dobronin")
    getCityTemp("Jihlava", "jihlava")
}

function getUserCityTemp() {
    const input_city = document.getElementById("input_city").value;
    var name = "";
    var temp = 0;
    getCityTemp(input_city, "city");
}