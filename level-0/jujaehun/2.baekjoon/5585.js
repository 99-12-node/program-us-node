/* 
타로는 자주 JOI잡화점에서 물건을 산다. JOI잡화점에는 잔돈으로 500엔,
 100엔, 50엔, 10엔, 5엔, 1엔이 충분히 있고, 언제나 거스름돈 개수가
  가장 적게 잔돈을 준다. 타로가 JOI잡화점에서 물건을 사고 카운터에서
   1000엔 지폐를 한장 냈을 때, 받을 잔돈에 포함된 잔돈의 개수를 
   구하는 프로그램을 작성하시오.

입력
입력은 한줄로 이루어져있고, 타로가 지불할 돈(1 이상 1000미만의 정수)
 1개가 쓰여져있다.

출력
제출할 출력 파일은 1행으로만 되어 있다. 잔돈에 포함된 매수를 출력하시오.


예제 입력 1 
380
예제 출력 1 
4
예제 입력 2 
1
예제 출력 2 
15


*/

function solution (paidMoney){
    let answer = 0;
    let change = 1000 - paidMoney
    
    while(change >= 500){
        change -= 500;
        answer++;
    }
    while(change >= 100){
        change -= 100;
        answer++;
    }
    while(change >= 50){
        change -= 50;
        answer++;
    }
    while(change >= 10){
        change -= 10;
        answer++;
    }
    while(change >= 5){
        change -= 5;
        answer++;
    }
    while(change >= 1){
        change -= 1;
        answer++;
    }
    return answer;
}

paidMoney = 380;

console.log(solution(paidMoney))