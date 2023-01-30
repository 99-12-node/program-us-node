function solution(numbers) {
    let len = numbers.length;
    let last = numbers[len-1];
    let first = numbers[0]
    let sum = ((first + last)*len) / 2;
    let mean =  sum / len;
    return mean;
}