//1

// let form =  1;
// const form1 =  11;

// while (form < form1){

//     console.log(form)
//     form += 1;
// }


//2

// for (let i = 2; i < 20; i = i + 2) { console.log(i) }


//3

// for (let i = 7; i < 70; i = i + 7) { console.log(i) }


//4

// const arr = [1, 2, 3 , 4 , 5];



// while (arr){

//         console.log(arr)
//          arr += 1;
//     }

//5

//   const  numbers = [1, 2, 3 , 4 , 5 ,6 ,8 ,9 ,10];



//   for (let i = 1; i <= numbers.length; i ++) {
//     if (i === 7) {
//       break;
//     }
//     console.log(i);
//   }

//6

// const n = 15;

// for (let i = 1; i < 18; i++) {

//   if (i >= n) {
//     break;
//   }
  
//   console.log(i);
// }

//7

let l = 1;
while (l <= 20) {
  if (l % 3 === 0) {
    l += 1;
    continue;
  }
  console.log(l);
  l += 1;
}