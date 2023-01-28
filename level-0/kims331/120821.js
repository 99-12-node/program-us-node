function solution(num_list) {
    let answer = [];
    //배열 뒤집기 구글링
    for( i = num_list.length -1; i >= 0; i--) {
        answer.push(num_list[i])
    }
    return answer;
}