function solution(price) {
    console.log(typeof price)
    
    if (price >= 500000) {
        return price = Math.floor(price*0.8);
    } 
    else if (price >= 300000) {
        return price = Math.floor(price*0.9);
    } 
    else if (price >= 100000) {
        return price = Math.floor(price*0.95);
    } 
    return Math.floor(price);
}