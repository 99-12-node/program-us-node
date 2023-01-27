function solution(my_string) {
    let answer = my_string.split(''); //split로 한글자씩 끊어 배열로 형을 바꿔낸다
    let reanswer = answer.reverse();  //reverse를 통해 배열을 뒤집어 준다
    
    return reanswer.join('');
}