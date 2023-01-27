function solution(my_string, letter) {
  let answer = '';
  let cnt = 0;
  while (cnt < my_string.length) {
    if (my_string[cnt] !== letter) {
      answer = answer + my_string[cnt];
    }
    cnt = cnt + 1;
  }
  return answer;
}
