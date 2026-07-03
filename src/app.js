import { formatDate } from "./utils";
import { renderForecast } from "./render";
import { getGeoData, getForecastData } from "./api";
import { showResults, showError, showLoading } from "./ui";

async function handleFormSubmit(zipCode) {
  showLoading();

  try {
    const geoData = await getGeoData(zipCode);
    const date = formatDate();
    const forecastData = await getForecastData(
      geoData.latitude,
      geoData.longitude,
      date,
    );
    const html = renderForecast(geoData.city, forecastData);
    showResults(html);
  } catch (error) {
    console.error(error);
    showError(error.message || "Something went wrong. Please try again.");
  }
}

const zipForm = document.getElementById("zip-code-form");
const zipInput = document.getElementById("zip-code-input");

zipForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const zipCode = zipInput.value.trim();
  if (!zipCode) return;

  handleFormSubmit(zipCode);
});
