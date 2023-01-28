function solution(money) {
    let answer = 0;
    //몫 ->/ 나머지->%
    a = Math.floor(money/5500)
    b = Math.floor(money%5500)
    answer=[a,b]
    return answer;
}