function solution(my_string) {
    var answer = my_string.split("").reverse().join("");
    return answer;
//문자열 split 해서 각 배열 원소로 전환 후 배열 거꾸로 만들기 reverse 후 join 해서 배열을 문자열로 만들기
}