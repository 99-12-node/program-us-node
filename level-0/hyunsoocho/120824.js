function solution(num_list) {
  let even = 0;
  let odd = 0;
  let cnt = 0;

  while (cnt < num_list.length) {
    if (num_list[cnt] % 2 == 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }

    cnt = cnt + 1;
  }
  return [even, odd];
}
