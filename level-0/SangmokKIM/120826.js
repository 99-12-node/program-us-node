function solution(my_string, letter) {
    var answer = '';
    for(let i=0; i<my_string.length;i++){
        if(my_string[i] != letter){
            answer = answer+my_string[i]
        } else {
            answer = answer
        }
    }
    return answer;
}