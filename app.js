thermostat = new Thermostat;

$('#temperature').text(thermostat.temp);
// document.getElementById("temperature").innerHTML = thermostat.temp;

$("#up").on('click',  function() {
  thermostat.increase();
  $('#temperature').text(thermostat.temp);
  changeColour();
  });

$("#down").on('click', function() {
  thermostat.decrease();
  $('#temperature').text(thermostat.temp);
  changeColour();
});

$("#reset").on('click', function() {
  thermostat.resetTemp();
  $('#temperature').text(thermostat.temp);
  changeColour();
});

$('#powersaver').on("click", function() {
  thermostat.powerSave = !thermostat.powerSave;
});

var changeColour = function() {
  document.getElementById('temperature').style.color = thermostat.colour;
};