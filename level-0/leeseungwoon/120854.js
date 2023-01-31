function solution(strlist) {
    var answer = [];
    //배열안의 원소의 길이를 알아야한다.
    for (let key of strlist){
        answer.push(key.length);
    }
    return answer;
}