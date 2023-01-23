// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
    if (!max){
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
    return list[randomInt(0, list.length -1)]
}
