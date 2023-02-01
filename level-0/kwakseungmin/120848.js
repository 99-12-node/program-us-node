n = 3628800
function solution(n) {
    factorial = 1;
    for(i = 1; i<=n; i++){
        factorial *= i
        if(n <= factorial * i){
        return i
        break;
        }
    }
}
solution(n)