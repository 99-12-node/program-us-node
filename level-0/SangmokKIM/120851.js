function solution(my_string) {
    let answer = 0;
    my_string.split('').map(a => !isNaN(a)? answer += Number(a) : 0)
    
    return answer;
}