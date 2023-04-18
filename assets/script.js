//write global variables here
var searchHistory = [];
var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var weatherApiKey = "9ca8dda842fef3ac1747fad0ec02a129";

var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search-input");
var searchHistoryEl = document.querySelector("#history");
var forecastEl = document.querySelector("#forecast");
var todayEl = document.querySelector("#today");

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

