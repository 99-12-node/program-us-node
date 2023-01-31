function solution(numbers) {
    let answer = 0;
      // 배열 오름차순 정렬
      //가장 큰 두개 값 *하여
        numbers.sort((a, b) => b - a);
        answer = numbers[0]*numbers[1]
    return answer;
  }