
/**
 * 双栈表达式
 * @param {*} String 
 */
function Evaluata(str){
    let ops =[]
    let vals =[]
    let N =str.length
    for(var i =0;i<N;i++){
        let s =str.charAt(i)
        console.log(s)
        if(s=='(') {console.log(vals);}
        else if(s=='+'){
            ops.push(s)
        }
        else if(s=='-'){
            ops.push(s)
        }
        else if(s=='*'){
            ops.push(s)
        }
        else if(s=='/'){
            ops.push(s)
        }
        else if(s==')'){
            let op = ops.pop()
            let v = vals.pop()
            if(op=='+') v =Math.floor(vals.pop())+Math.floor(v)
            else if(op=='-') v =Math.floor(vals.pop())-v
            else if(op=='*') v =Math.floor(vals.pop())*v
            else if(op=='/') v = Math.floor(vals.pop())/v
            vals.push(v)
        }
        else{
            vals.push(s)
        }
    }
    console.log(vals.pop())

}
Evaluata('(1+((2+3)*(4*5)))')
