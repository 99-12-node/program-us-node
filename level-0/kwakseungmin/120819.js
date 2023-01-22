function solution(money) {
    let answer1 = 0;
    let temp = 0;
    for (let n = 0; n<=money/5500; n ++)
    {   temp = 5500*n
        answer1 = [n , money - temp]
    }
    return answer1;
}