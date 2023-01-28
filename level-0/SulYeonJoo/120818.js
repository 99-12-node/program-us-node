function solution(price) {
    if(price >= 500000) {
        price *= 0.8;
    } else if(price >= 300000) {
        price *= 0.9;
    } else if(price >= 100000) {
        price *= 0.95;
    }
    return Math.floor(price);
}
// if 10만원>= price*0.05//아니지 price*0.95
//else if 30만원>= price*0.1//아니지 price*0.9
//else if 50만원>= price*0.2//아니지 price*0.8
//return parseint(answer)