function solution(num_list) {
    let edd = 0; //짝수갯수 구하기
    let odd = 0;//홀수 갯수 구하기
    var answer = [];
    for(let i = 0; i<num_list.length; i++){
        if(num_list[i] % 2 === 1){
            edd += 1; //1
        }else{
            odd += 1;
        }
    }
    answer[0] = odd;
    answer[1] = edd;
    return answer;
}