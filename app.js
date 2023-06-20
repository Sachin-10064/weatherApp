const key  = "Vg4kxDZTAHIyhFraYfNZVn5hpjiTbfuA";




function city(value){
    console.log(value);
    getcity(value).then(data =>  {
    console.log(data.LocalizedName);
    document.getElementById("cityname").innerHTML=data.LocalizedName;
    return current_weather(data.Key);
}).then(data => {
    console.log(data);
    WeatherText.innerHTML=data.WeatherText;
    if(data.WeatherIcon <= 9){
       icon = `https://developer.accuweather.com/sites/default/files/0${data.WeatherIcon}-s.png` 
    }else{
        icon = `https://developer.accuweather.com/sites/default/files/${data.WeatherIcon}-s.png` 
    }
    document.body.style.backgroundImage = `url('./img/${data.WeatherIcon}.jpg')`;
    document.getElementById('weather_icon').setAttribute("src",icon)
    temp.innerHTML=data.Temperature.Metric.Value+"<sup>o</sup>C"
}).catch(err => {
    console.log(err);
    cityname.innerHTML="Not found any location"
})
}
// console.log(city); 

const getcity = async (city)=>{
    const location = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;


    const res = await fetch(location);
    const data = await res.json();
// console.log(data[0].Key);
    return data[0];
};
const current_weather = async(id)=>{
    const weather = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`

    const res = await fetch(weather);
    const data = await res.json();

    // console.log(data);
    return data[0];
}
