const degree = document.getElementById('degree')
const main = document.getElementById('main')
const date = document.getElementById('date')
const inputVal = document.getElementById('input')
const btn = document.getElementById('btn')
const weatherImg = document.getElementById('img')
const locations = document.getElementById('locations')



btn.addEventListener('click', () => {

  // Construct the URL for the OpenWeatherMap API
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputVal.value + '&appid=6ec2215b6f05631de0ba19b062a81809';

  // Define a function to fetch weather data
  let weatherData = () => {
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
        // Extract the necessary data from the response
        const description = data.weather[0].description;
        const weatherDegree = data.main.temp;
        const weatherCelcius = Math.floor(weatherDegree - 273);

        // Display the weather information on the webpage
        main.innerText = description;
        degree.innerText = ` ${weatherCelcius} °C`;
        let icon1 = data.weather[0].icon;
        weatherImg.src = `http://openweathermap.org/img/w/` + icon1 + `.png`;
        locations.innerText = inputVal.value;
        inputVal.value = "";
      })
      .catch(error => {
        // Handle the error by displaying an alert message
        alert("Wrong city, please try again");
        inputVal.value = "";
      });
  }

  // Call the weatherData function to initiate the API request
  weatherData();
});
