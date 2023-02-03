function solution(box, n) {
    let a = parseInt(box[0]/n)
    let b = parseInt(box[1]/n)
    let c = parseInt(box[2]/n)
    return a*b*c;
}