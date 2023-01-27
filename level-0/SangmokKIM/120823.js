const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    let n = Number(input[0]);
    
    let line = 1
    while(line <=n){
        let stars="";
        let count = 0;
        
        while(count < line){
            stars = stars+"*"
            count = count+1
            
        }
        console.log(stars)
        
        line = line +1
    }
    // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
});