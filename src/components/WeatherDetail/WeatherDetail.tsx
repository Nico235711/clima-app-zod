import { Weather } from "../../hooks/useWeather"
import { formatTerperture } from "../../util"
import styles from './WeatherDetail.module.css'

type WeatherDetailProps = {
  weather: Weather
}

const WeatherDetail = ({ weather }: WeatherDetailProps) => {

  return (
    <div className={styles.container}>
      <h2>Clima de: {weather.name}</h2>
      <p>Temperatura: <span className={styles.span}>{formatTerperture(weather.main.temp)}&deg;C</span></p>
      <div className={styles['container-flex']}>
        <p>MAX: <span className={styles.span}>{formatTerperture(weather.main.temp_max)}&deg;C</span></p>
        <p>MIN: <span className={styles.span}>{formatTerperture(weather.main.temp_min)}&deg;C</span></p>
      </div>
    </div>
  )
}

export default WeatherDetail