function solution(age) {
    var answer = '';
    let abc = ['a','b','c','d','e','f','g','h','i','j',];
    let ages = String(age).split('');//[2,3]
    for(let i = 0; i<ages.length; i++){
        answer += abc[ages[i]];
    }
    return answer;
}