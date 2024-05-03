import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {

  const fetchWeather = async (search: SearchType) => {

    const { city, country } = search
    const appID = import.meta.env.VITE_API_KEY
    
    try {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${appID}`
      
      const { data } = await axios(geoURL)
      const lat = data[0].lat
      const lon = data[0].lon
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`
      
      const { data: weatherData } = await axios(weatherURL)
      console.log(weatherData.main);
      

    } catch (error) {
      console.error(error);
      
    }
  }

  return {
    fetchWeather
  }
}