function solution(n) {
    let answer = [];
    //홀수를 구하라! -> 2로 나누었을때 나머지가 0이 아닌것을 골라내자
    //
    for(let i=1; i<=n; i++){
        if(i%2 !==0){
            answer.push(i)
        }
    }
    return answer;
}