function solution(array) {
    let answer = 0;
    // 오름차순 정렬
    let sortArray = array.sort((a, b) => a - b);
    // 중앙에 위치한 값 반환
    let middleIndex = Math.floor(sortArray.length/ 2)
    answer = sortArray[middleIndex]
    return answer;
}