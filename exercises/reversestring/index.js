// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var revString = []
    for (var i = str.length-1; i>=0; i-- ){
        revString.push(str[i])
    }
    revString = revString.join('')

    return revString
}

module.exports = reverse;
