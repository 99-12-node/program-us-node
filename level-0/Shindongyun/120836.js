function solution(n) {
    let count = 0;
    
    for (let i=1; i<=n; i++) {
        if (i * Math.floor(n / i) === n && (n % i) === 0) {
            count++
        }
    } 
    return count;
} 

// i랑 n을 i로 나눈수랑 비교하기
// n을 i로 나눴을때 나머지가 없어야 인수