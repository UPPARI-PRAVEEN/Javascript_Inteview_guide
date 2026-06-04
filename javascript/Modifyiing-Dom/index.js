
// let a = document.body;
// console.log(a);

// a.innerHTML += "<h1>react js </h1>"

// a.innerHTML += "<p>i ma para</p>";

// let demo = document.querySelector("#demo");
// console.log(demo)

// demo.innerHTML += `<ol id ='demo1'>
// <li>hellow</li>
// <li>hellow</li>
// <li>hellow</li>
// <li>hellow</li>
// <ol>

// `;

// let ol = document.getElementById("demo1");
// console.log(ol);
// ol.style.border="2px solid red"
// ol.style.backgroundColor="pink";

// ol.setAttribute("type","A");

//createelement;
let h1 = document.createElement("h1");
console.log(h1);
document.body.appendChild(h1);

h1.textContent="hellow world";

let ol1 = document.createElement("ol");

console.log(ol1)
let tar = document.getElementById("demo");
tar.appendChild(ol1)
console.log(tar)
ol1.style.backgroundColor="red"







