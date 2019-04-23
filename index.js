// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const result =  drivers.map( function (elem) {
     return elem.toLowerCase(); 
    } );
    return result;
}

function nameToAttributes(drivers) {
    const result = drivers.map( function(elem) {
        let myObj = {};
        let name = elem.split(" ");
        myObj.firstName = name[0]; 
        myObj.lastName = name[1];
        return myObj;
    } );
    return result;
}

function attributesToPhrase(drivers) {
    const result = drivers.map( function(elem) {
        return `${elem.name} is from ${elem.hometown}`;
    } );
    return result;
}