// console.log("hello")

// console.log("start")

// function main(task){
//     return task(10,20);
// }

// let add = main(function(a,b){
//     return a+b;
// })

// let sub = main(function(a,b){
//     return a-b;
// })

// let mul = main(function(a,b){
//     return a*b;
// })
   

// console.log(add)
// console.log(sub)
// console.log(mul)

console.log("start")
function main(a,b,task){
    console.log("first")
    return task(a,b);
    //console.log("second")
}
console.log("hi")
let add = main(10,20,function(a,b){
    console.log("second")
    return a+b;
})
console.log("excutinf last line")
 console.log(add)
// let sub= main(10,20,function(a,b){
//     return a-b;
// })
// console.log(sub)