function solution(numbers, k) {
    let total = 0;
    for(let i = 0; i<k; i++){
        total += 2;
        if(total > numbers.length) total -=numbers.length; 
    }
    return numbers[total-2]; 
    }