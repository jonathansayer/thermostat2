thermostat = new Thermostat;

document.getElementById("temperature").innerHTML = thermostat.temp;

document.getElementById("up").addEventListener("click",  function() {
  thermostat.increase();
  document.getElementById("temperature").innerHTML = thermostat.temp;
  }
);
