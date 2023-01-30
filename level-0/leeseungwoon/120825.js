function solution(my_string, n) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        answer += my_string[i].repeat(n)     
    }
    //분리 된 문자열을 반복해주고 += 해보자
    //먼저 문자열을 분리해야하나?
    //반복된 문자열을 합쳐준다
    //결과는 my_string이 n 만큼 반복 된 문자열
    
    return answer;
}