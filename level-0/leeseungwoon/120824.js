function solution(num_list) {
    let zero = 0;
    let one = 0;
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i]%2===0){
            zero++;
        }else{
            one++;
        }
    }
    return [zero,one]
}