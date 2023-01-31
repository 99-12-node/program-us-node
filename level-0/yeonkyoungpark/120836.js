let n = 20;

    let answer = 0;
    for(let i = 1; i<=n; i++){
        if(n%i === 0){
            answer += 1;
        }
    }
    console.log(answer);
