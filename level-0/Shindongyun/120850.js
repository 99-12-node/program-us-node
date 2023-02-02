function solution(my_string) {
    var answer = [];
    let spStr = my_string.split('');

        for (let num in spStr) {
            if (!isNaN(spStr[num])) {
                answer.push(+spStr[num]);
            }
        }
    
//         for (let num of spStr) {
//             if (!isNaN(num)) {
//                 answer.push(+num);
//             }
//         }

//         for (let i=0; i<split.length; i++) {
//             if (!isNaN(split[i])) {
//                 answer.push(+split[i]);
//             }
//         }
    return answer.sort();
}

// //정규표현식
// function solution(my_string) {
    
//     return my_string.replace(/[^0-9]/g,'')
//                     .split('')
//                     .sort()
//                     .map(x=>+x);
// }
