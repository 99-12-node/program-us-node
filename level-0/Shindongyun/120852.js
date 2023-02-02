function solution(n) {
    let arr = [];
    // console.log(answer)

    for (let i=2; i <= Math.sqrt(n); i++) {
        if (n===0){
            break;
        }
        while (n % i === 0) {
            n /= i;
            arr.push(i);
        }
        
    }
    if (n >= 2) {
        arr.push(n);
    }
        
    let answer = [...new Set(arr)];
    return (answer.sort((a,b) => a - b));
}