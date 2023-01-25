function solution(n) {
    
    // if (7>=n) return 1;
    // else return Math.floor(n/7)+1;
    if(n%7 === 0){
        return n/7
    }else if(n%7 != 0){
        return Math.floor(n/7)+1
    }

}