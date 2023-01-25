function solution(array) {
    let lookgood = array.sort((a,b) => a-b);
    let cnt = 0;
    
    let manyNum = -1; //최빈값
    let manyCnt = 0; //최빈값 나온 횟수
    let nowCnt = 0; //지금 숫자가 나온 횟수
    let beforeNum = -1;//array[cnt] 이전 숫자
    let sameCnt = false;
    while(cnt < array.length){
        if(beforeNum !== array[cnt]){
            nowCnt = 1;
        } else {
            nowCnt = nowCnt +1;
        }
        
        if(nowCnt === manyCnt){
            if(manyNum !== array[cnt]){
                sameCnt = true;
            }
            
        }
        
        if(nowCnt > manyCnt){
            manyNum = array[cnt];
            manyCnt = nowCnt;
            sameCnt = false;
        }
        beforeNum = array[cnt];
        cnt = cnt +1;
    }
    if(sameCnt) return -1;
    return manyNum;
}