// You_2

// compoundIntrest

// amount=principleAmount*((1+rateOfIntrest)**preiod)
var principleAmount = 10000
var rateOfIntrest = 6
var preiod=3 //years
amount = principleAmount*((1+rateOfIntrest)**preiod)


// gameOfLies_2

var game1 = true && !(false) && !(true) || true || false
// true

var game2 = false && true || !(false) && (!true || !false)
// true

var game3 = true && false && (!false || !false) && true
// false
 
var game4= !(false && !false || (false && !true || !true))
// true

console.log(game1)
console.log(game2)
console.log(game3)
console.log(game4)