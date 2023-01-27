function solution(num_list) {
    let answer = [];
    let a = 0;
    let b = 0;
    console.log(num_list[3]%2);
    
    for (let i=0; i<num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            a += 1;          // a = a++ , return a += 1, 는 안됐음, 여기서 오래걸렸네
        } else {
            b++;
        }
    } return [a,b];
}

            
//             return a += 1;
//             console.log[a];
//         } else {
//             return b += 1;
//             console.log[b];
//         } 
//     } return answer.push(a,b);
// }