// // let a = (a)=>{
// //     setInterval(() => {
// //         console.log(a)

// //     }, 1000);
// // }
// // a(2)

// // // function add(a,b){
// // //     new Promise((resolve,rejeect)=>{
// // //         if(isNaN(a) && !isNaN(b)){
// // //             return rejeect();
// // //         }

// // //         return resolve(a+b);
// // //     })
// // //     .then((res)=> console.log("sucess", res))
// // //     .then(()=> console.log("greate sucess"))
// // //     .catch(()=> console.log("error in the code"))
// // // }
// // // //console.log(add(1,2))
// // // add(1,3)

// // // function add(a,b){
// // //     let d = a+b;
// // //     return function(c){
// // //         let res = d +c;
// // //         console.log(res)
// // //     }
// // // }
// // // add(1,2)(3).

// // // async function add(a, b) {
// // //     try {
// // //         const result = await new Promise((resolve, reject) => {
// // //             if (isNaN(a) || isNaN(b)) {
// // //                 return reject('Invalid numbers');
// // //             }
// // //             return resolve(a + b);
// // //         });

// // //         console.log("Success:", result);
// // //         console.log("Great success");
// // //     } catch (error) {
// // //         console.log("Error in the code:", error);
// // //     }
// // // }

// // // add(1, 3); // Success: 4
// // // add(1, 'a'); // Error in the code: Invalid numbers

// // // console.log(NaN === NaN)//false
// // // console.log(NaN == NaN)//false
// // // console.log(typeof NaN)//number
// // // console.log(typeof NaN === typeof NaN)//true

// // import React, { useState } from 'react'

// // const App = () => {
// //   const[name,setName] = useState('');
// //   const[email,setEmail] = useState('');
// //   const [searchName,setSearchName] = useState('');
// //   const[data,setData] = useState([]);
// //   const[filterData,setFilterdata] = useState([]);
// //   const[selectedIndex,setSelectedIndex] =useState();

// //   const handdleSearch=()=>{
// //     const searchItem = data.filter((item,id)=> item.name.includes(searchName))
// //    setFilterdata(searchItem)
// //   }
// //   const hadleseractEmail=()=>{
// //     const searchEmail = data.filter((item,id)=> item.email.includes(searchName))
// //     setFilterdata(searchEmail)
// //   }
// //   const handleSubmit=(e)=>{
// //     e.preventDefault();
// //     const newData = [...data,{name,email}]
// //     setData(newData);
// //   }
// //   const handleDelete=()=>{
// //     // const newItem = data.filter((item,index)=> index !== idx)
// //     // setData(newItem)
// //     if(selectedIndex){
// //       const newItem = data.filter((item,index)=> index !== selectedIndex)
// //     setData(newItem)
// //     }
// //   }
// //   const handleUpate=(idx)=>{
// //     const updatedData = data.map((item, id) =>
// //       id === idx ? { name: name, email: email } : item
// //     );
// //     setData(updatedData)
// //   }
// //   console.log(selectedIndex)
// //   const displayData = searchName ? filterData : data
// //   return (
// //     <div>
// //       <input type='search' value={searchName} onChange={(e)=> setSearchName(e.target.value)} />
// //       <button onClick={handdleSearch}>search</button>
// //       <button onClick={hadleseractEmail}>searchByemail</button>

// //     <form onSubmit={handleSubmit}>
// //     <input type='text' value={name} onChange={((e)=> setName(e.target.value))}/>
// //     <input type='text' value={email} onChange={((e)=> setEmail(e.target.value))}/>
// //     <button>submit</button>
// //     </form>
// //     {
// //       displayData.map((item,idx)=>{
// //         return(
// //           <div key={idx}>
// //             <p  >{item.name}============{item.email}======<button onClick={()=>handleUpate(idx)}>Updata</button>===

// //             <input type='checkbox'  onChange={(()=> setSelectedIndex(idx))} />
// //               <button onClick={()=>handleDelete(idx)}>deleteName</button></p>
// //             {/* <p>{item.email}</p> */}
// //           </div>
// //         )
// //       })
// //     }
// //     </div>
// //   )
// // }

// // export default App

// // let demo =(a,b)=>{
// //     new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             if(isNaN(a) || isNaN(b)){
// //                 return reject("failure in pormise");
// //             }

// //             for(let i = 0;i<b;i++){
// //                 console.log(i);

// //             }
// //             return resolve()
// //         },2000)
// //     })
// //     .then(()=> console.log("promise got sucess"))
// //     .then(()=> console.log("happy to promise got sucess"))
// //     .catch((error)=> console.log(error))
// // }

// // demo(1,'d')

// // let dome =async(a,b)=>{
// //      await new Promise((resolve,resject)=>{
// //         if(isNaN(a) || isNaN(b)){
// //             return resject("error in the variables")
// //         }
// //         return resolve("promise got sucees");

// //     })
// //     .then((result)=> console.log(result))
// //     .catch(()=>console.log("error in the code"))

// //     //console.log(res)
// // }
// // dome(3,4)

// // const fetchData = async()=>{
// //     const response = await fetch('https://fakestoreapi.com/products');
// //     const res =await  response.json();
// //     console.log(res)
// // }
// // fetchData()

// // const fetchData = ()=>{
// //    return  new Promise((resolve,reject)=>{
// //         fetch('https://fakestoreapi.com/products')

// //      .then((res)=>{
// //         if(!res){
// //             return reject("error")
// //         }
// //         return res.json();
// //      })
// //      .then((data)=>  resolve(data))
// //      .catch((error)=> reject(error))
// //  })
// // }

// // fetchData()
// // .then((data)=> console.log(data))

// // const objectsture ={
// //     names :"prveen",
// //     age : 52
// // }
// // const {names,age} = objectsture;
// // console.log(names);
// // console.log(age)

// // function demo(num,callbackfun){
// //     return callbackfun(num)
// // }
// // function double(a){
// //     return a*a;
// // }
// // function square(a){
// //     return a+a
// // }
// // let res = demo(2,double);
// // console.log(res)

// //closures
// // function closuresi(){
// //     console.log("b")
// //     function innter(){
// //         console.log("a")
// //     }
// //     return innter;
// // }
// // closuresi()()

// //this;
// //createeing a object
// // let obj={
// //     names: "praveen",
// //     gretes: function(){
// //         console.log(this.names)
// //     }
// // }
// // obj.gretes()

// // const obj = new Object();
// // obj.name="pfea"
// // console.log(obj)

// //flatten array

// // let flatenarray =(arr)=>{
// //     let newFlattenarray =[];
// //     const newflate =(element)=>{
// //         if(Array.isArray(element)){
// //             for(let i =0;i<element.length;i++){
// //                 newflate(element[i])
// //             }
// //         }else{
// //             newFlattenarray.push(element)
// //         }
// //     }
// //     newflate(arr);
// //     console.log(newFlattenarray)
// // }
// // flatenarray([[1,2],23,4,[2,4]])

// // function* myfunc(){
// //     console.log("hi")
// //     yield 1;
// //     console.log('hff')
// //     yield 2;
// //     console.log("bye")
// // }
// // let mygen = myfunc();
// // console.log(mygen.next())
// // console.log(mygen.next())
// // console.log(mygen.next())

// //  let a = {};
// // let b = { key: "b" };
// // let c = { key: "c" };

// // a[b] = 123;
// // a[c] = 456;

// // console.log(a);//a[undfined,undefined] = 456

// // let a = function(){
// //     console.log(1)
// // };
// // a()
// // const obj = {
// //     a: "foo",
// //     b: function () {
// //       console.log(this.a);
// //     },
// //   };

// //   const c = obj.b;

// //   obj.b();
// //   c();

// // function f(){

// // }
// // console.log(typeof f)

// // var x = 0;//var i=5;
// // for (x = 0; x < 5; x++) {
// //   setTimeout(() => {

// //     console.log(x);
// //   }, 1000);
// // }

// // console.log(typeof null == typeof undefined)
// // console.log(typeof null === typeof undefined)

// // let arr =[1,2,4,5,6,1,3]
// // console.log(arr.sort((a,b)=> b- a));

// // let a ="hi";
// // let b = "hi"//

// // if(a == b){
// //     console.log("hi")
// // }

// // const obj = {
// //     a: 1,
// //     b: 2,
// //     c: {
// //       a: 3,
// //       b: 4,
// //     },
// //   };

// //   const {
// //     a,
// //     b,
// //     c: { b: nestedA },
// //   } = obj;

// //   console.log(a, b, nestedA);
// //   //"use strict";

// // function checkThiss() {
// //   console.log(this);
// // }

// // checkThiss();  // What will be the output?

// // const obj = {
// //     name: 'Alice',
// //     greet: function() {
// //       const arrowFunc = () => {
// //         console.log(this.name);
// //       };
// //       arrowFunc();
// //     }
// //   };

// //   obj.greet();

// //console.log(10 - '8');  // What will be the output?

// // const person = {
// //     name: 'John',
// //     age: 30,
// //   };

// //   console.log(person['age']);
// //   console.log(person.age);

// // const key = 'age';
// // const person = {
// //   name: 'John',
// //   age: 30
// // };

// // console.log(person[key]);  // What will be the output?

// // let b ;
// // console.log(b)

// // var foo = function() {
// //   console.log('Hello!');
// // };

// // foo();  // Will this throw an error?

// // let a = "2"
// // let b = parseInt(a);
// // //console.log(typeof b)

// //console.log(a()); // What will be the output?

// // var a = function() {
// //   return 'Hello';
// // };

// // const promise = new Promise((resolve, reject) => {
// //     resolve('Success');
// //     reject('Error');
// //   });

// //   promise.then(result => console.log(result))
// //          .catch(error => console.log(error));

// // Promise.resolve(1)
// //   .then(value => {
// //     console.log(value); // What will this log?
// //     return value + 1;
// //   })
// //   .then(value => {
// //     console.log(value); // What will this log?
// //     return value * 2;
// //   })
// //   .then(value => {
// //     console.log(value); // What will this log?
// //   });
// // const promise1 = Promise.resolve(10);
// // const promise2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
// // const promise3 = Promise.resolve(30);

// // Promise.all([promise1, promise2, promise3]).then(values => {
// //   console.log(values);  // What will be the output?
// // });

// // Promise.resolve(5)
// //   .then(value => {
// //     throw new Error('Something went wrong');
// //   })
// //   .then(value => {
// //     console.log(value); // Will this execute?
// //   })
// //   .catch(error => {
// //     console.log(error.message); // What will this log?
// //   });
// // const promise = Promise.resolve('Done');

// // promise.then(value => console.log(value));   // What will this log?
// // promise.then(value => console.log(value));   // What will this log?
// // const p1 = new Promise(resolve => setTimeout(resolve, 500, 'p1'));
// // const p2 = new Promise(resolve => setTimeout(resolve, 100, 'p2'));

// // Promise.race([p1, p2]).then(result => console.log(result));  // What will this log?

// // const p1 = new Promise((resolve) => {
// //     console.log('Inside Promise');
// //     resolve('Resolved');
// //   });

// //   console.log('Before p1.then');

// //   p1.then((value) => console.log(value));

// //   console.log('After p1.then');
// // const promise = new Promise((resolve, reject) => {
// //     resolve('First resolve');
// //   });

// //   promise.then(result => {
// //     console.log(result);  // What will this log?
// //     return new Promise((resolve, reject) => {
// //       resolve('Second resolve');
// //     });
// //   })
// //   .then(result => {
// //     console.log(result);  // What will this log?
// //   });
// // const p1 = Promise.resolve(1);
// // const p2 = Promise.reject('Error occurred');
// // const p3 = Promise.resolve(3);

// // Promise.all([p1, p2, p3]).then(values => {
// //   console.log(values); // Will this log?
// // }).catch(error => {
// //   console.log(error);   // What will this log?
// // });.

// // async function fetchData() {
// //     const promise1 = Promise.resolve('Data 1');
// //     const promise2 = new Promise((resolve) => setTimeout(() => resolve('Data 2'), 1000));

// //     const results = await Promise.all([promise1, promise2]);

// //     console.log(results);  // What will this log?
// //   }

// //   fetchData();

// // Promise.resolve('Success')
// //   .then(value => {
// //     console.log(value);  // What will this log?
// //     return Promise.reject('Failed');
// //   })
// //   .then(value => {
// //     console.log(value);  // Will this execute?
// //   })
// //   .catch(error => {
// //     console.log(error);  // What will this log?
// //   });

// // new Promise((resolve, reject) => {
// //     resolve('Success');
// //     reject('Failure');
// //   })
// //   .then(value => {
// //     console.log(value);  // What will this log?
// //   })
// //   .catch(error => {
// //     console.log(error);  // Will this execute?
// //   });
// // Promise.resolve('First')
// // .then(value => {
// //   console.log(value);  // What will this log?
// //   return 'Second';
// // })
// // .then(value => {
// //   console.log(value);  // What will this log?
// //   return new Promise((resolve) => {
// //     setTimeout(() => resolve('Third'), 1000);
// //   });
// // })
// // .then(value => {
// //   console.log(value);  // What will this log?
// // });
// // const p1 = new Promise((resolve) => setTimeout(() => resolve('Success'), 1000));
// // const p2 = new Promise((_, reject) => setTimeout(() => reject('Error'), 500));

// // Promise.race([p1, p2])
// //   .then(value => console.log(value))  // What will this log?
// //   .catch(error => console.log(error));  // What will this log?

// //call apply bind
// // let obj = {
// //   name :"parveen",
// //   age: 30
// // }

// // let obj1 ={
// //   name: "pavan",
// //   age: 40
// // }

// // function greate(name,age){
// //   console.log(this.name +" "+ this.age+" "+ name,age)
// // }
// //this are the example for call method
// //greate.call(obj1);
// //greate.call(obj)

// //this are the example for
// //greate.apply(obj,["Praveen",40])

// //bind

// //let binding= greate.bind(obj);
// //binding()

// // let obj ={
// //   name: "praveen",
// //   address:{
// //     dis:"kurnool",
// //     pin:30
// //   }

// // }
// //in this case original object will be effected
// // let shallowCopy ={...obj};
// // shallowCopy.address.pin =50;
// // console.log(shallowCopy.address.pin)
// // console.log(obj.address.pin)
// //first it obj into json formate and then it converts json into obj
// // by doing this way we can't effect the original object
// // let deepCopy = JSON.parse(JSON.stringify(obj));

// // deepCopy.address.dis ="hyd";
// // console.log(deepCopy.address.dis)
// // console.log(obj.address.dis)

// // let obj ={
// //   name: "praveen",
// //   age:"aaaa"
// // }

// // let res ={};

// // for(let key in obj){
// //   res[obj[key]]= key
// // }
// // console.log(res)

// // by using ~~ double tild operator it will remove the floating values
// // function abd(xyz){
// //   console.log(~~xyz)
// // }

// //  abd(20.55)

// // console.log([] == [])
// // console.log([] == "");
// //it only consider the without default values

// // function a(a,b,c=3){

// // }
// // console.log(a.length)

// // let b = ()=>{
// //   setTimeout(()=>{
// //     console.log("hi")
// //   },2000)
// // }
// // b()
// // console.log("i am executed")

// //reverseint a string without usign inbuilt method
// // let s = "hellow";
// // let res ="";

// // for(let i =0;i<s.length;i++){
// //   res += s[s.length-1-i];
// // }
// // console.log(res)

// // //impute
// // let count =0;
// // function c(){
// //   count = count+1;
// //   return count;
// // }

// // console.log(c());
// // console.log(c())
// // console.log(c())

// // console.log(isNaN("bb"))
// // console.log(10 - "hie")

// // let a = [1,24,4,5];

// // a.splice(1,1)
// // console.log(a)

// // let obj={
// //   name:"praveen",
// //   age:30,
// //   address:{
// //     pin:203
// //   }
// // }
// // let shallowCopy = {...obj}

// // shallowCopy.address.pin=20;
// // shallowCopy.age =40;
// // console.log(shallowCopy.age)
// // console.log(obj.age)
// // console.log(obj.address.pin)
// // console.log(shallowCopy.address.pin)

// // let deepCopy = JSON.parse(JSON.stringify(obj));

// // deepCopy.name="paven";
// // console.log(deepCopy.name)
// // console.log(obj.name)

// // let obj={
// //   name: "praveen",
// //   age:20
// // }
// // let obj2={
// //   name: "praveen",
// //   age:50
// // }

// // function greeting(name,age){
// //   console.log("original address : " +this.age + this.name)
// //   console.log(age +" " + name)
// // }

// // greeting.call(obj)
// // greeting.apply(obj,["praveens kumar",50])

// // let binding = greeting.bind(obj)

// // binding()

// // const arr = [1,2,4]
// // const res = arr.filter(())

// const data = {
//   alias: "kb",
//   country: "India",
//   currencyID: 5,
//   gstDetail: {
//     eInvoice: {
//       applicableFrom: "2021-09-21",
//       eInvoiceApplicable: "Yes",
//     },
//     eWayBill: {
//       applicableFrom: "2021-10-22",
//       enableGSTEwayBill: "Yes",
//     },
//     gstDetailHistories: [
//       {
//         applicableFrom: "2024-01-01",
//         assesseeOfOtherTerritory: "Yes",
//         enableGST: "Yes",
//         gstDetailHistoryID: 0,
//         gstin: "GSTIN283930",
//         periodicityOfGSTR1: "Monthly",
//         registrationType: "Regular",
//         state: "Telangana",
//       },
//     ],
//     gstDetailID: 0,
//     gstTaxRates: [
//       {
//         additionalExpenseOrIncomeForSlabRate: "Yes",
//         applicableFrom: "2024-01-04",
//         cGST: "1.8",
//         calculationType: "On Value",
//         cess: "1.8",
//         description: "Product description",
//         enableNonAdValoremCESS: "No",
//         gstGroupID: 1,
//         gstTaxRateID: 0,
//         hsnSAC: "995411",
//         iGST: "1.8",
//         ineligibleForInputCredit: "No",
//         ratePerUnit: "0",
//         rateType: "Sales/Purchases",
//         reverseChargeApplicable: "No",
//         sGST: "1.8",
//         slabRates: [
//           {
//             cGST: "6",
//             cess: "10",
//             endRate: "100",
//             iGST: "12",
//             sGST: "12",
//             slabRateID: 0,
//             startRate: "0",
//             taxability: "Taxable",
//           },
//           {
//             addi: "955",
//             cess: "10",
//             endRate: "100",
//             iGST: "12",
//             sGST: "12",
//             slabRateID: 0,
//             startRate: "0",
//             taxability: "Taxable",
//           },
//         ],
//         taxability: "Exempt",
//         via: "Manual Entry",
//       },
//     ],
//     isPrimary: "Yes",
//     organizationAddressID: 1,
//     preferences: {
//       enableNonAdValoremCESS: "No",
//       hsnSAC: "4",
//     },
//     registrationName: "Kitaab Technologies Pvt Ltd.",
//   },
//   legalName: "Kitaab",
//   organizationID: 0,
//   pan: "PAN23893",
// };
// console.log(data.gstDetail.gstDetailHistories[0].assesseeOfOtherTerritory)
// // console.log(data.gstDetail.gstTaxRates[0].slabRates[0].cGST);
// // const res =data.gstDetail.gstTaxRates[0].slabRates.forEach((item, index) => {
// //     console.log(item + "+++++++++++++" + index);  // This will print item and its index
// // });

// //console.log(res)

// // console.log(data.alias)

// // const arr =[]
// // const res = data.gstDetail.gstTaxRates[0].slabRates.map((item,index)=>{
// //     //console.log(item)
// //     arr.push(index)
// //     for(let i =0;i< data.gstDetail.gstTaxRates[0].slabRates.length;i++){
// //         console.log(i)
// //     }
// // })
// // console.log(arr)
// const arr =["primary"]
// console.log(arr.push("praveen"))
// console.log(arr)

// const arr = [1, 5, 3, 6, 2, 9, 6, 8, 3, 8];

// // Initialize maxEle and secondMaxEle with the first two elements
// let maxEle = Math.max(arr[0], arr[1]);
// let secondMaxEle = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > maxEle) {
//     secondMaxEle = maxEle;
//     maxEle = arr[i];
//   } else if (arr[i] > secondMaxEle && arr[i] !== maxEle) {
//     secondMaxEle = arr[i];
//   }
// }

// console.log(secondMaxEle); // Output: 8
// console.log(maxEle)

