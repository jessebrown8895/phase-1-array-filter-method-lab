function findMatching(arrayNames, string){
    let names = arrayNames.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return names
}

function  fuzzyMatch(arrayNames, string){
    let names = arrayNames.filter(driver => driver[0] === string[0])
    
    return names
}

function matchName(arrayNames, string){
    let names = arrayNames.filter(driver => driver.name === string)
    return names  
}

