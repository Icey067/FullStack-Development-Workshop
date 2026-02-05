// var a= 70;
// console.log(a);

// {
//     var a = 10;
//     var b = 20;
//     console.log(a);
//     console.log(b);
// } 

// console.log(a);
// console.log(b);

// const t = 10;
// console.log(t);

// NAMED FUNCTION

function nigga(){
    console.log("Hello from nigga function!");
    console.log("This is a test message.");
}

nigga();

// ANONYMOUS FUNCTION EXPRESSION

let giga = function(){
    console.log("Hello from giga function!");
}

giga();

// ARROW FUNCTION

let c = () => {
    console.log("arrow function")
}

// CALLBACK FUNCTION

(() => {
    console.log("This is a callback function!")
})();

// except + other arthimetic operators gives output

console.log(5 + "3"); // Output: 53
console.log (5 - "3"); // Output: 2


// DOM MANIPULATION 

// TAG NAME SELECTOR


let heading=document.getElementsByTagName("h1");
console.log(heading[0]);

let classes=document.getElementsByClassName("h2");
console.log(classes)

let id=document.getElementById("nigga");
console.log(id);

let qry=document.querySelector("#giganigga");
console.log(qry);

let qryall=document.querySelectorAll("h2");
console.log(qryall);

console.log(qry.textContent) // .textContent - only for getting the text inside the tag
qry.textContent = "NiggaWorld 69"

qry.classList.add("h3") // .classList.add - to add a class to the element
qry.classList.remove("h3") // .classList.remove - to remove a class from the element
qry.classList.toggle("h3") // .classList.toggle - to toggle a class on/off

let b=document.createElement("p"); 
// .createElement - to create a new element

b.textContent="Niggapara.";
// .textContent - to set the text inside the new element
b.classList.add("nigaclass");
// .classList.add - to add a class to the new element
document.body.appendChild(b);

//create a ordered list with 3 items using JS

let ol=document.createElement("ol");
let li1=document.createElement("li");
let li2=document.createElement("li");
let li3=document.createElement("li");

document.body.appendChild(ol);

li1.textContent="1";
li2.textContent="2";
li3.textContent="3";

ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);

// Button click event

const button = document.querySelector("#btn");
console.log(button);

button.addEventListener("click", () => {
    const ol = document.createElement("ol");
    let arr = ["nigga", "giga", "mega"];
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        ol.appendChild(li,);
    }
    document.body.appendChild(ol);
});