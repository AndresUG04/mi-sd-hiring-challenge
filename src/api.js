const GEO_ENDPOINT = "https://se-weather-api.herokuapp.com/api/v1/geo";
const FORECAST_ENDPOINT =
  "https://se-weather-api.herokuapp.com/api/v1/forecast";

export async function getGeoData(zipCode) {
  const response = await fetch(`${GEO_ENDPOINT}?zip_code=${zipCode}`);
  if (!response.ok) {
    throw new Error("Could not find location for the provided zip code.");
  }
  return response.json();
}

export async function getForecastData(latitude, longitude, date) {
  const response = await fetch(
    `${FORECAST_ENDPOINT}?latitude=${latitude}&longitude=${longitude}&date=${date}`,
  );
  if (!response.ok) {
    throw new Error("Could not fetch forecast data.");
  }
  return response.json();
}
