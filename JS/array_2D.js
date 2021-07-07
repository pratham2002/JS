`var matrix1=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
];
var matrix2=[
  [2,1,2],
  [1,2,1],
  [2,1,2],
]

console.log(matrix1.length)
var re=[];
for(var i=0;i<matrix1.length;i++){
 var row1=matrix1[i];
 var row2=matrix2[i];
  for(var j=0;j<row1.length;j++){
    re.push(row1[j]+row2[j]);    
  }
}
console.log(re.join(" "));`