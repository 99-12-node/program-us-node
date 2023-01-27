function solution(n, k) {
    let lamf = 12000*n;
    let drink = 2000*k;
    for (let i=1; i<=n;i++){
        if (i%10===0) {
            drink = drink - 2000
        }
    }
    var answer = parseInt(lamf + drink);
    return answer;
}