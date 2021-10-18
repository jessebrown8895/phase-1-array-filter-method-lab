const findMatching = (arrayDrivers, string) => {
    return arrayDrivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (arrayDrivers, string) => {
   return arrayDrivers.filter(drivers => drivers[0] === string[0])
    
}

const matchName = (objectDrivers, string) => {
    console.log(objectDrivers)
    return objectDrivers.filter(drivers => drivers.name === string)
}



























 

