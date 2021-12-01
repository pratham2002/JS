function runProgram(input){
input = input.split("\n");
var target = input[0].split(" ").map(Number);
var n = target[0];
target = target[1];
var left=0,right=n-1;
var arr = input[1].split(" ").map(Number).sort(function(a,b){return a-b})
var ans = 0
while(left<=right){
    var mid = Math.floor(left + (right-left)/2);
    if(target == arr[mid]){
        ans =1
        break;
    }
    else if(arr[mid]>target){
        right =mid-1;
    }
    else{
        left = mid +1
    }
    
}
console.log(ans);
}


runProgram(`5 5
2 -2 0 3 4`)