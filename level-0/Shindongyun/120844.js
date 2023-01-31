function solution(numbers, direction) {
    let answer = [];
        let long = numbers.length;
        //console.log(numbers.length)
        for (let i=0; i<long; i++) {
            if (direction === 'right') answer.push(numbers[(long -1 +i)%long]);
            if (direction === 'left') answer.push(numbers[(i+1)%long]); 
        }
        return answer;
    }
    
    
    
    
    // 길이 %, 방향에따라 인덱스 방향 결정
    
    // if direction= right이라면