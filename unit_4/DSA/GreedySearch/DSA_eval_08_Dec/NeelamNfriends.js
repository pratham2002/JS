function runProgram(input){
input = input.split("\n");
var n = Number(input[0]);
var location = n+1;
var arr = input[1].split(" ").map(Number);
var neelamLoc = 0;
var price = arr[0];
var i = 1,sum=0;
while(neelamLoc<location){  
    neelamLoc++
    if(arr[neelamLoc]<price){
        sum  = sum +(price * i)
        price = arr[neelamLoc];
        i=1
    }
    else if(neelamLoc===location){
        sum  = sum +(price * (i-1))
    }
    else{
        i++
    }
}
console.log(sum); 
}

runProgram(`5
4 7 8 3 4`)