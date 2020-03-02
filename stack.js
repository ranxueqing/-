
/**
栈的链表实现
*/

class Node{
    constructor(item){
        this.item =item
        this.next = null
    }
}
class Stack{
    
    constructor(item){
        this.first = new Node(item)
        this.cur = this.first
        this.N = 0
    }
    
    isEmpty(){
        return this.first==null
    }
    size(){
        return this.N
    }
    push(val){
      
        let oldFirst = new Node()
        oldFirst = this.first
        this.first = new Node(val)
        this.first.item =val
        this.first.next = oldFirst
        this.N++
    }
    pop(){
        let val = this.first.item
        this.first = this.first.next
        this.N--
        return item
    }


}
let stack = new Stack(0)
stack.push(1)
console.log(stack.size())
