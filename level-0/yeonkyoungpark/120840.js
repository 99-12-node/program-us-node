function solution(balls, share) {
    var answer = 0;
    
    let n = balls;
    let r = share;
    let top = 1;
    for(let i = n; i>= n-r+1; i--){
        top *= i;
    }
    let bottom = 1;
    for(let j = r; j>=1; j--){
        bottom *= j;
    }
    
    answer = top/bottom

    return answer;
}