// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    var string = ""
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            if (j<=i){
                string+="#"
            } else {
                string+=" "
            }
        }
        console.log(string)
        string=""
    }   
}

module.exports = steps;
