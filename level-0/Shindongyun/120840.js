function solution(balls, share) {
    let result = 1;
    // console.log(typeof balls);
    
    for (let i=0; i<share; i++) {
        result *= (balls-i) / (share-i)
        console.log(result);
    }
    
    return result;
}

// nCr = n! / (r!(n−r)!)
// 5/3, 4/2, 3/1

function solution(balls, share) {
    let top = 1;
    let bot = 1;
    
    
    for (let i=0; i<share; i++) {
        top *= (balls-i);
        bot *= (share-i);
    }
    
    return top/bot;
}