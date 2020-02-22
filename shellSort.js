/**
 * 
 * 希尔排序
 *  使数组中任意间隔为h的元素都是有序的
 * 按一定的间隔对数列进行分组，然后在每一个分组中做插入排序；随后逐次缩小间隔，在每一个分组中做插入排序...直到间隔等于1，做一次插入排序后结束。
 * 
 * 
 * 稳定性： 不稳定的
 * 时间复杂度：最好：O(n的3/2次方) 下界：n*log2n  时间性能取决于h的大小
 * 
 * 应用场景：对于中等大小的数组比较适合
 * 
 * 
 * 
 */

function shellSort(a){
    let N =a.length
    let h =1
    let temp
   
    while(h<N/3) {
        h =3*h+1
        console.log(h)
       
    }
    while(h>=1){
        //将数组变为有序
        for(var i =h;i<N;i++){
            //将a[i]插入到a[i-h],a[i-2*h],a[i-3*h]...之中
            for(let j=i;j>=h;j=j-h){
                if(a[j]>a[j-h]){
                  break     
                }
                temp=a[j]
                a[j]=a[j-h]
                a[j-h]=temp    
            }
        }
        h =Math.floor(h/3)
    }
    return a
}
var result =shellSort([3,5,7,1,4,56,12,78,25,0,9,8,42,37])
console.log(result)

/*     [0 1 2 3 4 5  6  7  8  9 10 11 12 13]     比较次数     交换次数
        3 5 7 1 4 56 12 78 25 0 9  8  42 37
h=13    3 5 7 1 4 56 12 78 25 0 9  8  42 37        1次         0次 
       
        3 5 7 1|4 56 12 78| 25 0 9  8  |42  37 
h =4    3 0     4  5         25          42         3+3+           0+

*/