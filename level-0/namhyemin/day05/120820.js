function solution(age) {
    const CURRENTYEAR = 2022; // 기준 연도
    
    let answer = CURRENTYEAR - age + 1; // 나이 차이 + 1 (한국나이)
    return answer;
}