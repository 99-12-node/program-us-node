function solution(price) {
    var answer = 0;
    if(price >= 500000){
        answer = price - price*0.2        
    } else if(price <= 499990 && price >= 300000){
        answer = price - price*0.1
    } else {
        answer = price - price*0.05
    }
    return answer;
} //수정 필요