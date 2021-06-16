function WeatherDisplay(props) {
    const {temp, feelsLike, description } = props
    return (
        <div className="WeatherDisplay">
        <h1>{temp} </h1>
        <h3>Feels Like: {feelsLike}</h3>
        <h5>{description}</h5>
        </div>
    )
}

export default WeatherDisplay