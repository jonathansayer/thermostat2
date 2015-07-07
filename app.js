thermostat = new Thermostat;

document.getElementById("temperature").innerHTML = thermostat.temp;

document.getElementById("up").addEventListener("click",  function() {
  thermostat.increase();
  document.getElementById("temperature").innerHTML = thermostat.temp;
  });

document.getElementById("down").addEventListener("click", function() {
  thermostat.decrease();
  document.getElementById("temperature").innerHTML = thermostat.temp;
});


document.getElementById("reset").addEventListener("click", function() {
  thermostat.resetTemp();
  document.getElementById("temperature").innerHTML = thermostat.temp;
});

document.getElementById('powersaver').addEventListener("click", function() {
  thermostat.powerSave = !thermostat.powerSave;
});
