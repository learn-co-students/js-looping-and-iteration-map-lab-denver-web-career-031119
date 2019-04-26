// Code your solution in this file.
function lowerCaseDrivers(list){

  return list.map(function(name){
    return name.toLowerCase();
  });
}

// function nameToAttributes(list){
//   list.map(function(name){
//     const givenName = name.split(' ')[0];
//       const surName = name.split(' ')[1];
//       return {firstName: givenName, lastName: surName};
//   })
// }


//
function nameToAttributes(list) {
  return list.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}


function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return "${driver.name}is from ${driver.hometown}"
  })
}
