const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // 입력값을 반복문으로 출력
    let num = Number(input[0]);
    for (let i = 1; i < num+1; i++) {
       console.log('*'.repeat(i));
    }
});