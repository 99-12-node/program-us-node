function solution(num_list, n) {
  let answer = [];
  for (i = 0; i < num_list.length / n; i++) {
    let numArr = [];
    for (j = i * n; j < i * n + n; j++) {
      numArr.push(num_list[j]);
    }
    answer.push(numArr);
  }
  return answer;
}
