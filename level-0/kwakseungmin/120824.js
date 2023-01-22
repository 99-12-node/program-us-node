function solution(num_list) {
    let answer1 = [];
    let answer2 = [];
    let ranswer = [];
    for(n = 0; n < num_list.length; n++){
    if(num_list[n] % 2 == 1)
        answer1.push(num_list[n])
    else if(num_list[n] % 2 == 0){
        answer2.push(num_list[n])
        }
    ranswer = [answer2.length, answer1.length];
    }
    return ranswer;
}