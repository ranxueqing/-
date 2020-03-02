/**
 * 链表
 * 
 */
class Node{
    constructor(item){
        this.item =item
        this.next =null
    }
    
}
class Link{
    constructor(item){
        this.head =new Node(item) 
        this.cur = this.head
    }
   /**
    * 向表头插入元素
    * @param {*} item 
    * 
    */
    addHead(item){
       let  oldHead = new Node() 
        oldHead = this.head  //创建一个结点，保存当前头结点的值
        this.head = new Node()   //创建一个表头结点
        this.head.item =item    
        this.head.next =oldHead   //新的表头结点指向老的结点
    }
    /**
     * 删除结点
     */
    delete(val){
        if(this.search(val)){//如果找到要删除的值
            let pre = new Node() //定义一个虚拟头结点
            pre.next = this.head
            let cur = this.head
            while(cur.item!=val){
                pre = pre.next
                cur = cur.next
            }
            pre.next = cur.next
            return true
        }else{
            return false
        }    
        
    }
    addTail(item){
        let tail = new Node(item)  //新建一个结点
        this.cur.next =tail     //头节点的下一个结点指向新建的结点
        this.cur =tail          //cur指向尾结点既为链表的尾部

    }
    getHead(){
        return this.head.item
    }
    getTail(){
       let pre = this.head
       while(pre.next!=null){
           pre =pre.next
       }
       return pre.item
     
    }
    /**
     * 
     * @param {*} item 
     * @return boolean
     */
    search(item){
        let cur = this.head
        while(cur.next!=null){
            if(cur.item==item) return true
            cur = cur.next
        }
        return false
    }
    toString(){
        let cur = this.head
         
        while(cur!=null){
            console.log(cur.item)
            cur = cur.next
        }
    }
    
    
    

}
let link = new Link(6)
link.addHead(5)
link.addHead(8)
link.addHead(7)
link.addTail(2)
link.delete(6)
console.log(link.getTail())
console.log(link.search(5))
link.toString()
