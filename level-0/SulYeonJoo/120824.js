function solution(num_list) {
    let answer = [];
    let even = [];
    for (let i=0; i<num_list.length; i++){
        if (num_list[i] % 2 === 0){
            even.push(i);
        }
    }
    answer = [even.length, num_list.length - even.length]
    return answer;
}
