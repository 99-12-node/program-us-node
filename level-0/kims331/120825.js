function solution(my_string, n) {
    let answer = "";
    //문자열 n만큼 반복
    //.split('') -> 기존문자 쪼개기
    //[...]-> 객체에 속한 값("hello")만 들고오기
    //.join()->다시 문자열로 반환
    return [...my_string].map(x => x.repeat(n)).join("")
}