function solution(numbers, num1, num2) {
    var answer = [];
    let i = num1;
    while(i<=num2){
        answer.push(numbers[i]);
        i++
    }
    return answer;
}