const loadingEl = document.getElementById("loading-message");
const errorEl = document.getElementById("error-message");
const resultsEl = document.getElementById("forecast-results");

export function showLoading() {
  loadingEl.hidden = false;
  errorEl.hidden = true;
  resultsEl.hidden = true;
}

export function showError(message) {
  errorEl.textContent = message;
  errorEl.hidden = false;
  loadingEl.hidden = true;
  resultsEl.hidden = true;
}

export function showResults(html) {
  resultsEl.hidden = false;
  loadingEl.hidden = true;
  errorEl.hidden = true;
  resultsEl.innerHTML = html;
}
