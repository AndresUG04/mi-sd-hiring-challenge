import { getDayLabel } from "./utils";
import cloudyIcon from "../img/cloudy.png";
import rainIcon from "../img/rain.png";
import snowIcon from "../img/snow.png";
import sunnyIcon from "../img/sunny.png";

const weatherIcons = {
  cloudy: cloudyIcon,
  rain: rainIcon,
  snow: snowIcon,
  sunny: sunnyIcon,
};

function getWeatherIcon(iconKey) {
  return weatherIcons[iconKey];
}

export function buildForecastCard(day, index) {
  const dayLabel = getDayLabel(index, day.time);
  const iconSrc = getWeatherIcon(day.icon);

  return `
        <div class="forecast-card">
        <div class= "forecast-card-header">
            <span>${dayLabel}:</span>
        </div>
        <div class="forecast-card-body">
            <img src="${iconSrc}" alt="${day.icon}" class="forecast-card-icon"/>
            <div class="forecast-card-info">
                <p class="forecast-card-summary">${day.summary}</p>
                <p class="forecast-card-temperature">
                    <strong>High: ${Math.round(day.temperatureHigh)}° / ${Math.round(day.temperatureLow)}°F</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

export function renderForecast(cityName, forecastData) {
  const cards = forecastData.daily.data
    .slice(0, 3)
    .map((day, index) => buildForecastCard(day, index))
    .join("");

  return `
    <h2>Weather forecast for ${cityName}</h2>
    <div class="forecast-container">
        ${cards}
    </div>
    `;
}
