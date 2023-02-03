function solution(numbers, direction) {
  let a;
  if (direction === 'right') {
    a = numbers.pop();
    numbers.unshift(a);
  } else {
    a = numbers.shift();
    numbers.push(a);
  }
  console.log(numbers);
  return numbers;
}
