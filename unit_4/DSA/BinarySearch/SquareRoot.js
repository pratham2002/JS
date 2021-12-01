function runProgram(input){
    input = input.split("\n").map(Number);
    const testCases = input[0];
    for (var i=1;i<=testCases;i++){
         const noIs= input[i];
         var res = rootOf(noIs);
         console.log(Math.floor(res));
    }

}
function rootOf(n){
    var low=0,high = n;
    while(low<high){
        var mid = (low+high)/2;
        if(mid*mid == n){
            return mid;
        }
        else if(mid*mid > n ){
            high = mid-1
        }
        else if(mid * mid <n){
            low = mid+1
        }
    }
 return mid;
}

runProgram(`10
7
4
16
5
21
3
12
4
4
10`)