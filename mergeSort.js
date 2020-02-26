/**
 * 
 *  自底向上归并
 *  思想： 首先进行两两归并，然后四四归并，然后八八归并，一直下去
 * 
 * 比较次数 ： 1/2NlgN 到 NlgN  最多访问数组6NlgN
 * 
 */
let aux =[]//归并所需的辅助数组
function mergeSort(a){
    let N =a.length
    for(let sz =1;sz<N;sz =sz+sz){//sz 子数组大小
        for(let lo =0;lo<N-sz;lo+=sz+sz){//lo:子数组索引
            merge(a,lo,lo+sz-1,Math.min(lo+sz+sz-1,N-1))
        }
    }

}
function merge(a,lo,mid,hi){
    let i =lo,j =mid+1
    mid =lo+Math.floor((hi-lo)/2)
    for(var k=lo;k<=hi;k++){
       aux[k] = a[k]
    }
    for(let k=lo;k<=hi;k++){
        if(i>mid){
            a[k] =aux[j++]
        }else if(j>hi){
            a[k] =aux[i++]
        }else if(aux[i]<aux[j]){
            a[k] =aux[i++]
        }else{
            a[k] =aux[j++]
        }
    }
}

var arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37,20];
mergeSort(arr)
console.log(arr)
