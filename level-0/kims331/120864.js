function solution(my_string) {
    let result = 0;
    let tmp = 0;
    //연속된 숫자는 하나의 수로 본다
    //알파벳하나의숫자알파벳 배열에서 
        for(let i = 0; i < my_string.length; i++){
            let tmp=0;
            while(!Number.isNaN(Number(my_string[i]))){
                tmp += my_string[i];
            console.log(tmp);
                i++;
        }
                result += Number(tmp);
        // console.log(result);
    }
    
    return result;
}