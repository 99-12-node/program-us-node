function solution(numbers) {
    var answer = numbers.map(double);
    
    function double(i){
        return i*2
    }
    
    return answer;
}