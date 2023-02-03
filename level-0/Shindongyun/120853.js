function solution(s) {
    let result = 0;
    let num = s.split(' ');
    
    for (let i=0; i<num.length; i++) {
        if (num[i] !== 'Z') {
            result += +num[i];
        }
        if (num[i] === 'Z') {
            result -= +num[i-1];
        }
    }
    return result;
}


//z의 인덱스를 구해서 그 바로 앞자리는 빼준다(생략한다)