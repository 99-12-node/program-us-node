function solution(num) {
    let answer = 0;
    
    while (num != 1) {
        if (num % 2 == 0){
            num /= 2;
        } else {
            num *=3
            num +=1
        }
        answer += 1;
    }
    if (answer >= 500) {
        return -1;
    } else {
        return answer;
    }
}