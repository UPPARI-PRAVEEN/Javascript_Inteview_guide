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
