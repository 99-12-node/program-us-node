function solution(n) {
    let answer = 1
    for (let i=1;i<=n; i++){
        answer = answer*i
        if(answer === n) return i;
        if(answer >n) return i-1;
    }
 }