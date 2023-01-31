function solution(numbers) {
    var answer = 0;
    var targets = numbers.length
    
    for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
}
    
    return (answer/targets)
}