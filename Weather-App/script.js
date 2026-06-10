let last = document.getElementById('humidty2-h2')
let imgn = document.getElementById('imgn');
let Oops = document.getElementById('Oops');
let humidty2h2 = document.getElementById('humidty2-h2');
let humidty2p = document.getElementById('humidty2-p');
let speed2h2 = document.getElementById('speed2-h2');
let speed2p = document.getElementById('speed2-p');
let sp1 = document.getElementById('sp1');
let hm1 = document.getElementById('hm1');
let celsiush1 = document.getElementById('celsiush1');
let celsiusp = document.getElementById('celsiusp');
async function weather(){
    let container = document.querySelector('.container');
    container.id = 'contntainer-animation';
    let city = document.getElementById('city').value;
    const apiKey = "5afbbe77d558e870bc4541eed3d387e7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(data.cod != 200){
        imgn.src = './images/404.png';
        Oops.textContent = 'Oops! Invalid Location :/';
        humidty2p.textContent = ''
        speed2p.textContent = '';
        humidty2h2.textContent = '';
        speed2h2.textContent = '';
        sp1.src = '';
        hm1.src = '';
        celsiush1.textContent = '';
        celsiusp.textContent = '';


    }else{
        Oops.textContent = '';
        // CLOUDS
        if(data.weather[0].main === 'Clouds'){
            imgn.src = './images/clouds.avif';
            imgn.style.scale = '0.5';
            imgn.style.marginTop = '-70px';

            let celsius = data.main.temp - 273.15;
            celsiush1.textContent = `${Math.floor(celsius)}⁰C`;
            celsiusp.textContent = `${data.weather[0].description}`;
            console.log(celsiush1.textContent);
            sp1.src = './images/speed.png';
            hm1.src = './images/humidty.png';
            let topSpeed = data.wind.speed * 3.6;
            speed2h2.textContent = `${Math.floor(topSpeed)}KM/H`;
            speed2p.textContent = 'Wind Speed';
            let Tophumidty = data.main.humidity;
            humidty2h2.textContent = Tophumidty + '%';
            humidty2p.textContent = 'Humidty';
        }
        // RAIN
        else if(data.weather[0].main === 'Rain'){
            imgn.src = './images/heavy-rain.png';
            imgn.style.scale = '0.5';
            imgn.style.marginTop = '-70px';

            let celsius = data.main.temp - 273.15;
            celsiush1.textContent = `${Math.floor(celsius)}⁰C`;
            celsiusp.textContent = `${data.weather[0].description}`;
            console.log(celsiush1.textContent);
            sp1.src = './images/speed.png';
            hm1.src = './images/humidty.png';
            let topSpeed = data.wind.speed * 3.6;
            speed2h2.textContent = `${Math.floor(topSpeed)}KM/H`;
            speed2p.textContent = 'Wind Speed';
            let Tophumidty = data.main.humidity;
            humidty2h2.textContent = Tophumidty + '%'
            humidty2p.textContent = 'Humidty';
        }
        // CLEAR
        else if(data.weather[0].main === 'Clear'){
            imgn.src = './images/clear.png';
            imgn.style.scale = '0.5';
            imgn.style.marginTop = '-70px';

            let celsius = data.main.temp - 273.15;
            celsiush1.textContent = `${Math.floor(celsius)}⁰C`;
            celsiusp.textContent = `${data.weather[0].description}`;
            console.log(celsiush1.textContent);
            sp1.src = './images/speed.png';
            hm1.src = './images/humidty.png';
            let topSpeed = data.wind.speed * 3.6;
            speed2h2.textContent = `${Math.floor(topSpeed)}KM/H`;
            speed2p.textContent = 'Wind Speed';
            let Tophumidty = data.main.humidity;
            humidty2h2.textContent = Tophumidty + '%';
            humidty2p.textContent = 'Humidty';
        }
        // SNOW
        else if(data.weather[0].main === 'Snow'){
            imgn.src = './images/winter.png';
            imgn.style.scale = '0.5';
            imgn.style.marginTop = '-70px';

            let celsius = data.main.temp - 273.15;
            celsiush1.textContent = `${Math.floor(celsius)}⁰C`;
            celsiusp.textContent = `${data.weather[0].description}`;
            console.log(celsiush1.textContent);
            sp1.src = './images/speed.png';
            hm1.src = './images/humidty.png';
            let topSpeed = data.wind.speed * 3.6;
            speed2h2.textContent = `${Math.floor(topSpeed)}KM/H`;
            speed2p.textContent = 'Wind Speed';
            let Tophumidty = data.main.humidity;
            humidty2h2.textContent = Tophumidty + '%';
            humidty2p.textContent = 'Humidty';
        }
        else if(data.weather[0].main === 'Thunderstorm'){
            imgn.src = './weather/images/thunderstorm.png';
            imgn.style.scale = '0.5';
            imgn.style.marginTop = '-70px';

            let celsius = data.main.temp - 273.15;
            celsiush1.textContent = `${Math.floor(celsius)}⁰C`;
            celsiusp.textContent = `${data.weather[0].description}`;
            console.log(celsiush1.textContent);
            sp1.src = './images/speed.png';
            hm1.src = './images/humidty.png';
            let topSpeed = data.wind.speed * 3.6;
            speed2h2.textContent = `${Math.floor(topSpeed)}KM/H`;
            speed2p.textContent = 'Wind Speed';
            let Tophumidty = data.main.humidity;
            humidty2h2.textContent = Tophumidty + '%';
            humidty2p.textContent = 'Humidty';
        }
    }
}
