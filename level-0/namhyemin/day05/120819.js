function solution(money) {
    
    const COFFE = 5500; // 아메리카노 한잔 금액
    
    let cup = Math.floor(money / COFFE); // 최대로 마실 수 있는 잔의 수
    let lefted = money - (cup * COFFE); // 남는 돈
    
    return [cup, lefted];
}