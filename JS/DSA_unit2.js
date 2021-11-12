function runProgram(input){
input=input.split("\n");
var n=Number(input[0]);
var str=""
for (var i=0;i<n*2;i+=2){
    str+=input[1][i]+" " 
}
for (var i=2;i<=n;i++){
    str+=input[i][6]+" ";
}
for (var i=n;i>=0;i-=2){
    str+=input[n][i]+" ";
}
for (var i=n-1;i>1;i--){
    str+=input[i][0]+" ";
}
for (var i=2;i<n+2;i+=2){
    str+=input[2][i]+" " 
}
// 
console.log(str);

}
runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`)