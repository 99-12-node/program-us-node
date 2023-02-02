// function solution(n) {
//     let number = []; 
    
//     for (let i=4; i <= n; i++) {
//         let count = 0;
//         for (let j=1; j <= n; j++) {
//             if (i % j === 0) {
//                 count++
//                 if (count >= 3) {
//                     number.push(i);
//                     break;
//                 }
//             }
//         }
//     }
//     return number.length;
// }


function solution(n) {
    let number = []; 
    
    for (let i=2; i <= n; i++) {
        if (!prime(i)) number.push(i);
    }
    return number.length;
}

function prime(num) {
    for (let i=2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    if (num < 2) return false;
    return true;
}