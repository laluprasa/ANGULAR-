var a:number
a=200
console.log(a);
var d:string
d="lalu"
console.log(d);

var ab
ab="sr"
console.log(ab);
var ab
ab=234
console.log(ab);
var arr:number[]
arr=[1,3,4,3,4,]
console.log(arr)
var b:string[]
b =["lalu","rohit","balu",]
console.log(b);
//this is the class with out constructer

class user {
    firstname:string="a"
    lastname:string
    id:number
    dispaly(){
        console.log("inside dispaly function");
        
    }
}
var obj=new user();
console.log(obj.dispaly);
console.log(obj.firstname);
class nme{
    fname:string="lalu"
    lname:string="v"
    id:number=220
    dispaly(){
        console.log(this.fname);
        
    }
}
var ob=new nme();
console.log(ob.dispaly());
console.log(ob.fname);


//class with constructor
//use constructor insalized value
class person{
    name:string
    id:number
    constructor(name,id){
        this.name=name
        this.id=id

    }
}
var p=new person("lalu",21)
console.log(p.name);
class pe{
    name:string
    id:number
    constructor(name,id){
        this.name=name
        this.id=id

    }
}
var v=new pe("lalu",21)
console.log(v.name);
//
interface car{
    brand:string
    price:number
    result():string
}
//tendarization 
class honda implements car{
    brand:string
    price:number
    result():string{
        return "lalwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
    }
}
var c=new honda()
var x=c.result()
console.log(x);
var c2:car ={
    brand:"honda",
    price:40,
    result(){
        return "la"
    }
}



//enum
console.log('---------------enum----------------');
enum books{
    book1="se",
    book2=20,
    book3=30,
    book4=40,
}
function dispaly():books{
    if(true){
        return books.book1
    }
}
console.log(dispaly());
console.log('-------------generic----------');
//Generic
function display<t>(lalu:t){
    return lalu
}
console.log(display(true));
function da<t>(b:t){
    return b
}
console.log(da(9));
function val<t>(kkk:t,kkk1:t,kkk2:t){
    return kkk2
}
console.log(val(45,64,89));
enum carss{
    car1=1000000,
    car2=30000000,
    car3=400000000,
    car4=5000000000,
}
function value():carss{
    if(true){
        return carss.car4
    }
}
console.log(value());











var ar:any[]
ar = ["lalu","rohit",4,true,null]
console.log(ar);


 