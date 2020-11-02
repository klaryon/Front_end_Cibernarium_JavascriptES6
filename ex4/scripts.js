// With the given string array, print to console the complete phrase using .reduce()

// var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Print to console: 'a long time ago in a galaxy far far away'

// Note: "join" not necessary.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let epicPhrase = epic.reduce((sum, currentValue) => {
    return `${sum} ${currentValue}`
})
console.log(epicPhrase);