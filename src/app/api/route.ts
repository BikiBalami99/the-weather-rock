export async function fetchWeatherRoute(lat: string, lon: string) {
  const baseURL = "https://api.open-meteo.com/v1/forecast?";

  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    hourly: "temperature_2m",
  });

  const apiURL = `${baseURL}${params.toString()}`;

  try {
    const res = await fetch(apiURL);
    if (!res.ok)
      throw new Error(`Error fetching data: ${res.status} - ${res.statusText}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
