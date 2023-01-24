function solution(numbers) {
    var answer = 0;
    let sum = 0;
    //배열 각 값을 더한 후 배열 갯수를 나누면 되겠다
    
    // 배열의 각 값을 더한걸로 반환해보자.
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    answer = sum / numbers.length
    //나누기는 length를 쓰자.
    return answer;
}