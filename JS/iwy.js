// var keys={
    // name: "Ironman",
    // year_of_birth : 1974,
    // printAge:function(){
        // currDate= new Date().getFullYear();
        // console.log(currDate - this.year_of_birth);
    // }
// }
// keys.printAge()

// var stringObject={
//     item: "FireFox",
//     vowelsCount: function(){
//         var count=0;
//         var array=this.item.split("")
//         for(var i = 0;i<array.length;i++){
//             var data=array[i];
//             switch (data) {
//                 case "A":
//                 case "a":    
//                 case "E":    
//                 case "e":    
//                 case "I":    
//                 case "i":    
//                 case "O":    
//                 case "o":    
//                 case "U":    
//                 case "u": 
//                     count++;   
//                     break;
//             
//             }
//         }
//         console.log(count);
//     },
//     reverse: function(){
//         var array=this.item.split("");
//         var revarray=[];
//         for(var i=array.length-1;i>=0;i--){
//             revarray.push(array[i]);
//         }
//         console.log(revarray.join(""));
//     },
//     changeCase: function(){
//         
//         var array=this.item.split("");
//         var changedArray=[];
//         for (var i =0;i<array.length;i++){
//             var alpha=array[i];
//             switch(alpha){
//                 case "A":
//                     alpha="a";
//                     break;
//                 case "a":
//                     alpha="A";
//                     break;
//                 case "B":
//                     alpha="b";
//                     break;
//                 case "b":
//                     alpha="B";
//                     break;
//                 case "C":
//                     alpha="c";
//                     break;
//                 case "c":
//                     alpha="C";
//                     break;
//                 case "D":
//                     alpha="d";
//                     break;
//                 case "d":
//                     alpha="D";
//                     break;
//                 case "E":
//                     alpha="e";
//                     break;
//                 case "e":
//                     alpha="E";
//                     break;
//                 case "F":
//                     alpha="f";
//                     break;
//                 case "f":
//                     alpha="F";
//                     break;
//                 case "G":
//                     alpha="g";
//                     break;
//                 case "g":
//                     alpha="G";
//                     break;
//                 case "H":
//                     alpha="h";
//                     break;
//                 case "h":
//                     alpha="H";
//                     break;
//                 case "I":
//                     alpha="i";
//                     break;
//                 case "i":
//                     alpha="I";
//                     break;
//                 case "J":
//                     alpha="j";
//                     break;
//                 case "j":
//                     alpha="J";
//                     break;
//                 case "K":
//                     alpha="k";
//                     break;
//                 case "k":
//                     alpha="k";
//                     break;
//                 case "L":
//                     alpha="l";
//                     break;
//                 case "l":
//                     alpha="L";
//                     break;
//                 case "M":
//                     alpha="m";
//                     break;
//                 case "m":
//                     alpha="M";
//                     break;
//                 case "N":
//                     alpha="n";
//                     break;
//                 case "n":
//                     alpha="N";
//                     break;
//                 case "O":
//                     alpha="o";
//                     break;
//                 case "o":
//                     alpha="O";
//                     break;
//                 case "P":
//                     alpha="p";
//                     break;
//                 case "p":
//                     alpha="P";
//                     break;
//                 case "Q":
//                     alpha="q";
//                     break;
//                 case "q":
//                     alpha="Q";
//                     break;
//                 case "R":
//                     alpha="r";
//                     break;
//                 case "r":
//                     alpha="R";
//                     break;
//                 case "S":
//                     alpha="s";
//                     break;
//                 case "s":
//                     alpha="S";
//                     break;
//                 case "T":
//                     alpha="t";
//                     break;
//                 case "t":
//                     alpha="T";
//                     break;
//                 case "U":
//                     alpha="u";
//                     break;
//                 case "u":
//                     alpha="U";
//                     break;
//                 case "V":
//                     alpha="v";
//                     break;
//                 case "v":
//                     alpha="V";
//                     break;
//                 case "W":
//                     alpha="w";
//                     break;
//                 case "w":
//                     alpha="W";
//                     break;
//                 case "X":
//                     alpha="x";
//                     break;
//                 case "x":
//                     alpha="X";
//                     break;
//                 case "Y":
//                     alpha="y";
//                     break;
//                 case "y":
//                     alpha="Y";
//                     break;
//                 case "Z":
//                     alpha="z";
//                     break;
//                 case "z":
//                     alpha="Z";
//                     break;
//                 
//                     
//             }
//             changedArray.push(alpha);
//         }
//         console.log(changedArray.join(""))
//     }
// }
// 
// stringObject.vowelsCount()
// stringObject.reverse()
// stringObject.changeCase()





var numbers={
    data: [1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems: function(){
        var array=this.data;
        var lessarray=[];
        for (var i=0;i<array.length;i++){
            if(array[i]<4){
                lessarray.push(array[i]);
            }
        }
        console.log(lessarray)
    },
    greaterThanItems: function(){
        var array=this.data;
        var greaterArray=[];
        for (var i=0;i<array.length;i++){
            if(array[i]>6){
                greaterArray.push(array[i]);
            }
        }
        console.log(greaterArray)
    }
}
numbers.lessThanItems();
numbers.greaterThanItems();