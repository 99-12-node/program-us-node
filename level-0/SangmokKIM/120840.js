function solution(balls, share) {
    let top =1;
    let bot =1;
    let need = balls-(balls-share)
    for(let i=balls;i>need;i--){top*=i}
    for(let j=1;j<=balls-share;j++)(bot *=j)
    return parseInt(top/bot);
}