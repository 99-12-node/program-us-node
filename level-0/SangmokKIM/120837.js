function solution(hp) {
    
    let a = parseInt(hp/5);
    let b = parseInt((hp-5*a)/3);
    let c = parseInt((hp-5*a)-3*b);
    
    return a+b+c;
}