function solution(age) {
    let alpha = ['a','b','c','d','e','f','g','h','i','j'];
    let answer = [];
    let num = (age+'').split('');
    
    for (let i=0; i<num.length; i++) {
        answer += alpha[num[i]];
        console.log(answer);
    }
    return answer;
}



//age가 주어질때 그에 해당하는 알파펫을 나오게하세요
// 나이를 인덱스로 만들고 알파벳을 붙혀준다.