/**
 * 快速排序
 * 平均比较次数：2NlnN次  最多需要 N*N/2次
 * 
 * 
 * 适合乱序的数列，对于有序的数列效率非常低
 * 
 * 
 * @param {*Array} a 
 * @param {*0} lo 
 * @param {*a.length-1} hi 
 */

function quickSort(a,lo,hi){
    if(hi<=lo) return
    let j =partition(a,lo,hi)
    quickSort(a,lo,j-1)
    quickSort(a,j+1,hi)

}
function partition(a,lo,hi){
    //将数组切分为a[lo..i-1],a[i],a[i+1...hi]
    let i =lo,j =hi+1
    let v = a[lo]
    let temp;
    let flag
    while(true){
        while(a[++i]<v) {
            if(i ==hi) break
        }
        while(a[--j]>v){
            if(j==lo) break
        }
        if(i>=j) break
        temp =a[i];
        a[i] = a[j];
        a[j]=temp
    }
    temp =a[lo];
    a[lo] =a[j];
    a[j] = temp
    return j

}
var arr =[6,3,5,8,1,2,7]
quickSort(arr,0,6)
console.log(arr)
