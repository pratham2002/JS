function runProgram(input) {
    var n=input.length
    // var a=input[n-1];
    var subArr=[]
    for(var i=0;i<n;i++){
        for(j=i;j<n;j++){
            var str="";
        for(var k=i;k<=j;k++){
            str=str+input[k]
        }
        subArr.push(str)
        console.log(str);
    }
}
var count=0;
for(var i=0;i<subArr.length;i++){
    var arr=subArr[i].split("");
    var a=arr[0]
    var elem1=arr[0];
    var elem2=arr[arr.length-1];
    if (elem1===a) {
        if(elem2===a){
            count++;
    
        }
    }    
}
console.log(count);    
}
runProgram("abcab")