// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(array) {
  return array.map(function(driver) {
    return Object.assign({}, {firstName: driver.split(" ")[0]}, { lastName: driver.split(" ")[1]})
  })
}

function attributesToPhrase (object) {
  return object.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
