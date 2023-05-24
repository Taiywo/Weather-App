const degree = document.getElementById('degree')
const main = document.getElementById('main')
const date = document.getElementById('date')
const inputVal = document.getElementById('input')
const btn = document.getElementById('btn')
const weatherImg = document.getElementById('img')
const locations = document.getElementById('locations')
 
console.log(input.value)


btn.addEventListener('click', () => {

  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputVal.value + '&appid=6ec2215b6f05631de0ba19b062a81809'
  let getAbuja = () => {
    fetch(url).then(response => {
      return response.json()
    }).then(data => {
      console.log(data.weather);
      console.log(data.weather[0].description);
      const description = data.weather[0].description
      const weatherDegree = data.main.temp
      weatherCelcius = Math.floor(weatherDegree - 273)
      console.log(weatherDegree);
      main.innerText = description
      degree.innerText = ` ${weatherCelcius} °C`
      let icon1 = data.weather[0].icon;
    
      console.log(icon1);
      weatherImg.src = `http://openweathermap.org/img/w/` + icon1 + `.png`
      locations.innerText = inputVal.value
      date.innerHTML = time1
      inputVal.value = ""

    })
      .catch(err => alert('You entered Wrong city name'))
  }
  getAbuja()
})
let ghh = new Date().toLocaleString("en-US", {timeZone: "africa/lagos"})
console.log(ghh);