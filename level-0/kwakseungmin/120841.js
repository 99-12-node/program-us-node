function solution(dot) {
    var dot0 = dot[0];
    var dot1 = dot[1];
    if(dot0> 0 && dot1 > 0) {
        return 1
    }else if(dot0 > 0 && dot1 < 0){
             return 4
             }else if(dot0< 0 && dot1 > 0){
        return 2
    } else if(dot0 < 0 && dot1<0){
    return 3
    }
}