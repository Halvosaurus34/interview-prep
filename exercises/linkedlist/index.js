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

    getFirst(){
        return this.head
    }

    getLast(){
        var node = this.head

        while(node.next){
            node = node.next
        }

        return node
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        this.head = this.head.next
    }

    removeLast(){
        var node = this.head
        var nextNode = null
        if(!node){
            return
        } else if(!node.next){
            this.head = null
            return
        } else if (node.next){
            while(node.next){
                nextNode = node
                node = node.next
                console.log(node)
            }
        } 
        
        if (nextNode){
            nextNode.next = null
        } else {
            node = null
        }
    }

    insertLast(data){
        var newNode = new Node(data)
        var node = this.head
        while(node.next){
            node = node.next
            console.log(node)
        }
        node.next = newNode
    }

    getAt(n){
        var counter = 0
        var node = this.head
        var nextNode = null

        while(counter<=n){
            counter++
            nextNode = node
            node = node.next
            console.log(node)
        }
        return nextNode
    }
}

module.exports = { Node, LinkedList };
