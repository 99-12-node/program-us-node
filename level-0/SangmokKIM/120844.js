function solution(numbers, direction) {
    if (direction == 'right'){
        numbers.unshift(numbers[numbers.length-1])// 3123
        numbers.pop()//312
    }else {
        numbers.push(numbers[0])//4.445.6.4.-1.45.6.4
        numbers.shift()//445 ----
    }
    // if (direction == 'right'){
    //     numbers.unshift(numbers.pop())
    // } else {
    //     numbers.push(numbers.shift())
    // }
    
    
    // for (let i=0; i<=numbers.length; i++){
    //     if(direction=='right' && i==numbers.length){
    //         answer.unshift(numbers[i-1])
    //         answer.pop(numbers[0])
    //     } else if(direction=='left' && i==0){
    //         answer.push(numbers[i])
    //         answer.shift()
    //     } else {
    //         answer.push(numbers[i])
    //     }
    // }
    return numbers;
}