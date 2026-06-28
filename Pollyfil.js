// ******************************************* filter method polyfill ************************************ //
let arr = [1,2,3]
// filter method polyfill
// explanation: The filter method creates a new array with all elements that pass 
// the test implemented by the provided function. It takes a callback function as an 
// argument, which is called for each element in the array. If the callback returns true, 
// the element is included in the new array; if it returns false, the element is excluded.
Array.prototype.myFilter = function(callBack){
    console.log(this)
    let result = []
    for(let i = 0;i < this.length;i++){
        let res = callBack(this[i],i,this)
        console.log(res,"###")
        if(res){
            result.push(this[i])
        }
        
    }
    return result
}

let res = arr.myFilter((item,index)=> item % 2 == 0)
console.log(res)
// *******************************************filter methods end************************************ //

// explainint the map method: The map method creates a new array populated with the results of calling a 
// provided function on every element in the calling array. It takes a callback function as an argument, 
// which is called for each element in the array. The callback function receives three arguments: the
//  current element, the index of the current element, and the array itself. The return value of the 
// callback function is used to populate the new array.
// ****************************************** map method polyfill ************************************ //
let arr = [1, 1, 2];
// 1. Recreate the custom map method
Array.prototype.myMap = function(callBack) {
    let resultArray = [];
    
    // 'this' refers to the array (arr) that called myMap
    for (let i = 0; i < this.length; i++) {
        // Pass item, index, and the whole array into the callback
        let result = callBack(this[i], i, this);
        resultArray.push(result);
    }
    
    return resultArray;
};

// 2. Test it out
let doubled = arr.myMap((item, index) => {
    console.log(`Processing index ${index}: ${item} * 2`);
    return item * 2;
});
console.log("Returned Array:", doubled);
// ****************************************** map method end ************************************ //
const arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (callBack, initialValue) {
    // 1. Determine if initialValue was passed
    // If no initialValue is provided, accumulator defaults to the first element
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    
    // 2. Determine where the loop should start
    // If no initialValue is provided, we start looping from the second element (index 1)
    let startIndex = initialValue !== undefined ? 0 : 1;

    // 3. Loop through the array
    for (let i = startIndex; i < this.length; i++) {
        // Update the accumulator with the result of the callback
        accumulator = callBack(accumulator, this[i], i, this);
    }

    // 4. Crucial: Return the final accumulated result!
    return accumulator;
};

const result = arr.myReduce((acc, curr) => acc + curr, 0);

console.log(result); // Output: 10



//Promise.all
function promiseAllFunc(promises){
    return new Promise((resolve,reject)=>{
        result = []
        completed =0
        promises.forEach((prom,index)=>{
            Promise.resolve(prom)
            .then((res)=>{
                result[index] = res
                completed++

                if(completed === promises.length){
                    resolve(result)
                }
            })
            .catch((err)=> reject(err))
        })
    })
}

async function myFun(){
const [res1,res2,res3] =await promiseAllFunc([myPromise,myPromise1,myPromise2])

console.log(res1)
console.log(res2)
console.log(res3)
}
myFun()



function promiseAllSettledFunc(promises){
    return new Promise((resolve,reject)=>{
        result = []
        completed =0
        promises.forEach((prom,index)=>{
            Promise.resolve(prom)
            .then((res)=>{
                result[index] = res
                completed++

                if(completed === promises.length){
                    resolve(result)
                }
            })
            .catch((err)=>{
                result[index] = err
                

            })
            .finally(()=>{
                if(completed === promises.length){
                    resolve(result)
                }
            })
        })
    })
}

//Promise .race
function promiseAnyFunc(promises){
    return new Promise((resolve,reject)=>{
        result = ""
        rejectCount = 0
        promises.forEach((prom)=>{
            Promise.resolve(prom)
            .then((res)=>{
                result = res
                resolve(result)
            })
            .catch((err)=> {
                rejectCount++
                if(rejectCount === promises.length){
                    reject("All promises rejected")
                }
            })
        })
    })
}

async function myFun(){
const res=await promiseRaceFunc([myPromise,myPromise1,myPromise2])
console.log(res)
// console.log(res1)
// console.log(res2)
// console.log(res3)
}



myFun()


function promiseAnyFunc(promises) {
  return new Promise((resolve, reject) => {
    let rejectCount = 0;
    let errors = [];

    promises.forEach((prom, index) => {
      Promise.resolve(prom)
        .then((res) => {
          resolve(res); // first success wins
        })
        .catch((err) => {
          errors[index] = err;
          rejectCount++;

          if (rejectCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}








