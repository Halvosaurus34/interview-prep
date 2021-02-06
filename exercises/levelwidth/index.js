// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, "S"]
    const counter = [0]

    while(arr.length > 1){
        const arrFirst = arr.shift()
        if (arrFirst === "S") {
            counter.push(0)
            arr.push("S")
        } else {
            arr.push(...arrFirst.children)
            counter[counter.length-1]++
        }

    }
    return counter
}

module.exports = levelWidth;
