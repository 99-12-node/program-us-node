function solution(n) {
    let answer = 1;
    
    // 6으로 나눠떨어지는 경우
    const piece = 6;
    if ((n % piece) === 0) {
        return parseInt(n / piece);
    } 
    
    // 6으로 나눠떨어지지 않는 경우
    while (true) {
        if ((piece * answer) % n === 0) {
            break
        } else {
            answer += 1;
        }
    }
    return answer;
}