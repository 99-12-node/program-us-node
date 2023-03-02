function solution(my_string) {
    let answer = '';

    answer = del(del(del(del(del(my_string,'a'),'e'),'i'),'o'),'u');
    return answer;
}

function del(arr,str) {
    return arr.replaceAll(str,'');
}

// function solution(my_string) {
    
//     let str = my_string.split('');
//     return str.filter(del => !['a','e','i','o','u'].includes(del)).join('');
// }

// 이게뭐냐 ,,,z