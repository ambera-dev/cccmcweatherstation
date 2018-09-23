let wData = JSON.parse(data);
window.onload = function(){
document.getElementById("temp").innerHTML = "Temp: " + wData.temp; 
document.getElementById("highTemp").innerHTML = "High: "+wData.highTemp;
document.getElementById("lowTemp").innerHTML = "Low: "+wData.lowTemp;
document.getElementById("windSpeed").innerHTML = "Wind Speed: <br>"+wData.wind; 
document.getElementById("rain").innerHTML = "Precipitation: <br>"+wData.rainToday; 
document.getElementById("windChill").innerHTML = "Wind Chill: "+wData.windChill; 
document.getElementById("dewPoint").innerHTML = "Dew Point: "+wData.dewPoint; 
document.getElementById("baroPressure").innerHTML = "Pressure: "+wData.barometer; 
document.getElementById("altitude").innerHTML = "Altitude: "+wData.altitude; 
document.getElementById("lastRefresh").innerHTML = "Last Refresh: "+wData.timeUpdated; 
};