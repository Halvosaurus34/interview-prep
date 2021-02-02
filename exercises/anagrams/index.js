// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    var strA = stringA.replace(/[^\w]/g, "").toLowerCase()
    var strB = stringB.replace(/[^\w]/g, "").toLowerCase()
    var charA = {}
    var charB = {}
    for (var char of strA) {
        if (!charA[char]){
            charA[char] = 1
        } else {
            charA[char]++
        }
    }
    for (var char of strB) {
        if (!charB[char]){
            charB[char] = 1
        } else {
            charB[char]++
        }
    }
    if (strA.length === strB.length){
        for (var keyA in charA){
            if (!charB[keyA]){
                return false
            } else if (charB[keyA] !== charA[keyA]){
                return false
            } else {
                console.log(charB[keyA])
                return true
            }
        }
    } else {
        return false
    }
}

module.exports = anagrams;
