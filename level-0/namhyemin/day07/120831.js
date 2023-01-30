function solution(n) {
    let answer = 0;
    
    while (n > 0) {
        if (n % 2 === 0) {
            answer += n;
        }
        n--;
    }
    
    return answer;
}