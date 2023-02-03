emergency = [3, 76, 24] 
 function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map(x => sorted.findIndex(e => e == x) + 1);
  }
// solution(emergency)

// console.log(emergency.map(x => sorted.findIndex(s => s == x))) // [2,0,1]
// console.log(emergency.map(x => sorted.findIndex(s => s == x) + 1)) // [3,1,2]

//  내림차순 sort 된 [76,24,3] 중에서
// console.log(sorted.findIndex(a => a == 3)) // a 인자가 3 인 것의 index 를 알아내라(2)
// console.log(sorted.findIndex(a => a == 76)) // a 인자가 76 인 것의 index 를 알아내라(0)
// console.log(sorted.findIndex(a => a == 24)) // a 인자가 24 인 것의 index 를 알아내라(1)