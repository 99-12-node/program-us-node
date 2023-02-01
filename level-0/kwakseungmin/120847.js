numbers = [1, 2, 3, 4, 5]
function solution(numbers) {
    resort = numbers.sort((a,b) => b-a)
    sum = resort[0] * resort[1] 
    return sum
}