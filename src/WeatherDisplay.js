function WeatherDisplay(props) {
    const {temp, feelsLike, description, humidity } = props
    return (
        <div className="WeatherDisplay">
        <h1>{temp} </h1>
        <h3>Feels Like: {feelsLike}</h3>
        <h5>Humidity: {humidity}</h5>
        <h6>{description}</h6>
        </div>
    )
}

export default WeatherDisplay