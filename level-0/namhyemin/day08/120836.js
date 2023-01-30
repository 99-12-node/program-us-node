function solution(n) {
    let answer = 0;
    
    let a = 1; // 최소범위 1로 초기화
    
    while(a < n + 1) {
        // 1부터 n까지 나누어떨어지는 수의 갯수를 구하기
        if ((n % a) === 0) {
            answer += 1;
        }
        a++;
    }  
    
    return answer;
}