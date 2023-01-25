function solution(money) {
  
    let a = Math.floor(money/5500);
    let b = money % 5500;
        
    let answer = [a,b];
    return answer;
}