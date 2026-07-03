/**
 *
 * @param {number} time - Unix time in seconds returns it in miliseconds
 */
export function convertDate(time) {
  return time * 1000;
}

export function getDayLabel(index, timeInSeconds) {
  if (index === 0) {
    return "Today";
  }
  const date = new Date(convertDate(timeInSeconds));
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

export function formatDate() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const year = today.getFullYear();
  return `${month}/${day}/${year}`;
}
