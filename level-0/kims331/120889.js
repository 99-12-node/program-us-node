function solution(sides) {
    let answer =0 ;
    //가장 긴변 = a, 나머지 두변 b,c
    //삼각형 조건a<b+c
    //가능하면 return1 아니라면 return2 출력
    // sides 를 계산하기 쉽게 오름차순으로 정렬.
    sides.sort(function(a, b)  {
        return a - b;
    });
    
    console.log(sides);
    // for 문으로 돌리기
    for(let i=0; i<sides.length; i++){
    // sides[2]가 sides[0] + sides[1]의 값보다 작을때
        if(sides[2] < sides[0] + sides[1]){
            answer = 1;
        } else {
            answer = 2;
        }
    }
    return answer;
}