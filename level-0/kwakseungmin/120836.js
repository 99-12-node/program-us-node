n = 20
function solution(n) {
    count = 0;
    for(let i = 1; i<= n; i++){
        if(n % i == 0){
        count++
        }
    }
    return count
}
solution(n)