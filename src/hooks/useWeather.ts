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

const initialState = {
  name: "",
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0
  }
}

export default function useWeather() {
  const [weather, setWeather] = useState<Weather>(initialState)

  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const fetchWeather = async (search: SearchType) => {

    const { city, country } = search
    const appID = import.meta.env.VITE_API_KEY
    setWeather(initialState)
    setLoading(true)
    setNotFound(false)

    try {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${appID}`
      
      const { data } = await axios(geoURL)

      if (!data[0]) {
        setNotFound(true)
        return
      }
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
    } finally {
      setLoading(false)
    }
  }

  return {
    weather,
    loading,
    notFound,
    fetchWeather
  }
}