function solution(a, b) {
    var answer = 0;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    for(var i=min; i <= max; i++){
        answer+=i;
    }
    return answer;
    function solution(a, b) {
        var answer = 0;
        var min = Math.min(a, b);
        var max = Math.max(a, b);
        for(var i=min; i <= max; i++){
            answer+=i;
        }
        return answer;
    }
    //a와 b를 배열
    //배열한 값 합쳐서 계산
    //a와b 사이를 배열하는건 뭘까?
    //a와b 숫자의 대소 관계를 꼭 적어야되나?
    