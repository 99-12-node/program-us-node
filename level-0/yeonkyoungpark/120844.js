function solution(numbers, direction) {
    if(direction == 'right'){
        numbers.unshift(numbers[numbers.length-1]);
        numbers.pop();
    }else{
        
        numbers.push(numbers[0]);
        numbers.shift();
    }
    return numbers;
}