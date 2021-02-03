// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
    }

    size(){
        var counter = 0
        var node = this.head

        while (node){
            counter++
            node = node.next
        }    
        return counter
    }
}

module.exports = { Node, LinkedList };
