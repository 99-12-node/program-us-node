hp = 28 
// (5*5 + 3*1 + 1*0) 어떤 수라도 3은 한번을 넘지 않음
// 1은 2번을 넘지 않음, 5를 중심으로 돌아간다.
function solution(hp) { // 장-5 병-3 일-1 
    count = 0
    head = Math.floor(hp / 5) // hp 를 5로 나눈 몫
    resthp = hp - 5 * head // 남은 hp,경우의 수는 1,2,3,4
    if(resthp == 1){
        count++
    }else if(resthp == 2){
        count = count + 2
    }else if(resthp == 3){
        count++
    }else if(resthp == 4){
        count = count + 2
    }
    return head + count
}
solution(hp)