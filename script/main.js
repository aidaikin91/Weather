
const input = document.querySelector('#search-bar')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

const API='http://api.openweathermap.org/data/2.5/weather?q=';
const key ='&appid=b067377a72c98ae6963cdae2e35408d9';


const getWeather = async(e)=>{
    e.preventDefault()
const value = input.value    
const uri = API+value+key
const req = await fetch(uri)
const res = await req.json()
    
setTimeout(() => {
    output.innerHTML = ''
    renderWeather(res)
}, 1000);
}

const renderWeather =(data)=>{
    console.log(data);
    let card = document.createElement('div')
    card.className = 'card'
    let name = document.createElement('h3')
    let name_country = document.createElement ('h3')
    let imag = document.createElement('img')
    let temp = document.createElement('p')
    let description = document.createElement('p')
    let humidity = document.createElement('p')
    let speed = document.createElement('p')
    

    name.innerHTML = 'City : ' + data.name;
    name_country.innerHTML = 'Country : ' +   data.sys.country

    if(data.weather[0].main === 'Clouds'){
      console.log(imag.src = './399-3999742_weather-icon-png-image-weather-app-icon-transparent.png');
    }else if(data.weather[0].main === 'Rain'){
        console.log(imag.src = './185-1854252_cloud-rain-and-thunder-weather-icon-thunder-and.png');
    }else if(data.weather[0].main === 'Sun', 'Clear'){
      console.log(imag.src = './9-99892_simple-weather-icons-sunny-sunny-weather-icon-png.png');
    }else if(data.weather[0].main === 'Snow'){
      console.log(imag.src = './625-6259281_cartoon-png-download-cartoon-transparent-png.png');
    }else if (data.weather[0].main === 'Wind'){
       console.log(imag.src = './399-3999789_weather-icon-transparent-background-tornado-clipart-hd-png.png');
    }
   
    imag.className = 'imag'
    temp.innerHTML = 'Temperature : ' + Math.round(data.main.temp-273) + '˚C ';
    description.innerHTML = data.weather[0].description;
    humidity.innerHTML = 'Humidity : ' + data.main.humidity + ' % ';
    speed.innerHTML = 'Wind speed : ' + data.wind.speed +  ' km/h ';
    
    
    output.append(card)
    card.append(input, btn, name, name_country, imag, temp, description, humidity, speed)
    card.classList.add('card')
}

btn.onclick=(e)=>{
    getWeather(e)
    input.value=''
    output.innerHTML=''
}
  