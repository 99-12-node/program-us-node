function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer +=  absolutes[i];
        } else {
            answer += absolutes[i] * -1;
        }
    }
    return answer
}

// 하단에 있는 코드들은 팀원들과 상의해본것!











// 1. sign[0] = false면 absolutes[0]을 음수로 바꾸는 for문 작성
// 2. absolutes 안의 배열의 수를 모두 더하는 for문 작성하여 반환

function solution(absolutes, signs) {
    var answer = 123456789;
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] == "false") {                
            absolutes[i] = absolutes[i] * -1;
        }
    }
    console.log(absolutes)
    return answer;
}
// false => 문자열이 아닌 불리언
// 실행 안 됨

function solution(absolutes, signs) {
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] == false) {
            absolutes[i] = absolutes[i] * -1;
        }
    }
    
    let sum = 0;
    for(let i = 0; i < absolutes.length; i++) {
        sum = sum + absolutes[i];
    }
    return sum;
}


//여기부터는 양수, 음수로 변환이 아닌 더하고 뺀값
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    return answer
}

// 문자열이 아닌 불리언으로 작성해서 해결

// 문제에 어떤 타입으로 되어있는지 적혀있으니, 확인할 것