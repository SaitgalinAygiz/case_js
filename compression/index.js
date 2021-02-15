//задача 1.1

const sampleInput1 = 'aaaabbcaa';
const sampleInput2 = 'abc'
const sampleInput3 = 'AAAAabbbbcCCCC'

console.log(stringCompression(sampleInput1)) //a4b2c1a2
console.log(stringCompression(sampleInput2)) //a1b1c1
console.log(stringCompression(sampleInput3)) //A4a1b4c1C4


function stringCompression (str) {
    let outputString = ''
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        counter++;
        if (str[i] !== str[i + 1]) {
            outputString += str[i] + counter
            counter = 0
        }
    }

    return outputString
}