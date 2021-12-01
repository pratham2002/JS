function runProgram(input){
input = input.split("\n");
var target = input[0].split(" ").map(Number);
var n = target[0];
target = target[1];
var left=0,right=n-1;
var arr = input[1].split(" ").map(Number).sort(function(a,b){return a-b})
const res = binaryRec(arr,left,right,target);
console.log(res);
}

function binaryRec(arr,left,right,target){
    if(left>right){
        return 0
    }
    else{
         var mid = Math.floor(left +(right-left)/2);
         if(arr[mid]==target){
             return "1";
         }
         else if(arr[mid]> target){
             return binaryRec(arr,left,mid-1,target)
            }
        else{
            return binaryRec(arr,mid+1,right,target)
         }
    }
}
runProgram(`5 6
2 -2 0 3 4`)