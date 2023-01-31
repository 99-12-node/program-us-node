function solution(hp) {
    let count = 0;
    
    count += parseInt(hp/5);
    hp %= 5;
    
    count += parseInt(hp/3);
    hp%= 3;
    
    count += parseInt(hp/1);
    
    return count;
    }