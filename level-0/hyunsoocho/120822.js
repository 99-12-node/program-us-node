function solution(my_string) {
  let answer = '';
  let cnt = my_string.length - 1;
  while (cnt >= 0) {
    answer += my_string[cnt];
    cnt = cnt - 1;
  }
  return answer;
}
