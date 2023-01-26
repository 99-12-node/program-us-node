function solution(my_string, n) {
  let answer = '';
  let cnt = 0;
  while (cnt < my_string.length) {
    const repeatCharacter = my_string[cnt];
    cnt = cnt + 1;

    let repeatCnt = 0;
    while (repeatCnt < n) {
      answer = answer + repeatCharacter;
      repeatCnt = repeatCnt + 1;
    }
  }

  return answer;
}
