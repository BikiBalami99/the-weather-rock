export async function fetchWeatherData(lat: number, lon: number) {
  const baseURL = "https://api.open-meteo.com/v1/forecast?";

  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),
    hourly: "temperature_2m",
  });

  const apiURL = `${baseURL}${params.toString()}`;

  try {
    const res = await fetch(apiURL);
    if (!res.ok)
      throw new Error(`Error fetching data: ${res.status} - ${res.statusText}`);

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
