// * Rectangle Object

var rect={
   length:12,
   breadth:8,
   area: function(){
       console.log("\nArea = ",this.length*this.breadth)
   },
   perimeter: function(){
       console.log("Perimeter = ",2*(this.length+this.breadth),"\n\n")
   }
}
rect.area()
rect.perimeter()


//* Marks Object

var marks={
   data: [
       {
           name:"Nurpul",
           marks:10,
       },
       {
           name:"Prateek",
           marks:20,
        },  
       {
           name:"Aman",
           marks:30,
       },
       {
           name:"Albert",
           marks:5,
       },
       {
           name:"Yogesh",
           marks:15,
       }
],
   average: function(){
       var sum=0;
       for(var key in this.data){
           sum=sum +(this.data[key].marks);
       }
       console.log("Average = ",sum/this.data.length);
   },
   maximum:function(){
       var maximum=Number.MIN_SAFE_INTEGER;
       var array=[];
       var pos;
       for (var key in this.data){
           array.push(this.data[key].marks)
       }
       for(var i=0;i<array.length;i++){
           var number = array[i]
           if (maximum<number) {
               maximum = number;
               pos=i;
               
           }
       }
       console.log(`Maximum marks `, this.data[pos].name , " --> " , maximum);
       
   },
   minimum:function(){
       var minimum=Number.MAX_SAFE_INTEGER;
       var array=[];
       var pos;
       for (var key in this.data){
           array.push(this.data[key].marks)
       }
       for(var i=0;i<array.length;i++){
           var number = array[i]
           if (minimum>number) {
               minimum = number;
               pos=i;
               
           }
       }
       console.log(`Minimum marks `, this.data[pos].name , " --> " , minimum);

   }
}
// console.log(marks)
marks.average()
marks.minimum()
marks.maximum()