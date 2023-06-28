const input = document.getElementById('searchInput');
const button = document.getElementById('searchButton');
const cont1 = document.getElementById('citycurrent');
const cont2 = document.getElementById('citylocation');
const ul2 = document.createElement('ul');
const ul1 = document.createElement('ul');
const cont3 = document.getElementById('citywind');
const ul3 = document.createElement('ul');
const cont4 = document.getElementById('common');
const ul4 = document.createElement('ul');
const li16=document.createElement('li');
li16.innerHTML=`      Temp     Humidity    Cloud Pct    Wind Speed`;
ul4.append(li16);
fetch('https://corporatebs-generator.sameerkumar.website/').then(function (data) {
    return data.json();
}).then(function (data) {
    document.getElementById('copq').innerHTML = `${data.phrase}`;
}).catch(function (err) {
    console.log("Error ", err);
});
fetch('https://dog.ceo/api/breeds/image/random').then(function (data) {
    return data.json();
}).then(function (data) {
    document.getElementById("card5").style.background = `url("${data.message}")`;
}).catch(function (err) {
    console.log("Error ", err);
});
var searchText = "Delhi";
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi`;
var options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0441eff916mshaa60f7aa1639239p1eb097jsn13a9094980ec',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
const li7 = document.createElement('li');
const li8 = document.createElement('li');
const li9 = document.createElement('li');

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
        document.getElementById('temp').innerHTML = `${weatherData.temp} ℃`;
        li1.textContent = `Feels Like : ${weatherData.feels_like}`;
        ul1.appendChild(li1);
        li2.textContent = `Min Temp : ${weatherData.min_temp}`;
        ul1.appendChild(li2);
        li3.textContent = `Max Temp : ${weatherData.max_temp}`;
        ul1.appendChild(li3);
        cont2.appendChild(ul1);
        document.getElementById('humid').innerHTML = `${weatherData.humidity} %`;
        li6.textContent = `Wind Degrees : ${weatherData.wind_degrees}`;
        ul2.appendChild(li6);
        li4.textContent = `Cloud Pct : ${weatherData.cloud_pct}`;
        ul2.appendChild(li4);
        li5.textContent = `Feels Like : ${weatherData.feels_like}`;
        ul2.appendChild(li5);
        cont1.appendChild(ul2);
        document.getElementById('wind').innerHTML = `${weatherData.wind_speed} km/hr`;
        li7.textContent = `Wind Speed : ${weatherData.wind_speed}`;
        ul3.appendChild(li7);
        li8.textContent = `Sunrise : ${weatherData.sunrise}`;
        ul3.appendChild(li8);
        li9.textContent = `Sunset : ${weatherData.sunset}`;
        ul3.appendChild(li9);
        cont3.appendChild(ul3);
    } catch (error) {
        console.error(error);
    }
    
}

fetchData();

button.addEventListener('click', async function (event) {
    event.preventDefault();
    ul1.innerHTML = "";
    ul2.innerHTML = "";
    ul3.innerHTML = "";
    ul4.innerHTML = "";
    searchText = input.value;
    document.getElementById('cityhead').innerHTML=`${searchText}`;
    console.log(searchText);

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${searchText}`;
    var  options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0441eff916mshaa60f7aa1639239p1eb097jsn13a9094980ec',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
            document.getElementById('temp').innerHTML = `${weatherData.temp} ℃`
            li1.textContent = `Feels Like : ${weatherData.feels_like}`;
        ul1.appendChild(li1);
        li2.textContent = `Min Temp : ${weatherData.min_temp}`;
        ul1.appendChild(li2);
        li3.textContent = `Max Temp : ${weatherData.max_temp}`;
        ul1.appendChild(li3);
        cont2.appendChild(ul1)
        document.getElementById('humid').innerHTML = `${weatherData.humidity} %`
        li6.textContent = `Wind Degrees : ${weatherData.wind_degrees}`;
        ul2.appendChild(li6);
        li4.textContent = `Cloud Pct : ${weatherData.cloud_pct}`;
        ul2.appendChild(li4);
        li5.textContent = `Feels Like : ${weatherData.feels_like}`;
        ul2.appendChild(li5);
        cont1.appendChild(ul2);
        document.getElementById('wind').innerHTML = `${weatherData.wind_speed} km/hr`
        li7.textContent = `Wind Speed : ${weatherData.wind_speed}`;
        ul3.appendChild(li7);
        li8.textContent = `Sunrise : ${weatherData.sunrise}`;
        ul3.appendChild(li8);
        li9.textContent = `Sunset : ${weatherData.sunset}`;
        ul3.appendChild(li9);
        cont3.appendChild(ul3)
    } catch (error) {
        console.error(error);
    }
    const url2 = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi`;
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0441eff916mshaa60f7aa1639239p1eb097jsn13a9094980ec',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url2, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
        document.getElementById('dtemp').innerHTML = `${weatherData.temp}`;
        document.getElementById('dfeel').innerHTML = ` ${weatherData.feels_like}`;
        document.getElementById('dh').innerHTML = `${weatherData.humidity}`;
        document.getElementById('dcloud').innerHTML = `${weatherData.cloud_pct}`;
        document.getElementById('dwind').innerHTML = `${weatherData.wind_speed}`;
    } catch (error) {
        console.error(error);
    }
    const url3 = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`;
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0441eff916mshaa60f7aa1639239p1eb097jsn13a9094980ec',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url3, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
        document.getElementById('mtemp').innerHTML = `${weatherData.temp}`;
        document.getElementById('mfeel').innerHTML = ` ${weatherData.feels_like}`;
        document.getElementById('mh').innerHTML = `${weatherData.humidity}`;
        document.getElementById('mcloud').innerHTML = `${weatherData.cloud_pct}`;
        document.getElementById('mwind').innerHTML = `${weatherData.wind_speed}`;
    } catch (error) {
        console.error(error);
    }
    const url4 = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york`;
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0441eff916mshaa60f7aa1639239p1eb097jsn13a9094980ec',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url4, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
        document.getElementById('ntemp').innerHTML = `${weatherData.temp}`;
        document.getElementById('nfeel').innerHTML = ` ${weatherData.feels_like}`;
        document.getElementById('nh').innerHTML = `${weatherData.humidity}`;
        document.getElementById('ncloud').innerHTML = `${weatherData.cloud_pct}`;
        document.getElementById('nwind').innerHTML = `${weatherData.wind_speed}`;
    } catch (error) {
        console.error(error);
    }
    const url5 = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo`;
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0441eff916mshaa60f7aa1639239p1eb097jsn13a9094980ec',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url5, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
        document.getElementById('ttemp').innerHTML = `${weatherData.temp}`;
        document.getElementById('tfeel').innerHTML = ` ${weatherData.feels_like}`;
        document.getElementById('th').innerHTML = `${weatherData.humidity}`;
        document.getElementById('tcloud').innerHTML = `${weatherData.cloud_pct}`;
        document.getElementById('twind').innerHTML = `${weatherData.wind_speed}`;
    } catch (error) {
        console.error(error);
    }
    const url6 = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=California`;
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0441eff916mshaa60f7aa1639239p1eb097jsn13a9094980ec',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url6, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
        document.getElementById('ctemp').innerHTML = `${weatherData.temp}`;
        document.getElementById('cfeel').innerHTML = ` ${weatherData.feels_like}`;
        document.getElementById('ch').innerHTML = `${weatherData.humidity}`;
        document.getElementById('ccloud').innerHTML = `${weatherData.cloud_pct}`;
        document.getElementById('cwind').innerHTML = `${weatherData.wind_speed}`;
    } catch (error) {
        console.error(error);
    }
    const url7 = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai`;
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0441eff916mshaa60f7aa1639239p1eb097jsn13a9094980ec',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url7, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);
        document.getElementById('stemp').innerHTML = `${weatherData.temp}`;
        document.getElementById('sfeel').innerHTML = ` ${weatherData.feels_like}`;
        document.getElementById('sh').innerHTML = `${weatherData.humidity}`;
        document.getElementById('scloud').innerHTML = `${weatherData.cloud_pct}`;
        document.getElementById('swind').innerHTML = `${weatherData.wind_speed}`;
    } catch (error) {
        console.error(error);
    } 
    fetch('https://dog.ceo/api/breeds/image/random').then(function (data) {
        return data.json();
    }).then(function (data) {
        document.getElementById("card5").style.background = `url("${data.message}")`;
    }).catch(function (err) {
        console.log("Error ", err);
    });
});

