function solution(participant, completion) {
    participant.sort(); 
    completion.sort(); 
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            
            return participant[i];
            
        }
    }
}
//sort 로 part와 complet 배열 놓고
//part 전체 for문 돌려서
//전체돌린 part[i]와 !=  complet[i]
//
