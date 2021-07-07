// function runprogram(input){
// input=input.split("\n");
// var n= Number(input[0]);
// var array=input[1].split(" ").map(Number);
// var q = Number(input[2]);
// var N=[];
// var count=3;
// for (var i=0;i<q;i++){
//     N.push(Number(input[count]))
//     count++;
// }
// console.log(N);
// sortedarray = array.reverse();
// for(var j=0;j<N.length;j++){
// var result = firstGreater(n,N[j],sortedarray)
// console.log(result);
// }
// }
// function firstGreater(n,N,array){
//     var first=-1;
//     n=Number(n);
//     N=Number(N);
//     for(i=0;i<n;i++){
//         data=Number(array[i])
//         if(data>N){
//             first=array[i];
//             break;
//         }
//     }
//     return first;

// }
// runprogram(`15
// 13 89 81 66 81 63 71 76 73 81 100 101 504 999 1000
// 4
// 65
// 15
// 97
// 44`)

//var arr = [
//    [1, 1, 1],
//    [2, 2, 2],
//    [3, 3, 3],
//
//    
//];
// var transpose = arr => {
//    for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < i; j++) {
//          const tmp = arr[i][j];
//          arr[i][j] = arr[j][i];
//          arr[j][i] = tmp;
//       };
//    }
// }
// transpose(arr);
// console.log(arr);





var items = ['a', 'b', 'c', 'd', 'a', 'c']
var n=[]
for(var i=0; i<items.length;i++){
    elem=items[i];
    for(var j=i+1;j<items.length;j++){
        if (items[j]==elem) {
            n.push(elem)
        }
    }
}
console.log(n);