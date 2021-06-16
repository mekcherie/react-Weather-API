import { useState } from 'react'
import './Weather.css'

import RadioButton from './RadioButton'
import WeatherDisplay from './WeatherDisplay'

function Weather() {
    const [zip, setZip] = useState('')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState(null)


    async function fetchWeather() {
        const apikey = 'f5c6e62f2e4e23e0ec84380d6920d253' 
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
        const res = await fetch(path)
        const json = await res.json()
        console.log(json)
        const temp = json.main.temp
        const feelsLike = json.main.feels_like
        const description  = json.weather[0].description 
        setData({
            temp,
            feelsLike,
            description 
        })
       

}
    return (
        <div className="Weather">  
        {data && <WeatherDisplay { ...data} />}
            <form onSubmit={e => {
                e.preventDefault()
                fetchWeather()
            }}>
                <input 
                    placeholder="Enter Zip code"
                    value={zip}
                    onChange={e=> setZip(e.target.value)}
                    /> 
                <button type="sumbit">Submit</button>

                <select
                    value={unit}
                    onChange = {e=> setUnit(e.target.value)}
                >
                    <option value="metric">Celcius</option>
                    <option value="imperial">Fahrenheit</option>
                    <option value="standard">Kelvin</option>
                </select>

                <RadioButton
                label = "metric"
                name="unit"
                checked={unit === "metric" }
                onChange={() =>setUnit('metric')}
                />

                <RadioButton
                label = "imperial"
                name="unit"
                checked={unit === "imperial" }
                onChange={() =>setUnit('imperial')}
                />

                <RadioButton
                label = "standard"
                name="unit"
                checked={unit === "standard" }
                onChange={() =>setUnit('standard')}
                />
            </form>
        </div>
    )
}

export default Weather