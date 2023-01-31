function solution(phone_number) {
    return answer = "*".repeat(phone_number.length -4) + phone_number.slice(-4);
    }

//뒤에서 4개만 표시되는 메소드 찾아보기(slice)
//실행했는데 안됨. 결괏값 뒤에 4자리만 표시됨
//*표시해야됨!