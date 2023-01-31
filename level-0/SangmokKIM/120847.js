function solution(numbers) {
    let bigger = numbers.sort((a, b)=> b - a);
    let answer = bigger[0]*bigger[1];
    return answer;
}