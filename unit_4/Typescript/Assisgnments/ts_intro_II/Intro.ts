//string
let Name:string = "Pratham";

//number
let age:number = 19;

//Boolean
let isFetching:Boolean = true;

//Arrays
let numbers:Array<number> = [1,2,3];
let strings:Array<String> = ["Pratham","Aditya","Nisha"];

//Tuple
let tuples:[string,boolean]
tuples = ["Thinking",true];


//enums
enum Rights{
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

//functions

function productOf(x : number, y : number): number{
    return x*y;
}

// console.log(productOf(4,5));


function printName(name:string): void{
    console.log(name)
}


strings.forEach((e:string)=>{
    printName(e)
})