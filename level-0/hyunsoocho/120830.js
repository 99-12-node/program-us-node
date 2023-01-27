function solution(n, k) {
  let yangPrice = n * 12000;
  let drinkPrice = k * 2000;
  let discountNumber = Math.floor(n / 10) * 2000;
  return yangPrice + drinkPrice - discountNumber;
}
