const card = document.getElementById('card')
const degree = document.getElementById('degree')
const main = document.getElementById('descrip')
const date = document.getElementById('date')
const inputVal = document.getElementById('input')
const minmax = document.getElementById('degree2')
const weatherImg = document.getElementById('img')
const locations = document.getElementById('locations')
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0]
const today = new Date();

const formattedDate = today.toDateString();

// const options = { month: 'long', year: 'numeric' };


inputVal.addEventListener('change', () => {

  // Construct the URL for the OpenWeatherMap API
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputVal.value + '&appid=6ec2215b6f05631de0ba19b062a81809';

  // Define a function to fetch weather data
  const weatherData = () => {
    // Make the API request
    fetch(url)
      .then(response => {
        // Check if the response status is 404 (Not Found)
        if (response.status === 404) {
          throw new Error('Server Error: ' + response.status);
        }
        // Convert the response to JSON
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Extract the necessary data from the response
        const description = data.weather[0].description;
        const weatherDegree = data.main.temp;
        const weatherCelcius = Math.floor(weatherDegree - 273);
        const weatherMin = Math.floor(data.main.temp_min-273)
        const weatherMax = Math.floor(data.main.temp_max-273)

        // Display the weather information on the webpage
        main.innerText = description;
        degree.innerText = ` ${weatherCelcius}°`;

        let icon1 = data.weather[0].icon;
        weatherImg.src = `http://openweathermap.org/img/w/` + icon1 + `.png`;

        locations.innerText = inputVal.value;
        inputVal.value = "";

        date.innerText = formattedDate

        minmax.innerText = `${weatherMin}/${weatherMax}`

      })
      .catch(error => {
        // Handle the error by displaying an alert message
        window.Error(modal.style.display = "block");
        span.onclick = function () {
          modal.style.display = "none";
        }
        inputVal.value = "";
      });
  }

  // Call the weatherData function to initiate the API request
  weatherData();
  card.style.display = 'flex'
});
