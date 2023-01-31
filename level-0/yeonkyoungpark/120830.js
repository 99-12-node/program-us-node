function solution(n, k) {
    let totalPrice = n*12000 + k*2000;
    let isDiscounted = (n>=10) ? totalPrice - parseInt(n/10)*2000 : totalPrice;
    return isDiscounted;
    }