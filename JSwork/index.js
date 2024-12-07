// console.log("Hello World")
// var a = 12;
// console.log("a=" +a);
// if(a>10){
//     a=30;
//     console.log("H1",a);
// }
// console.log("Hello ",a);
// console.log(typeof a);
// let c="12";
// let b=12;
// if(c==b)
//     console.log("Hello")
// if(c===b)
//     console.log("Hi");

// function hi(str="Hello") {
//     console.log("Hi function calling "+str);
// }
// hi("JS and CSS");

// let d=function(str="Hello") {
//     console.log("Hi function calling "+str);
// }
// d();

// function sum(a,b,c=12) {
//     return a+b+c;
// }
// let total=sum(23,45,100,89);
// console.log(total);

// function selectLanguage(clbk){
//     function cCompiler(){
//         return "c compiler selected";
//     }
    
//     function javaCompiler(){
//         return "java compiler selected";
//     }
    
//     console.log("Hi, you have selected "+clbk());
// }

// selectLanguage.javaCompiler();

// console.log("Hello JS");
// console.dir(document);
// let parent=document.getElementsByClassName("parent");
// console.dir(parent);

// console.log(parent[0]);
// parent[0].innerText="Harsh Vardhan";

// console.dir(document);
// const div = document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innertext = "ABES Engineering College";
// div[0].innerHTML = "<h2 style=color:red> ABES EC </h2>";
// const h1 = document.createElement("h1");
// h1.innerText = "Element is created by DOM function";
// h1.style.backgroundColor = "cyan";
// h1.style.color = "red";
// div[0].appendChild(h1);

// console.log(h1);

// const img = document.createElement('img');
// img.src = 'cat.jpeg';
// img.setAttribute("height","200px");
// console.log(img);
// div[0].appendChild(img);
// div[0].removeChild(img);

// const button = document.getElementById("btn");
// console.log(button);
// const display = document.getElementById("disp");
// console.log(display);

// getData=()=> {
//     console.log("calling getdata function");
//     display.innerHTML="<h3 style=color:red>Welcome to CSE Department</h3>";
// }

// button.addEventListener("click", getData);

// const promise1 = new Promise(
// (resolve,reject)=>{
//     let a = 12;
//     if(a > 10) {
//         resolve("Value of a is resolved");
//     }
//     else {
//         reject("Value of a is rejected");
//     }
// }
// );

// promise1.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)}).finally(msg=>{console.log("All resources have been closed")});

// const promise2 = new Promise(
// (resolve,reject)=>{
//     let a = Math.random()*100;
//     console.log(a);
//     if(a > 100 && a < 200){
//         resolve("Value of a is valid");
//     }
//     else{
//         reject("Value of a is not valid");
//     }
// }
// );

// promise2.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)}).finally(msg=>{console.log("All resources have been closed")});

// const promise3 = new Promise(
// (resolve,reject)=>{
//     resolve({name:"Harsh",branch:"CSE"});
// }
// );

// promise3.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)}).finally(msg=>{console.log("All resources have been closed")});

const response = fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        console.log(res.products[0].id + " " + res.products[0].title)
    }
)
})