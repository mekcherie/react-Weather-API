import { useState } from 'react'
import './Weather.css'

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

                <select onChange = {e=> setUnit(e.target.value)}>
                    <option value="metric">Celcius</option>
                    <option value="imperial">Fahrenheit</option>
                    <option value="standard">Kelvin</option>
                </select>
            </form>
        </div>
    )
}

export default Weather