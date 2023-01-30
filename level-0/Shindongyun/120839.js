function solution(rsp) {
    let win = rsp.split('');
    let change = {
        '2' : '0',
        '0' : '5',
        '5' : '2'
    }
    // console.log(change);
    return win.map(a => change[a]).join('');
}

// 각 부분을 쪼개서 값을 변환한다.
// 값 쪼개기, 바뀔값 정하기, map이용하여 모든 요소를 변환하기