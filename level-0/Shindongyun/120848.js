function solution(n) {
    let result = 0;
    let num = 1;
    
    for (let i=1; i< n + 2; i++) {
        if (n >= num) {
            num *= i;
            result++;
            console.log(num, result)
        }
    }
    return result -1;
}