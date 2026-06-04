console.log("hellow")
let a=document.getElementById("demo")
console.log(a,"i iam aaaaa")
a.style.backgroundColor="red"
let btn = document.getElementById("btn")
let clr = document.querySelector(".dev")
btn.addEventListener("click",(()=>{
    console.log("i am clicking")
    console.log(clr)
    clr.style.backgroundColor = "pink"
    clr.innerHTML = '23444'
}))