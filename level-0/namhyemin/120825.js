function solution(my_string, n) {
    let answer = '';
    for (let i = 0 ; i < my_string.length; i++) {
        let string = my_string[i];
        answer += string.repeat(n);
    }
    
    return answer;
}