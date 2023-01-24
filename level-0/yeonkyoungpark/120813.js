function solution(n) {
    let answer = [];
    for(let i = 1; i<n+1; i++){
        if(i%2===1){
            answer.push(i)
        }
    }
    return answer;
}