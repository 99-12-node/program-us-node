function solution(emergency) {
    let answer = [];
    let first = emergency.map(x=>x); //sort로 기존배열이 바뀌기때문에 복사해주기
    let rank = emergency.sort((a,b) => b-a);
    // console.log(first);
    // console.log(rank);
    
    for (let i=0; i<emergency.length; i++) {

        answer.push(rank.indexOf(first[i]) + 1); //emergency의 요소값의 순서 인덱스를 반환한다.
        // console.log(emergency);
    }
    return answer;
}

// 응급도가 높을수록 진료순서를 앞쪽으로 변경한다.
// 순서를 정하고 그 값에 해당하는 인덱스를 찾는다.
// sort를 이용해서 값을 찾고, 그 값에 해당하는 인덱스값을 넣어준다.
    // 중복된 원소는 없습니다. => indexOf사용가능
// emergency의 순서는 왜바뀌지?