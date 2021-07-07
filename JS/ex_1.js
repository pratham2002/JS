function runProgram(input) {
input=input.split("\n");
var testCases=Number(input[0]);
var npos=1;
for(var a=0;a<testCases;a++){
    var count=0;
    var dimpos=npos+1;
    var n=Number(input[npos]);
    var arr=input[dimpos].split(" ").map(Number);
    npos=npos+2;
    var subArr=[];
    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            var str="";
                for(var k=i;k<=j;k++){
                    str=str+arr[k];
                }
            subArr.push(str);
            }
    }
    var length=subArr.length;
    for(var x=0;x<length;x++){
        var newArr=subArr[x].split("").map(Number);
        var lengthNew=newArr.length;
        // var sum=0;
        var sum=newArr[0]+newArr[lengthNew-1];
        if(isOdd(sum)){
            count++
        }
    }
    console.log(count);
    
}
}
function isOdd(n) {
    return (n%2===1);
}

runProgram(`1
5
1 2 3 4 5`)
