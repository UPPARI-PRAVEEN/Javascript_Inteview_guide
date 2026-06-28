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

// ****************************************** reduce method polyfill ************************************ //
// explanation: The reduce method executes a reducer function (that you provide) on each element of the array,
//  resulting in a single output value. The reducer function takes four arguments: accumulator, currentValue, 
// currentIndex, and the array itself. The reduce method can also take an optional initialValue as the second argument.
//  If no initialValue is provided, the first element of the array will be used as the initial accumulator value, and the 
// iteration will start from the second element.
// ***************//
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
// ******************************************* reduce method end ************************************


//********************************** Promise.all **********************************************//
// explanation: The Promise.all() method takes an iterable of promises as input and returns a single Promise that resolves 
// when all of the promises in the iterable have resolved or rejects with the reason of the first promise that rejects. 
// It is useful for running multiple asynchronous operations in parallel and waiting for all of them to complete before proceeding.
function promiseAllFunc(promises){
    return new Promise((resolve,reject)=>{
        result = []
        completed =0
        promises.forEach((prom,index)=>{
            Promise.resolve(prom) // here promises is sucess or failure so we are using Promise.resolve to handle both cases
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


// *********************************** Promise.allSettled **********************************************//
// explanation: The Promise.allSettled() method takes an iterable of promises as input and returns a single Promise that resolves 
// when all of the promises in the iterable have settled (either resolved or rejected). It returns an array of objects, 
// each representing the outcome of each promise, with a status property indicating whether the promise was fulfilled or rejected, 
// and a value or reason property containing the result or error.

function promiseAllSettledFunc(promises){
    return new Promise((resolve,reject)=>{
        result = []
        completed =0
        promises.forEach((prom,index)=>{
            Promise.resolve(prom)
            .then((res)=>{
                result[index] = res
                completed++
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

// **************************************** Promise .race **********************************************//
// explanation: The Promise.race() method takes an iterable of promises as input and returns a single
//  Promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, 
// with the value or reason from that promise. It is useful for scenarios where you want to proceed with 
// the first completed promise, regardless of whether it was successful or not.
function promiseraceFunc(promises){
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


// **************************************** Promise .any **********************************************//
// explanation: The Promise.any() method takes an iterable of promises as input and returns a single Promise that resolves 
// as soon as any of the promises in the iterable resolves, with the value from that promise. If all of the promises reject, 
// it rejects with an AggregateError containing all the rejection reasons. It is useful for scenarios where you want to proceed 
// with the first successful promise, ignoring any failures.
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








