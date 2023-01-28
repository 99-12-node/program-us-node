function solution(age) {
    const AGEALPHA = 'abcdefghij';
    let answer = '';
    
    let ageString = age + ''; // 나이 숫자를 문자열로 변환
    
    for (let age of ageString) { // 나이 숫자를 인덱스로 삼아 알파벳 소문자 연결
        answer += AGEALPHA[+age];
    }
    
    return answer;
}