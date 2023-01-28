function solution(x, n) {
    var answer = [];

    for(let i=1; i<=n; i++){ //1부터 시작?
      answer.push(x*i) // x*i
    }

    return answer;
}
//길이는 n으로 제한
//x씩 증가, n만큼 for(let i = 0; i < n.length; i+=x)?
//for문?
//조건과 함수는?