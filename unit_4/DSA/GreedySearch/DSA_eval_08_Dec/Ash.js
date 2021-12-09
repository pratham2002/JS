function runProgram(input){
input = input.split("\n");
const testCases = Number(input[0]);
var pos =1;
for (let i = 0; i < testCases ; i++ ) {
    var noOfRounds = Number(input[pos++])
    var ashPokemon = input[pos++].split(" ").map(Number);
    ashPokemon.sort((a,b)=>a-b)
    var garypokemon = input[pos++].split(" ").map(Number);
    garypokemon.sort((a,b)=>a-b)
    // console.log(ashPokemon,"\n",garypokemon);
    var wins=true;
    for (let j = 0;j<noOfRounds;j++){
        if(garypokemon[j] >= ashPokemon[j]){
            wins=false;
            break;
        }
    }
    if(wins){
        console.log("Ash Finally Wins");
    }
    else{
        console.log("Train Hard Again");
    }
}
}

runProgram(`2
3
12 3 4
5 4 1
2
1 5
1 4`)