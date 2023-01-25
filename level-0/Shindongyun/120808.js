function solution(numer1, denom1, numer2, denom2) {
    let son = numer1 * denom2 + numer2 * denom1;
    let mom = denom1 * denom2;
    //console.log(son);
    //console.log(mom);
    let num = 0;
    
    for (let i=0 ; i <= Math.max(son,mom); i++) {
      //  console.log(Math.max(son,mom));
     
        if (son % i === 0 && mom % i === 0) {
            num = i;     
        }
    } return [son/num,mom/num];
}

//return 위치 잘확인;; num은 결국에 제일 큰 값으로 됨 