import { useState } from 'react'
import './Weather.css'

import RadioButton from './RadioButton'

function Weather() {
    const [zip, setZip] = useState('95123')
    const [unit, setUnit] = useState('')
    return (
        <div className="Weather">  
            <h1>{zip} {unit}</h1> 
            <form>
                <input 
                    placeholder="Enter Zip code"
                    value={zip}
                    onChange={e=> setZip(e.target.value)}
                    /> 
                <button>Submit</button>

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