function runProgram(input){
input = input.split("\n");
var lOne = input[0].split(" ").map(Number)
const n= lOne[0]
const k= lOne[1]
var arr = input[1].split(" ").map(Number);
var ans=-1;
var low=0,high=n-1;
while(low<=high){
    var mid = Math.floor(((low+high)/2));
    if(arr[mid]==k){
        ans =mid;
        low = mid+1;
    }
    else if(arr[mid]>k){
        high = mid-1;
    }
    else{
        low = mid+1;
    }
}
console.log(ans);
}

runProgram(`10 5
0 2 4 4 5 5 7 7 9 10`)