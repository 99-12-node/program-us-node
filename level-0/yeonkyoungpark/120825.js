function solution(my_string, n) {
    let temp_array = my_string.split('');
    let answer = '';
    for(let i = 0; i < temp_array.length; i++){
        answer += temp_array[i].repeat(n);
    }
    return answer;
}