//seoul에 인덱스 for문 돌려서 
//if seoul[i] = kim 이면
//그거 뭐냐 `` 백틱써서 집어넣는거
//$[i]에 있다

function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`
    }
}