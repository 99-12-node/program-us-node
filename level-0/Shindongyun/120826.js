function solution(my_string, letter) {
    let code = my_string.replaceAll(letter,'');   // replace(array , 치환할 값)

    return code;
}
// function solution(my_string, letter) {
//     const answer = my_string.split(letter).join('');
//     console.log(answer);
//     return answer;
// }
//          미쳤다.... split로 letter기준으로 나누고 join으로 붙혀주기