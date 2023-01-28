function solution(array) {

    let steps = array.sort((a, b) => a - b)
    let num = parseInt(steps.length/2)
    return (array[num]);
}