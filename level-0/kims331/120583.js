function solution(array, n) {
    let answer = 0;
    //중복된 숫자 세기? 배열안에서 찾아서 표현!
    //
    for(i=0; i< array.length; i++){
        if(array[i] == n){
            answer++;
        }    
    }
    return answer;
}