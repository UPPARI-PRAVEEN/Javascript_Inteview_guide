
let a = [1,2,3,2,42];

// console.log(a.length)//9
// console.log(a.indexOf(2))//1
// console.log(a.lastIndexOf(2))//7
// a.push(9,10)//adds element at at the end of Array
// console.log(a)//
// a.pop()
// console.log(a)remove the first elemetn
// a.unshift(10)
// console.log(a)//adds an element at the starting
// a.shift()
// console.log(a)//removes the first elemtent
// console.log(a.includes(2))//true
// a.splice(0,3,100)
// console.log(a)//[ 100, 2, 42 ]
// let b = [ 1, 2, 3 ]
// console.log(a.slice(0,3))//[ 1, 2, 3 ]
// console.log(a.concat(b))
// console.log(Array.isArray(a))//true
// let b = "heoow"
// console.log(Array.from(b))//[ 'h', 'e', 'o', 'o', 'w' ]
// console.log(a.sort((a,b)=> a-b))//asen b-a for decending order
// for(let ele in a){
//     console.log(ele)
// }//to iterate the indexes
// for(let ele of a){
//     console.log(ele)
// }//to iteate the values
// a.forEach((a,b)=> {
//     console.log(`${a} == ${b}`)
// })// to iterate the both the value and index
// console.log(a.map((a)=> a+=10))
// console.log(a.filter((a)=> a%2==0))
// console.log(a.reduce((a,b)=> a+=b));
console.log(a.reverse())