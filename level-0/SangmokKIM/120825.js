function solution(my_string, n) {
    var answer = '';
    for (let i=0; i<my_string.length;i++){
        let oneDotOne = my_string[i];
        for(let j=0; j<n; j++){
            answer = answer + oneDotOne;
        }
    }


    // var answer = '';
    // let i =0;
    // while(i<my_string.length){
    //     let oneDotOne = my_string[i];
    //     let j =0
    //     while(j<n){
    //         answer = answer + oneDotOne;
    //         j=j+1
    //     }
    //     i=i+1
    // }
    return answer;
}