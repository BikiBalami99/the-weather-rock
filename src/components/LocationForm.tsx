"use client";

import { useEffect, useState } from "react";
import { getWeather } from "@/app/lib/getWeather";

import type { TemperatuteAndTimes } from "@/types/temperatureAndTimes";

export default function LocationForm() {
  const [latitude, setLatitude] = useState("35.6764");
  const [longitude, setLongitude] = useState("139.6500");

  // temperatureAndTimes is an object containing two arrays: one with temperatures and the other with corresponding times, with matching indices.
  const [temperatureAndTimes, setTemperatureAndTimes] =
    useState<TemperatuteAndTimes | null>(null);
  const [temperatureArray, setTemperatureArray] = useState<number[]>([]);
  const [timesArray, setTimesArray] = useState<string[]>();

  useEffect(() => {
    if (temperatureAndTimes) {
      setTemperatureArray(temperatureAndTimes[0]);
      setTimesArray(temperatureAndTimes[1]);
    }
  }, [temperatureAndTimes]);

  // Function that will use the getWeather function return an array of temp and times.
  async function fetchData() {
    const data = await getWeather(latitude, longitude);
    setTemperatureAndTimes(data as TemperatuteAndTimes);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchData();
  }

  console.log(`temperatureAndTimes`);
  console.log(temperatureAndTimes);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="latitude"
          placeholder="placeholder"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="number"
          name="longitude"
          placeholder="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button type="submit">Find</button>
      </form>

      <div>
        {timesArray?.map((time, index) => {
          return (
            <ul key={time}>
              <li>{time}</li>
              <li>{temperatureArray[index]} °C</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
