

thermostat = new Thermostat;

$('#temperature').text(thermostat.temp + " degrees Celsius");
document.getElementById('temperature').style.color = thermostat.colour;


$("#up").on('click',  function() {
  thermostat.increase();
  $('#temperature').text(thermostat.temp + " degrees Celsius");
  changeColour();
  });

$("#down").on('click', function() {
  thermostat.decrease();
  $('#temperature').text(thermostat.temp + " degrees Celsius");
  changeColour();
});

$("#reset").on('click', function() {
  thermostat.resetTemp();
  $('#temperature').text(thermostat.temp + " degrees Celsius");
  changeColour();
});

$('#powersaver').on("click", function() {
  thermostat.powerSave = !thermostat.powerSave;
});

$("#city" ).on("change", function() { 
  getWeather();
});

var city = function() {
  return $('#city').val();
}

$.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city()+'&units=metric',
  {},
  function (response) {
    $("#outside_temp").text("The Temperature in " + city()+" is: "+response.list[0].main.temp + " degrees Celsius");
  }); 

$.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city()+'&units=metric',
  {},
  function (response) {
    $("#weather").text(response.list[0].weather[0].description);
  }); 





var getWeather = function() {

city()

$.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city()+'&units=metric',
  {},
  function (response) {
    $("#outside_temp").text("The Weather in " + city()+" is: "+response.list[0].main.temp + " degrees Celsius");
  });

$.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city()+'&units=metric',
  {},
  function (response) {
    $("#weather").text(response.list[0].weather[0].main);
  }); 

};

var changeColour = function() {
  document.getElementById('temperature').style.color = thermostat.colour;
};






