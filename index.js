// function findMatching(arrayNames, string){
//     let names = arrayNames.filter(driver => driver.toLowerCase() === string.toLowerCase())
//     return names
// }
const findMatching= (arrayNames, string) => {
    return arrayNames.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (arrayDrivers, string) => {
   return arrayDrivers.filter(drivers => drivers[0] === string[0])
    
}

const matchName = (arrayDrivers, string) => {
    return arrayDrivers.filter(drivers => drivers.name === string)
}




























// function  fuzzyMatch(arrayNames, string){
//     let names = arrayNames.filter(driver => driver[0] === string[0])
    
//     return names
// }

// function matchName(arrayNames, string){
//     let names = arrayNames.filter(driver => driver.name === string)
//     return names  
// }

