import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {

  const fetchWeather = async (search: SearchType) => {

    const { city, country } = search
    const appID = import.meta.env.VITE_API_KEY
    
    try {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${appID}`
      
      const { data } = await axios(geoURL)

    } catch (error) {
      console.error(error);
      
    }
  }

  return {
    fetchWeather
  }
}