   //약수(숫자n을 n의 약수로 나누었을때 나머지 0)가 3개이상 -> 합성수
    //즉, n을 소수로 나누기 가능
    function solution(n) {
        let answer = 0;
            //합성수의 최소 시작 범위
        for(let i = 4; i <= n; i++){
            // 소수 찾기
            for(let j = 2; j < i; j++){
        
                if(i % j === 0){
                    answer ++;
                    break;
                }
            }
        }
    
        return answer;
    }