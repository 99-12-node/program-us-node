//문자열 길이 4 or 6
//문자가 들어가면 false
//숫자만 true
//문자길이가 4 or 6 이면서 숫자로만 구성된게 같다면

function solution(s) {
return (s.length === 4 || s.length === 6) && s == parseInt(s)
}