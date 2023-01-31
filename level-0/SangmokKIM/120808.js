function solution(numer1, denom1, numer2, denom2) {
    let top = denom1*numer2+numer1*denom2;
    let bot = denom1*denom2;
    let start = 1;
    
    for (let i=1; i<= top; i++){
        if(top%i ==0 && bot%i == 0){
            start=i
        }
    }
    return [top/start,bot/start];
}