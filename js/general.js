window.onload = function(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let wData = JSON.parse(this.responseText);
			document.getElementById("temp").innerHTML = "Current Temperature: " + wData.temp; 
			document.getElementById("highTemp").innerHTML = "High: " + wData.highTemp;
			document.getElementById("lowTemp").innerHTML = "Low: " + wData.lowTemp;
			document.getElementById("windSpeed").innerHTML = "Wind Speed: <br>" + wData.wind; 
			document.getElementById("rain").innerHTML = "Precipitation: <br>" + wData.rainToday; 
			document.getElementById("windChill").innerHTML = "Wind Chill: <br>" + wData.windChill; 
			document.getElementById("dewPoint").innerHTML = "Dew Point: <br>" + wData.dewPoint; 
			document.getElementById("baroPressure").innerHTML = "Pressure: <br>" + wData.barometer; 
			document.getElementById("altitude").innerHTML = "Altitude: " + wData.altitude; 
			document.getElementById("lastRefresh").innerHTML = "Last Refresh: " + wData.timeUpdated; 
			}
		}
		xmlhttp.open("GET", "data.json", true);
		xmlhttp.send();
};