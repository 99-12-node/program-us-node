function solution(my_string, letter) {
    let answer = '';
    
    // 문자열 전체 차례대로 letter와 비교
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== letter) {
            answer += my_string[i];
        }
    }
    
    return answer;
}