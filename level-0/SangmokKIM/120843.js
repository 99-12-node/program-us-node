function solution(numbers, k) {
    // let answer = 1;
    // for(let i=0;;i+=2){
    //     i %= numbers.length;
    //     if(answer===k){return numbers[i]}
    //     answer+=1;
    // }
    
//      let long = numbers.length;
    
//     if (k == 0) return numbers[0]; 
    // if (k !== 0) 
        return numbers[(2*(k-1)) % numbers.length];
}