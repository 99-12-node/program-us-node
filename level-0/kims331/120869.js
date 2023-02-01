function solution(spell, dic) {
    let answer = 0;

    for(let i=0; i<dic.length; i++){
        let alpa = 0;
        for(let j=0; j<spell.length; j++){
            if(dic[i].includes(spell[j])){
                alpa+=1;
                continue;
            }
        }
        if(alpa==spell.length){
            return 1;
        }
    }


    return 2;
}