function runprogram(input){
    input=input.split("\n");
    var dim=input[0].split(" ").map(Number);
    var row1=dim[0]
    var col1=dim[1]
    var row2=dim[2]
    var col2=dim[3]
    var array1=input.slice(1,row1 +1)
    var array2=input.slice(row1+1)
    console.log(array1);
    console.log(array2);
    console.log(array2 .split("").map(Number));
}

runprogram(`2 2 2 2
1 2
3 4
2 3
4 5`)