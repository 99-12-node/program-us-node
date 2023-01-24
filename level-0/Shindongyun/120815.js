function solution(n) {
    console.log(n)
    
    for (i = 1; i < 100; i++) {
        if (6*i % n === 0) {
            return i;
        }
    }
}

//저 i < 100을 나중에 바꾸는 방법을 생각해보자