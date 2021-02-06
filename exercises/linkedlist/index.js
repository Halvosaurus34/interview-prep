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
        if(!this.head){
            return null
        }

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
        if(!this.head){
            return
        }
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
            }
        } 
        
        nextNode.next = null
    }

    insertLast(data){
        const last = this.getLast()

        if (last) {
            last.next = new Node(data)
        } else {
            this.head = new Node(data)
        }
    }

    getAt(n){
        var counter = 0
        var node = this.head

        while (node) {
            if (counter === n){
                return node
            }
            counter++
            node = node.next
        }
        return null
    }

    removeAt(n){
        if (!this.head){
            return
        }

        if (n === 0){
            this.head = this.head.next
            return
        }

        const previous = this.getAt(n - 1)
        if (!previous || !previous.next){
            return
        }
        previous.next = previous.next.next
    }

    insertAt(data, n){
        const newNode = new Node(data)
        if (!this.head){
            this.head = newNode
            return
        }
        if (n===0){
            this.insertFirst(data)
            return
        }
        const previous = this.getAt(n - 1)
        if (!previous || !previous.next){
            return this.insertLast(data)
        }
        const next = previous.next

        previous.next = newNode
        newNode.next = next
    }

    forEach(fn){
        var node = this.head
        var counter = 0
        while (node) {
            fn(node, counter)
            node=node.next
            counter++
        }
    }

    *[Symbol.iterator](){
        var node = this.head
        while(node){
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };
