const cityForm =  document.getElementById('cityform');
const cityInput = document.getElementById('city');
const postSection =  document.getElementById('postsection');
const checkbtn = document.getElementById('checkbtn');
const resultsection =  document.querySelector('section');
//Results


    const description =  document.getElementById('description');
    const city =  document.getElementById('cityName');
    const country =  document.getElementById('country');
    const wind =  document.getElementById('wind');
    const humidity = document.getElementById('humidity');
    const visibility =  document.getElementById('visibility');


//Api request
const apiRequest =  new XMLHttpRequest();

cityForm.addEventListener('submit', ($event)=>{
    $event.preventDefault();
    const choosenCity =  cityInput.value;
    
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + choosenCity + '&APPID=bc8cc1b32ffe8ff57e819965fefa6778');
    apiRequest.send();
    // bc8cc1b32ffe8ff57e819965fefa6778
    apiRequest.onreadystatechange = ()=>{
        if(apiRequest.readyState === 4){
            if(apiRequest.status === 404){
             const   errorInfo = [];
            
            description.textContent = "City not found";
            city.textContent = "Invalid city name"
            country.textContent = "Not Found" ;
            wind.textContent = "Not Found";
            humidity.textContent = "Not Found";
            visibility.textContent = "Not Found";

            
            }

            else{
             const   info = [];         
            const apiResponse = JSON.parse(apiRequest.response); 
            console.log(apiResponse)
            city.textContent = 'Results for ' + apiResponse.name;
            description.textContent = 'Its ' + apiResponse.weather[0].description;
            country.textContent = apiResponse.sys.country ;
            wind.textContent = apiResponse.wind.speed;
            humidity.textContent = apiResponse.main.humidity;
            visibility.textContent = apiResponse.visibility;
            var results = 
            { 
                "City name":apiResponse.name,
                "Contry":apiResponse.sys.country,
                "Description": apiResponse.weather[0].description,
                "Wind speed" : apiResponse.wind.speed,
                "Humidity": apiResponse.main.humidity,
                "Visibility": apiResponse.visibility

            }
            info.push(results)
            console.log(info)
            
            

            
            }
        }
    }
})

