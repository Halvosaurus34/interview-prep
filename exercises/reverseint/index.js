// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var revString = ""
    var stringInt = n.toString()
    console.log(stringInt)
    if (stringInt[0]==="-"){
        stringInt = stringInt.split("").slice(1).concat("-")
        console.log(stringInt)
    }
    for (var i = stringInt.length-1; i>=0; i-- ){
        revString += stringInt[i]
    }
    return parseInt(revString)
}

module.exports = reverseInt;
