function solution(numbers) {
    let bigNum = numbers.sort((a,b) => b - a);
    
    return bigNum[0]*bigNum[1];
}