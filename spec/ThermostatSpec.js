describe('Thermostat', function() {

  var thermostat; // do you need to do this?

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temp).toBe(20);
  });
  it('can have its temperature increased', function() {
    thermostat.increase();
    expect(thermostat.temp).toBe(21);
  });

  it('can have its temperature decreased', function() {
    thermostat.decrease();
    expect(thermostat.temp).toBe(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (i=0; i < 15; i++) {
      thermostat.decrease();
    };
    expect(thermostat.temp).toBe(10);
  });

  it('has powerSave mode on by default', function() {
    expect(thermostat.powerSave).toBe(true);
  });

  it('has a maximum temperature of 25 when powerSave mode is on', function() {
    for (i=0; i < 10; i++) {
      thermostat.increase();
    };
    expect(thermostat.temp).toBe(25);
  });

  it('has a maximum temperature of 32 when powerSave mode is off', function() {
    thermostat.powerSave = false
    for (i=0; i < 15; i++) {
      thermostat.increase();
    };
    expect(thermostat.temp).toBe(32);
  });

  it('can be reset to 20', function() {
    thermostat.increase();
    thermostat.resetTemp();
    expect(thermostat.temp).toBe(20);
  });

  it('returns "green" when the temperature is below 18', function() {
    for (i=0; i < 3; i++) {
      thermostat.decrease();
    }
    expect(thermostat.colour).toBe("green");
  });

  it('returns "yellow" when the temperature is between 18 and 24', function() {
    expect(thermostat.colour).toBe("yellow");
  });

  it('returns "red" when the temperature is over 24', function() {
    for (i=0; i < 5; i++) {
      thermostat.increase();
    }
    expect(thermostat.colour).toBe("red");
  });
});
