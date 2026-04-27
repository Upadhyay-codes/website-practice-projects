
//  for (let i =0; i <=100; i++){
//     if(i%2==0){ 
//         console.log("i=",i);
//     }
//     }
// // }
// console.log("Abhishek bhai ka naam hai ");
// let i=1;
// do { 
//     console.log("i=",i,"TerboTech");
//     i++;
// } while(i<=50);
// 
// let items=[250,645,300,900,50];
// let i=0; 
// items.unshift("amazon");
   // console.log(items.slice(0))
   // 
   // function countvowel(str) {
   //    let count =0;
   //    for(const char of str) {
   //       if(char === "a"||char ==="e"||char ==="i" ||char ==="o" ||char==="u" ){
   //       count ++;
   //       }
   //    }
   //       console.log(count);
   //    }
// let arr =[1,2,3,4,5,6,7];
// let evenArr = arr.filter
// (val => val >3);
// console.log(evenArr);
   // let n = prompt("enter a number:");
   // let arr = [];
   // for (let i=1; i<=n; i++){
   //    arr [i-1] = i;
   // }
   // console.log(arr);
   // let factorial = arr.reduce((res,curr)=> {
   //    return res*curr;
   // })
   // console.log("factorial=",factorial)
//  window.alert("This website save cookies");
//  console.dir(window.document);
 let firstEl = document.querySelector(".jax");
 console.dir(firstEl);
 let allEl = document.querySelectorAll(".jax");
 console.dir(allEl);
console.dir(document.body.firstchild);
let divs = document.querySelectorAll(".box");
let idx = 1;
for (div of divs) {
   div.innerText = `new unique value ${idx}`;
   idx++;
}