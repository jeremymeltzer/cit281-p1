/*
    CIT 281 Project 1
    Name: Jeremy Meltzer
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let str = ''
let letters = ['a','b','c','d','e','f','g','h','i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for (let i = 0; i < getRandomInteger(5, 25); i++) {
    str += letters[getRandomInteger(0,26)]
}

console.log(str)
