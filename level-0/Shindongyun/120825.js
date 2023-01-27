function solution(my_string, n) {
    // let answer = my_string.repeat(3);
    // console.log(answer);                // hellohellohello 출력
    let divdString = my_string.split('');  // ['h','e','l','l','o']
    let answer = [];
    
    for (let i=0; i<divdString.length; i++) {
        answer.push(divdString[i].repeat(n));
    } return answer.join("");
}

    //divdString.repeat(3).join('')        이건 왜 안될까 하나의 문자열이 아니라 그런걸까? 배열이라?