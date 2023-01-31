function solution(slice, n) {
    let answer = 1;
    
    while(answer*slice < n){
        answer ++;
    }
    return answer;
}