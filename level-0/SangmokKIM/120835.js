function solution(emergency) {
    let answer = [];
    for(let i=0;i<emergency.length;i++){
        
        let count = emergency.length
        for(let j=0;j<emergency.length;j++){
            if(i!=j&&emergency[i]>emergency[j]){
                count -= 1
            }
        }
        answer.push(count)
    }
    return answer
}