balls = 5 
share = 3
function solution(balls, share) {
    let son = balls
    let mo = share
    for (let i = 1; i < share; i++){
        son = son * (balls - i)   //5*4(20) * 3 = 60    
        mo = mo * (share - i)   //3*2(6) * 1 = 6
        
    }
    console.log(son / mo)
}
// 구슬 abcde 5개 중에 나눔 3 개 선택 5*4*3 / 3*2*1
// abc abd abe acd ace ade bcd bce bde cde //10

// 5개 중 2개 선택 5 * 4 /  2 * 1
// ab ac ad ae bc bd be cd ce de  // 10

// 구슬 abc 3개 중 2개 선택 3*2* / 2*1
// ab ac bc  //3 
solution(balls, share)