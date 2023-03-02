function solution(box, n) {
    let A = Math.floor(box[0] / n);
    let B = Math.floor(box[1] / n);
    let C = Math.floor(box[2] / n);
    
    console.log(A);
    console.log(B);
    console.log(C);
    
    return A * B * C;
}