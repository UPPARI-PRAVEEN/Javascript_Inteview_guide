

// //laxical scope or scope chain
// console.log("start")

// function a(){
//      let a =10;
   
//    //console.log(b)
//     function b(){
//         // let a = 20;
//         console.log(a)
//     }
//     return b;//it ruturns the body to the parent
// }
// a()()
// let b = 20;
// function a(){
//     console.log(++b);// here we are achieving only local scope only ew are not achieving global
// }
// a()


// function a() {
//     var b = 10;
//     console.log(b); // Output: 20
// }
// a();

//########################################################################################################################

//Nested Functions
// let a =20;
// function d(){
//     let c =30;
//     console.log(a);
//     function b(){
//         console.log(c)
//     }
//     return b();
// }
// d();

//####################################################################################################################################
//closures
//case 1
// function parent(){
//     let a =10;
//     function chile1(){
//         console.log(a);
//         let b =20;
//         function child2(){
//             console.log(b);
//         }
//         return child2
//     }
//     return chile1
// }
// parent()()();// by below this three code we can observe when ever the child function called it will creates a multiple closure
//                 //due to this their will be a chance to waste memory
// parent()()();
// parent()()();

//case2
function parent(){
    let a =39;
    let b =20;
    function child(){
        console.log(a)
    }
    function chile2(){
        console.log(b)
    }
    //return chile2,child//30
    return [child,chile2]
}
parent()[1]()//20 /// accesing an element based on indexes



