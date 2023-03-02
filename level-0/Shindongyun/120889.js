function solution(sides) {
    let trianlge = sides.sort((a, b) => b - a);
    console.log(trianlge[0]);
    console.log(trianlge[1]);
    console.log(trianlge[2]);
    
    if (trianlge[0] < (trianlge[1] + trianlge[2])) {
        return 1;
    } 
    else {
        return 2;
    }
}