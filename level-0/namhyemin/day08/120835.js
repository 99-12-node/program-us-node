function solution(emergency) {
    let answer = [];
    let sorted = [...emergency];
    
    // 내림차순 정렬로 새로 만들기
    sorted.sort((a, b) => b - a);
    
    // 위 리스트의 인덱스를 활용해 배열 반환
    for (let i = 0; i < emergency.length; i++) {
        answer.push(sorted.indexOf(emergency[i])+1);
    }
    
    return answer;
}