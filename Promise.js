const promise = new Promise((resolve,reject)=>{
    let sucess = true
    if(sucess){
        resolve("Promisee got resolved")
    }else{
        reject("promise got rejected")
    }
})
const promise2 = new Promise((resolve,reject)=>{
    let sucess = false
    if(sucess){
        resolve("Promisee got resolved 22")
    }else{
        reject("promise got rejected")
    }
})
const promise3 = new Promise((resolve,reject)=>{
    let sucess = false
    if(sucess){
        resolve("Promisee got resolved 33")
    }else{
        reject("promise got rejected")
    }
})

// promise
// .then((msg)=>{
//     console.log("promsi sucess",msg)
// }).catch((msg)=>{
//     console.log("rejected promise",msg)
// })

const {re1,res2,res3} = Promise.all([promise,promise2,promise3])
                            .then((res)=> console.log(res))
                            .catch((err)=> console.log(err))
console.log(re1)
console.log(res2)
console.log(res3)
