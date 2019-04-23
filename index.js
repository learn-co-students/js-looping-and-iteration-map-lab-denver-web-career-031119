function lowerCaseDrivers (drivers) {
  return drivers.map (function (driver) {return driver.toLowerCase()})
}

function nameToAttributes (drivers) {
  return drivers.map (function (driver) {
    let driverName = driver.split(' ');
    return Object.assign( {}, {firstName: driverName[0], lastName: driverName[1]});
  });
}

function attributesToPhrase (drivers) {
  return drivers.map (function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
