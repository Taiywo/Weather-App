const degree = document.getElementById('degree')
const main = document.getElementById('main')
const date = document.getElementById('date')

  
let url = "https://api.openweathermap.org/data/2.5/weather?q=abuja&appid=6ec2215b6f05631de0ba19b062a81809"
let getAbuja = ()=>{
  fetch(url).then(response =>{
    return response.json()
  }).then(data =>{
console.log(data.weather);
console.log(data.weather[0].description);
const description = data.weather[0].description
const weatherDegree = data.main.temp
weatherCelcius = Math.floor(weatherDegree - 273.15)
console.log(weatherDegree);
main.innerText = description
degree.innerText =` ${weatherCelcius} degree`

  })
}
getAbuja()