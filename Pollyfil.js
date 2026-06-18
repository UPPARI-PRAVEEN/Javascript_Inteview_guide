let arr = [1,2,3]
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


