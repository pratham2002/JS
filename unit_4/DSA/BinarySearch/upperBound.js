function runProgram(input){
    input = input.split("\n");
    var target = input[0].split(" ").map(Number);
    const n = target[0];
    var target = target[1];
    const arr = input[1].split(" ").map(Number);
    var low=0,high=n-1;
    var ans=-1;
    while(low<=high){
        var mid = Math.floor((low+high)/2);
        if(arr[mid]>target){
            ans = mid;
            high = mid-1;
        }
        else{
            low = mid+1
        }
    }
    console.log(ans);
}

runProgram(`10 4
0 2 4 4 5 5 7 7 9 10`)