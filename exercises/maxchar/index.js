// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {}
    var maxChar = 0
    var maxCharInd = null
    for (var char of str) {
        if (!chars[char]){
            chars[char] = 1
        } else {
            chars[char]++
        }
    }
   Object.values(chars).map((el,ind)=>{
       if (el>maxChar){
           maxChar=el
           maxCharInd = ind
       } 
   })
    console.log(Object.keys(chars)[maxCharInd])
    return Object.keys(chars)[maxCharInd]
}

module.exports = maxChar;
