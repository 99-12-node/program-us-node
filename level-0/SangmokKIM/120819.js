function solution(money) {
    if (money<=1000000 && money>0){
    var takeOut = parseInt(money/5500);
    var changes = money-(5500*takeOut);
    var answer = [takeOut, changes];
    return answer;
    }
    
}