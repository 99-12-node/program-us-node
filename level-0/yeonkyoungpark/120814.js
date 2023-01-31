function solution(n) {
    let result = 0;
    if (n%7===0){
        result = n/7;
    }else{
        result = Math.floor(n/7) +1;
    }
    return result;
}