function solution(n) {
    console.log(n)
    
    for (i = 1; i < 100; i++) {
        if (6*i % n === 0) {
            return i;
        }
    }
}