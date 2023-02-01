box = [10, 8, 6]
n = 3
function solution(box, n) {
    a = 1;
   for(i = 0; i< box.length; i++){
    a *= Math.trunc(box[i] / n) // 3 * 2 * 2
   }
   return a
}
solution(box, n)