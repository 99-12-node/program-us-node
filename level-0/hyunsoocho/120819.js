function solution(money) {
  const coffeeCnt = Math.floor(money / 5500);
  const moneyLeft = money % 5500;

  return [coffeeCnt, moneyLeft];
}
