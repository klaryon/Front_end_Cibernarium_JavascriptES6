//Create a function that accepts a string and returns this string reversed. Use arrow function, spread operator and .reverse() method.

let name = "Clarissa";

let reverseString = (string) => {
    let arrayString = [...string]; /* spread operator turns string into an array of characters */
    let stringReversed = arrayString.reverse();
    
    return stringReversed.join(''); /* .join('') turns array into a string */
}

console.log(reverseString(name));