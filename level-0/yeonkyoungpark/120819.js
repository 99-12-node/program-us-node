function solution(money) {
    var answer = [];
    let coffee = 5500;
    let drink = 0;
    let changes = 0;
    
    drink = Math.floor(money / coffee);
    changes = money % coffee;
    
    answer.push(drink);
    answer.push(changes);
    
    return answer;
}