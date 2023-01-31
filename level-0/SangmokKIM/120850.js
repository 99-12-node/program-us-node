function solution(my_string) {
    let answer = [];
    my_string.split('').map(a => !isNaN(a)? answer.push(Number(a)):0)
    let clean = answer.sort((a,b)=>a-b)
    return clean;
}