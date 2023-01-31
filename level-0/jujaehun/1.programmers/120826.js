// 특정 문자 제거하기

// my_string 이라는 문자열과 letter 라는 문자 입력이 매개변수로 주어짐.
function solution(my_string, letter) {
    // answer 문자열로 선언!
    let answer = my_string.replace(letter,"");
    let real_answer = answer.replace(letter,"")
    let realreal_answer = real_answer.replace(letter,"")
    let realrealreal_answer = realreal_answer.replace(letter,"")
    let realrealrealreal_answer = realrealreal_answer.replace(letter,"")
    let realrealrealrealreal_answer = realrealrealreal_answer.replace(letter,"")
    // answer를 반환
    return realrealrealrealreal_answer;
}

// 이거 다시해야함
