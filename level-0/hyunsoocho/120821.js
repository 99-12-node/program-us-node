function solution(num_list) {
  let newArray = [];
  let cnt = num_list.length - 1;
  while (cnt >= 0) {
    newArray.push(num_list[cnt]);
    cnt = cnt - 1;
  }
  return newArray;
}
