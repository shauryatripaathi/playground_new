function myFunc(){
    console.log("hello")
}
myFunc();

// anonymous function
let x = function(){
    console.log("this is anonymous function")
}
x();

// pass function as argument
function greet(){
    console.log("good mornning");
}
function msg(message){
   console.log(message());
}
msg(greet);


// function inside a function
function sayHi(){
    function helloFunc(){
        console.log("hii person");
    } 
    console.log(helloFunc());
}
sayHi();


// double parantheses
function dblPar(){
  return function myFunction(){
         console.log("this is an example of double paranthese");
}
   }
   dblPar()();

// self invoking function
(function(){
    console.log("this is a self-invoking function");
})();


// nested function
let num1 = 10;
let num2 = 90;
function add(){
     function answer(){
        console.log(num1 + num2);
    }
    return answer();
}
add();

//Multiply-nested function
function A(x){
    function B(y){
        function C(z){
            console.log(x+y+z);
        }
        C(10);
    }
    B(20);
}
A(30);


// arrow function
const arr = [1,2,3,4];
const arr1 = arr.map(i=>{
        console.log(i**2);
    });



