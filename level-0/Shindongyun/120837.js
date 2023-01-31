function solution(hp) {
    let one = Math.floor(hp / 5);
    let two = Math.floor((hp % 5) / 3);
    let thr = (hp % 5) % 3;
    
    // console.log(one);
    // console.log(two);
    // console.log(thr);
    return one + two + thr;
}