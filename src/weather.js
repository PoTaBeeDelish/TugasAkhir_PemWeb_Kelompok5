export const fetchWeather = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=malang&units=metric&appid=d95e1800f92864a5600b2a4400a3ecac"
  )
    .then((response) => response.json())
    .catch((err) => alert("No weather found."));
};