// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, steps = '') {
    //recursive

    if (row === n){
        return
    }

    if (steps.length === n*2-1){
        console.log(steps)
        return pyramid(n, row+1)
    }

    const midPoint = Math.floor((n*2-1)/2)
    for (var col = 0; col < n*2-1;col++){
        if (midPoint - row <= col && midPoint + row >= col){
            steps += '#'
        } else {
            steps += ' '
        }
    }
    pyramid(n, row, steps)
}

module.exports = pyramid;
//iterative
// const midPoint = Math.floor((n*2-1)/2)
//     for (var i = 0; i < n; i++){
//         var steps = ""
//         for (var j = 0; j < 2*n-1; j++){
//             if (midPoint - i <= j && midPoint + i >= j){
//                 steps+="#"
//             }  else {
//                 steps+=" "
//             }
//         }
//         console.log(steps)
//         steps=""
//     }  