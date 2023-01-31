function solution(n) {
    for (let i=1; i<=n; i++){
        if (6*i%n === 0) return i
    }
    
    // for (let i=1; i<=n; i++){
    //   if (n*i%6 === 0) return Math.floor(n*i/6)
    // }
   
}