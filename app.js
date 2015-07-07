thermostat = new Thermostat;

document.getElementById("temperature").innerHTML = thermostat.temp;

document.getElementById("up").addEventListener("click",  function() {
  thermostat.increase();
  document.getElementById("temperature").innerHTML = thermostat.temp;
  changeColour();
  });

document.getElementById("down").addEventListener("click", function() {
  thermostat.decrease();
  document.getElementById("temperature").innerHTML = thermostat.temp;
  changeColour();
});

document.getElementById("reset").addEventListener("click", function() {
  thermostat.resetTemp();
  document.getElementById("temperature").innerHTML = thermostat.temp;
  changeColour();
});

document.getElementById('powersaver').addEventListener("click", function() {
  thermostat.powerSave = !thermostat.powerSave;
});

var changeColour = function() {
  document.getElementById('temperature').style.color = thermostat.colour;
};
