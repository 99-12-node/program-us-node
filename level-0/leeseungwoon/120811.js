function solution(array) {
    array.sort((a,b) => a - b);
    let val = parseInt(array.length/2);
    return array[val];
}