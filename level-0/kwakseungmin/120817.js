function solution(numbers) {
    let answer1 = 0
    let answer2 = 0
    for (let i = 0; i <numbers.length; i ++)
        { answer1 += numbers[i] }
    answer2 = answer1 / numbers.length
    return answer2;
}