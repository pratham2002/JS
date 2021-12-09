function runProgram(input){
    input = Number(input)
    var sum = 0;
    for(let i=1;i<input;i++){
        sum = sum+i
        if(sum>=input){

            console.log(i);
            break
        }
    }
}

runProgram(`6`)