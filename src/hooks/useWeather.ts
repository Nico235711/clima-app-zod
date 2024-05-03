import { useState } from 'react';
import axios from "axios";
import { SearchType } from "../types";
import { z } from "zod";

// zod
const WeatheSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number()
  })
})

export type Weather = z.infer<typeof WeatheSchema>

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>({
    name: "",
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0
    }
  })

  const fetchWeather = async (search: SearchType) => {

    const { city, country } = search
    const appID = import.meta.env.VITE_API_KEY
    
    try {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${appID}`
      
      const { data } = await axios(geoURL)
      const lat = data[0].lat
      const lon = data[0].lon
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`
      
      // Zod
      const { data: weatherData } = await axios(weatherURL)
      const result = WeatheSchema.safeParse(weatherData)
      if (result.success) {
        setWeather(result.data)
      }
      

    } catch (error) {
      console.error(error);
      
    }
  }

  return {
    weather,
    fetchWeather
  }
}