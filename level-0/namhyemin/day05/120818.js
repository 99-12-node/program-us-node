function solution(price) {
    const DISCOUNTRATEUPPER10 = 0.05;
    const DISCOUNTRATEUPPER30 = 0.1;
    const DISCOUNTRATEUPPER50 = 0.2;
    
    // 50만원 이상
    if (price >= 500000) {
        return Math.floor(price * (1 - DISCOUNTRATEUPPER50));
    } else if (price >= 300000){ // 30만원 이상
        return Math.floor(price * (1 - DISCOUNTRATEUPPER30));
    } else if (price >= 100000){ // 10만원 이상
        return Math.floor(price * (1 - DISCOUNTRATEUPPER10));
    } else {
        return price;
    }
}