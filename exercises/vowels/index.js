// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var cleanString = str.replace(/[^\w]/g, "").toLowerCase()
    const checker = ['a', 'e', 'i', 'o', 'u']
    var count = 0
    for (var char of cleanString) {
        if (checker.includes(char)){
            count ++
        } 
    }
    return count
}

module.exports = vowels;

//original try
// var cleanString = str.replace(/[^\w]/g, "").toLowerCase()
//     var count = 0
//     for (var char of cleanString) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o'|| char === 'u'){
//             count ++
//         } 
//     }
//     return count