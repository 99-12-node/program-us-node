function solution(numbers, num1, num2) {
  let answer = [];
  let cnt = num1;
  while (cnt <= num2) {
    answer.push(numbers[cnt]);
    cnt = cnt + 1;
  }
  return answer;
}
