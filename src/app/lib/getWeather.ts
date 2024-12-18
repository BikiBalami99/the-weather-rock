import { fetchWeatherRoute } from "../api/route";

import type { TemperatuteAndTimes } from "@/types/temperatureAndTimes";

export async function getWeather(
  lat: string,
  lon: string
): Promise<TemperatuteAndTimes> {
  const dataFromApi = await fetchWeatherRoute(lat, lon);
  const timesArray = dataFromApi.hourly.time;
  const temperatureArray = dataFromApi.hourly.temperature_2m;
  return [temperatureArray, timesArray];
}
