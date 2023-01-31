function solution(numbers, k) {
    let long = numbers.length;
    
    if (k == 0) return numbers[0]; 
    if (k !== 0) return numbers[(2*(k-1)) % long];
}