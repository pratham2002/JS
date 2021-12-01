function runProgram(input){
    input = input.split("\n");
    var target = input[0].split(" ").map(Number);
    target = target[1];
    input = input[1].split(" ").map(Number);
    var firstOcc = first(input,target);
    var lastOcc = last(input,target);
    
    if(firstOcc ==0 && lastOcc ==0){
        console.log("0");
    }
    else{
    console.log(lastOcc - firstOcc +1);
}
}
function first(input,target){
    var l=0,h=input.length;
    var ans =0 
    while(l<=h){
        var mid = Math.floor((l+h)/2)
        if(input[mid]==target){
            ans = mid
            h = mid-1 
        }
        else if(input[mid]>target)
            h = mid-1 
        else
            l= mid+1
    }
return ans
}
function last(input,target){
    var l=0,h=input.length;
    var ans =0 
    while(l<=h){
        var mid = Math.floor((l+h)/2)
        if(input[mid]==target){
            ans = mid
            l= mid+1
        }
        else if(input[mid]>target)
            h = mid-1 
        else
            l= mid+1
    }
return ans
}
runProgram(`6 3
2 3 3 3 6 9`)